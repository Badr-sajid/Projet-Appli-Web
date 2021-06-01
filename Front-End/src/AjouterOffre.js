import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

import Header from './Header';
import HeaderFonctionnaire from './HeaderFonctionnaire';
import history from './history';


class AjouterOffre extends Component {

    constructor(props) {
        super(props);
        this.state ={
            selectedFile:null,
            userdata:{},
            titre:"",
            description: "",
            nomEntreprise: "",
            typeDePoste: "",
            duree:"",
            remuneration:"",
            dateDebut:"",
        }
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    onFormSubmit(e){
        e.preventDefault() // Stop form submit

                  // Ajout Citoyen
        fetch("http://localhost:8080/Web-Project/project/AddOffre", {
          method: "post",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
                    titre: this.state.titre,
                    description: this.state.description,
                    nomEntreprise: this.state.nomEntreprise,
                    typeDePoste: this.state.typeDePoste,
                    duree: this.state.duree,
                    remuneration: this.state.remuneration,
                    dateDebut: this.state.dateDebut,
                    postePourvu:"false"

            })
        });
        history.push("/TraitementCandidature");

          
          

    }


    render(){
        return(
          <div>
                <HeaderFonctionnaire />
                <hr className="overall-separator" />

                <form onSubmit={this.onFormSubmit}>
                    <h3 className="carte-sejour">Ajout d'une nouvelle Offre</h3>
                    <div className="form-group">
                        <label>Titre</label>
                        <input type="text" name="nom" className="form-control" onChange={(e) => {this.setState({titre: e.target.value})}} />
                    </div>
                    <br></br>
                    <div className="form-group">
                        <label>Description</label>
                        <input type="text" name="prenom" className="form-control" onChange={(e) => {this.setState({description: e.target.value})}} />
                    </div>
                    <br></br>
                    <div className="form-group">
                        <label>Nom de l'entreprise affiliée </label>
                        <input type="text" name="adresse" className="form-control" onChange={(e) => {this.setState({nomEntreprise: e.target.value})}}/>
                    </div>
                    <br></br>
                    <div className="form-group">
                    <label>Type de poste </label>
                    <input type="text" name="lieudenaissance" className="form-control" onChange={(e) => {this.setState({typeDePoste: e.target.value})}} />
                    </div>
                    <br></br>
                    <div className="form-group">
                    <label>Durée </label>
                    <input type="text" name="nationalite" className="form-control" onChange={(e) => {this.setState({duree: e.target.value})}} />
                    </div>
                    <br></br>
                    <div className="form-group">
                    <label>Rénumération </label>
                    <input type="text" name="statut" className="form-control" onChange={(e) => {this.setState({remuneration: e.target.value})}} />
                    </div>
                    <br></br>
                    <div className="form-group">
                    <label>Date de début </label>
                    <input type="date"  className="form-control" id="start" name="trip-start" onChange={(e) => {this.setState({dateDebut: e.target.value})}} />
                    </div>
                    <br></br>
                    <button type="submit" className="btn   btn-primary btn-block">Ajouter l'offre</button>
                    
                </form>
            </div>
        )
    }

  
}


export default AjouterOffre;