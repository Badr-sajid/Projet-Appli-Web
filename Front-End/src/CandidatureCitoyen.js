import React, { Component } from 'react';

import HeaderCitoyen from './HeaderCitoyen';
import history from './history';


class CandidatureCitoyen extends Component {


    constructor(props) {
        super(props);
        this.state = {items: []};
    }

    
        componentDidMount() {
            fetch("http://localhost:8080/Web-Project/project/GetOffre")
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


        const offres = this.state.items;

        const elementsStage = [];

        const elementsAlternance = [];

        const elementsCDD = [];

        const elementsCDI = []


        for (const[index, value] of offres.entries()) {
            if (value.postePourvu == "false") {
                if (value.typeDePoste == "stage") {
                        elementsStage.push(
                                <div className="demandes-container" >
                                <hr className="separate-demandes"></hr>
                                <div className="demandes-1-container">
                                    <div className="demandes-content-container" >
                                        <div className="demande-text">
                                            <span> Offre de stage: {value.titre} </span>
                                        </div>
                                        <div className="demande-buttons">
                                            <button className="Répondre" type="button"
                                            onClick={() => history.push({pathname: "/ConsulterOffre",
                                            state: {idCitoyen:this.props.location.state.id, idOffre: value.id}})}>Consulter</button>
                                        </div>
                                    </div>
                                </div>
                                <hr className="separate-demandes"></hr>
                            </div>
                        )
                 } else if (value.typeDePoste == "alternance") {
                        elementsAlternance.push(
                            <div className="demandes-container" >
                            <hr className="separate-demandes"></hr>
                            <div className="demandes-1-container">
                                <div className="demandes-content-container" >
                                    <div className="demande-text">
                                        <span> Offre d'alternance : {value.titre} </span>
                                    </div>
                                    <div className="demande-buttons">
                                        <button className="Répondre" type="button"
                                        onClick={() => history.push({pathname: "/ConsulterOffre",
                                        state: {idCitoyen:this.props.location.state.id, idOffre: value.id}})}>Consulter</button>
                                    </div>
                                </div>
                            </div>
                            <hr className="separate-demandes"></hr>
                        </div>
                        )
                } else if (value.typeDePoste == "CDD") {
                        elementsCDD.push(
                            <div className="demandes-container" >
                            <hr className="separate-demandes"></hr>
                            <div className="demandes-1-container">
                                <div className="demandes-content-container" >
                                    <div className="demande-text">
                                        <span> Offre de CDD : {value.titre} </span>
                                    </div>
                                    <div className="demande-buttons">
                                        <button className="Répondre" type="button"
                                        onClick={() => history.push({pathname: "/ConsulterOffre",
                                        state: {idCitoyen:this.props.location.state.id, idOffre: value.id}})}>Consulter</button>
                                    </div>
                                </div>
                            </div>
                            <hr className="separate-demandes"></hr>
                        </div>
                        )
                } else {
                        elementsCDI.push(
                            <div className="demandes-container" >
                            <hr className="separate-demandes"></hr>
                            <div className="demandes-1-container">
                                <div className="demandes-content-container" >
                                    <div className="demande-text">
                                        <span> Offre de CDI : {value.titre} </span>
                                    </div>
                                    <div className="demande-buttons">
                                        <button className="Répondre" type="button"
                                        onClick={() => history.push({pathname: "/ConsulterOffre",
                                        state: {idCitoyen:this.props.location.state.id, idOffre: value.id}})}>Consulter</button>
                                    </div>
                                </div>
                            </div>
                            <hr className="separate-demandes"></hr>
                        </div>
                        )
                }
            }
        }


      return (
          <div>
              <HeaderCitoyen id={this.props.location.state.id} />   
              <hr className="overall-separator" />
           
              <h2 className="offre-title"> Nos offres d'emploi et stages :</h2>
              <br></br>

              <h3 className="offre-title"> Offres de Stages : </h3>
              <br></br>

              {elementsStage}
              <br></br>


              <h3 className="offre-title"> Offres d'alternance :</h3>
              <br></br>

              {elementsAlternance}
              <br></br>


              <h3 className="offre-title"> Offres de CDD :</h3>
              <br></br>

              {elementsCDD}
              <br></br>


              <h3 className="offre-title"> Offres de CDI :</h3>
              <br></br>

              {elementsCDI}
              <br></br>

              <div className="end">
              <center>Copyright <span>&#169;</span> 2021 tous les droits résérvés.</center>
            </div>

         </div>
 

        
      );
    }
  }


export default CandidatureCitoyen;