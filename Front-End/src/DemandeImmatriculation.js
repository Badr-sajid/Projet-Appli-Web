import React, {Component} from "react";
import './auth-css/auth.css';

import HeaderCitoyen from './HeaderCitoyen';
import history from './history';


class DemandeImmatriculation extends Component {


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
            numeroImmatriculation: 0,
            dateAchat: "",
            dateCertificat: "",
            dateImmatriculation1: "",
            numeroFormulaire: "",
            denominationCommerciale: "",
            typeVersion: "",
            numeroVehicule: "",
            genreNational: "",
            numeroExploitation: "",
            nuanceCouleur: "",
            couleurDominant: "",
            idCitoyen: 1,
        }
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onFileChange = this.onFileChange.bind(this)
    }
    onFileChange = event => { 
        // Update the state 
        this.setState({ selectedFile: event.target.files[0] }); 
      }; 
    // On file upload (click the upload button) 
    onFileUpload = () => { 
        // Create an object of formData 
        const formData = new FormData(); 
        
        // Update the formData object 
        formData.append( 
            "fichier", 
            this.state.selectedFile, 
            this.state.selectedFile.name 
        ); 
        
        // Details of the uploaded file 
        console.log(this.state.selectedFile); 
        
        // Request made to the backend api 
        // Send formData object 
        //fetch("api/uploadfile", formData); 
        }; 
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
            typeDemande: "immatriculation",
            estTraite: "false",
            demandeImmatriculation: {
              genre: this.state.userdata["civilite"],
              nom: this.state.userdata["nom"],
              prenom: this.state.userdata["prenom"],
              datedenaissance: this.state.userdata["dateDeNaissance"],
              lieudenaissance: this.state.userdata["lieuDeNaissance"],
              numeroImmatriculation: this.state.numeroImmatriculation,
              dateAchat: this.state.dateAchat,
              dateCertificat: this.state.dateCertificat,
              dateImmatriculation1: this.state.dateImmatriculation1,
              numeroFormulaire: this.state.numeroFormulaire,
              denominationCommerciale: this.state.denominationCommerciale,
              typeVersion: this.state.typeVersion,
              numeroVehicule: this.state.numeroVehicule,
              genreNational: this.state.genreNational,
              numeroExploitation: this.state.numeroExploitation,
              nuanceCouleur: this.state.nuanceCouleur,
              couleurDominant: this.state.couleurDominant,
            }
  
  
          })
          });    
          history.push({pathname: "/UploadImmatriculation",
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
                    <h3 className="carte-sejour">Demande de passeport</h3>
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
                    <label>Numero d'immatriculation </label>
                    <input type="text" name="dateAchat" className="form-control" onChange={(e) => {this.setState({numeroImmatriculation: e.target.value})}}/>
                    </div>
                    <br></br>
                    <div className="form-group">
                    <label>dateAchat </label>
                    <input type="text" name="dateAchat" className="form-control" onChange={(e) => {this.setState({dateAchat: e.target.value})}}/>
                    </div>
                    <br></br>
                    <div className="form-group">
                    <label>dateCertificat </label>
                    <input type="text" name="dateCertificat" className="form-control" onChange={(e) => {this.setState({dateCertificat: e.target.value})}}/>
                    </div>
                    <br></br>
                    <div className="form-group">
                    <label>dateImmatriculation </label>
                    <input type="text" name="dateImmatriculation1" className="form-control" onChange={(e) => {this.setState({dateImmatriculation1: e.target.value})}}/>
                    </div>
                    <br></br>

                    <div className="form-group">
                    <label>numeroFormulaire </label>
                    <input type="text" name="numeroFormulaire" className="form-control" onChange={(e) => {this.setState({numeroFormulaire: e.target.value})}}/>
                    </div>
                    <br></br>

                    <div className="form-group">
                    <label>denominationCommerciale </label>
                    <input type="text" name="denominationCommerciale" className="form-control" onChange={(e) => {this.setState({denominationCommerciale: e.target.value})}}/>
                    </div>
                    <br></br>

                    <div className="form-group">
                    <label>typeVersion </label>
                    <input type="text" name="typeVersion" className="form-control" onChange={(e) => {this.setState({typeVersion: e.target.value})}}/>
                    </div>
                    <br></br>

                    <div className="form-group">
                    <label>numeroVehicule </label>
                    <input type="text" name="numeroVehicule" className="form-control" onChange={(e) => {this.setState({numeroVehicule: e.target.value})}}/>
                    </div>
                    <br></br>

                    <div className="form-group">
                    <label>genreNational </label>
                    <input type="text" name="genreNational" className="form-control" onChange={(e) => {this.setState({genreNational: e.target.value})}}/>
                    </div>
                    <br></br>

                    <div className="form-group">
                    <label>numeroExploitation </label>
                    <input type="text" name="numeroExploitation" className="form-control" onChange={(e) => {this.setState({numeroExploitation: e.target.value})}}/>
                    </div>
                    <br></br>

                    <div className="form-group">
                    <label>nuanceCouleur </label>
                    <input type="text" name="nuanceCouleur" className="form-control" onChange={(e) => {this.setState({nuanceCouleur: e.target.value})}}/>
                    </div>
                    <br></br>

                    <div className="form-group">
                    <label>couleurDominant </label>
                    <input type="text" name="couleurDominant" className="form-control" onChange={(e) => {this.setState({couleurDominant: e.target.value})}}/>
                    </div>
                    <br></br>

                    <br></br>
                    <button type="submit" className="btn   btn-primary btn-block">Envoyer la demande</button>
                    
                </form>
            </div>
        )
    }
}

export default DemandeImmatriculation;