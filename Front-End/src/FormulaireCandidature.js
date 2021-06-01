import React, {Component} from "react";
import './auth-css/auth.css';

import HeaderCitoyen from './HeaderCitoyen';
import history from './history';


class FormulaireCandidature extends Component {


    constructor(props) {
        super(props);
        this.state ={
            selectedFile:null,
            userdata:{},
            idCitoyen: 1,
            idOffre: 1,
        }
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    onFormSubmit(e){
        e.preventDefault() // Stop form submit
        // Traitement de candidature
        fetch("http://localhost:8080/Web-Project/project/AddCandidature", {
          method: "post",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            offre: {id: this.props.location.state.idOffre},
            citoyen: {id: this.state.idCitoyen},
            etat: "nontraite",
            })
          });    
          history.push({pathname: "/UploadCV",
          state: {id: this.props.location.state.id, idCitoyen: this.state.idCitoyen, idOffre: this.props.location.state.idOffre}})
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
                    <h3 className="carte-sejour">Candidature à l'offre</h3>
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
                    <label>E-mail </label>
                    <input type="text" name="email" disabled className="form-control" value={this.props.location.state.id}/>
                    </div>
                    <br></br>
                    <button type="submit" className="btn   btn-primary btn-block">Poursuivre la candidature</button>
                    <br></br>
                    
                </form>
            </div>
        )
    }
}

export default FormulaireCandidature;