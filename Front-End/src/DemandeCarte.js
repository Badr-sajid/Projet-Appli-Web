import React, {Component} from "react";
import './auth-css/auth.css';

import HeaderCitoyen from './HeaderCitoyen';
import history from './history';


class DemandeCarte extends Component {


    constructor(props) {
        super(props);
        this.state ={
            selectedFile:null,
            userdata:{},
            civilite:"",
            nom: "",
            prenom: "",
            datedenaisssance: "",
            lieudenaissance:"",
            nationalite:"",
            adresse:"",
            statut:"",
            revenu: 0,
            idCitoyen: 1,
        }
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    onFormSubmit(e){
        e.preventDefault() // Stop form submit

                  // Ajout Citoyen
        fetch("http://localhost:8080/Web-Project/project/AddDemande", {
          method: "post",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            citoyen: {id: this.state.idCitoyen},
            typeDemande: "carte",
            estTraite: "false",
            demandeCarteSejour: {
              genre: this.state.userdata["civilite"],
              nom: this.state.userdata["nom"],
              prenom: this.state.userdata["prenom"],
              adresse: this.state.adresse,
              datedenaissance: this.state.userdata["dateDeNaissance"],
              lieudenaissance: this.state.userdata["lieuDeNaissance"],
              nationnalite: this.state.userdata["nationalite"],
              statut: this.state.userdata["statut"],
              revenumensuel: this.state.revenu,
            }
  
  
          })
          });    
          history.push({pathname: "/UploadCarteSejour",
          state: {id: this.props.location.state.id}})

    }


    componentDidMount(){
        // Recuperer les informations de citoyen.
        const url = "http://localhost:8080/Web-Project/project/GetLoginId/"+this.props.location.state.id;

        fetch(url).then(res => res.json()).then((result) => {
          this.setState({idCitoyen: result[0]["idLogin"]});
          const url2 = "http://localhost:8080/Web-Project/project/GetCitoyenById/"+result[0]["idLogin"];
          fetch(url2)
              .then(res => res.json())
              .then(
              (data) => {
                console.log(data);
                this.setState({userdata: data});
              },
              // Remarque : il est important de traiter les erreurs ici
              // au lieu d'utiliser un bloc catch(), pour ne pas passer à la trappe
              // des exceptions provenant de réels bugs du composant.
              (error) => {

              }
              )})

    }

    render(){
        return(
          <div>
                <HeaderCitoyen id={this.props.location.state.id} />
                <hr className="overall-separator" />

                <form onSubmit={this.onFormSubmit}>
                    <h3 className="carte-sejour">Demande de carte de séjour</h3>
                    <div className="form-group">
                        <label>Nom</label>
                        <input type="text" name="nom" className="form-control" disabled value={this.state.userdata["nom"]}/>
                    </div>
                    <br></br>
                    <div className="form-group">
                        <label>Prenom</label>
                        <input type="text" name="prenom" className="form-control" disabled value={this.state.userdata["prenom"]}/>
                    </div>
                    <br></br>
                    <div className="form-group">
                        <label>Date de naissance  </label>
                        <input type="date"  className="form-control" id="start" name="trip-start"
                                disabled
                                value={this.state.userdata["dateDeNaissance"]}
                              />
                    </div>
                    <br></br>
                    <div className="form-group">
                    <label>Lieu de naissance </label>
                    <input type="text" name="lieudenaissance" className="form-control" disabled value={this.state.userdata["lieuDeNaissance"]} />
                    </div>
                    <br></br>
                    <div className="form-group">
                    <label>Nationalité </label>
                    <input type="text" name="nationalite" className="form-control" disabled value={this.state.userdata["nationalite"]}/>
                    </div>
                    <br></br>
                    <div className="form-group">
                    <label>Statut </label>
                    <input type="text" name="statut" className="form-control" value={this.state.userdata["statut"]}/>
                    </div>
                    <br></br>
                    <div className="form-group">
                    <label>Adresse </label>
                    <input type="text" name="adresse" className="form-control" onChange={(e) => {this.setState({adresse: e.target.value})}}/>
                    </div>
                    <br></br>
                    <div className="form-group">
                    <label>Revenu mensuel en Euro </label>
                    <input type="text" name="revenumensuel" className="form-control" onChange={(e) => {this.setState({revenu: e.target.value})}}/>
                    </div>
                    <br></br>
                    <button type="submit" className="btn   btn-primary btn-block">Envoyer la demande</button>
                    
                </form>
            </div>
        )
    }
}

export default DemandeCarte;