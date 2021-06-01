import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

import Header from './Header';
import HeaderFonctionnaire from './HeaderFonctionnaire';
import history from './history';


class TraitementCandidature extends Component {


    constructor(props) {
        super(props);
        this.state = {items: []};
    }

    
        componentDidMount() {
            fetch("http://localhost:8080/Web-Project/project/GetCandidature")
            .then(res => res.json())
            .then(
                (result) => {
                this.setState({
                    isLoaded: true,
                    items: result
                });
                },
                // Remarque : il est important de traiter les erreurs ici
                // au lieu d'utiliser un bloc catch(), pour ne pas passer à la trappe
                // des exceptions provenant de réels bugs du composant.
                (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
                }
            )
            }
  
  
    render() {


        const candidatures = this.state.items;

        const elements = [];



        for (const[index, value] of Array.from(candidatures.entries()).reverse()) {
            if (value.etat == "nontraite") {
                        elements.push(
                                <div className="demandes-container" >
                                <hr className="separate-demandes"></hr>
                                <div className="demandes-1-container">
                                    <div className="demandes-content-container" >
                                        <div className="demande-text">
                                            <span> Candidature de l'offre : {value.offre.titre} - {value.offre.typeDePoste} </span>
                                        </div>
                                        <div className="demande-buttons">
                                            <button className="traiter" type="button"
                                             onClick={() => history.push({pathname: "/ConsulterCandidature",
                                            state: {idCitoyen:this.props.id , idCandidature: value.id}})}>Consulter</button>
                                        </div>
                                    </div>
                                </div>
                                <hr className="separate-demandes"></hr>
                            </div>
                        )
                }
            
        }


      return (

        <div>
              <HeaderFonctionnaire />   
              <hr className="overall-separator" />
           
              <h2 className="offre-title"> Candidatures en cours :</h2>
              <br></br>
              {elements}
              <br></br>

              <h2 className="offre-title"> Ajouter des offres :</h2>
              <br></br>

              <Button className="gerer-demandes" variant="contained" color="default" onClick={() => history.push("/AjouterOffre")}> Ajouter une offre </Button>
              <br></br>

              <div className="end">
              <br></br>
              <br></br>

              <br></br>


              <center>Copyright <span>&#169;</span> 2021 tous les droits résérvés.</center>
              </div>
        </div>

        
      );
    }
}


export default TraitementCandidature;