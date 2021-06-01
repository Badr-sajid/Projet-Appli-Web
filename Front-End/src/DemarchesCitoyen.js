import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

import { NavLink } from 'react-router-dom';

import Header from './Header';
import HeaderCitoyen from './HeaderCitoyen'; 

import carte from './pictures/carte.png'
import passeport from './pictures/passeport.png'
import immatriculation from './pictures/immatriculation.png'



import history from './history';

class Gestion extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="gestion-button-container">
                <Button className="gerer-demandes" variant="contained" color="default" onClick={() => window.location.reload()}>Démarches administratives</Button>
                <Button className="gerer-demandes" variant="contained" color="default" onClick={() => history.push({pathname: "/Plainte",
                                state: {id: this.props.id}})}> Questions</Button>
                
            </div>
            
        )
    }
}

class DemarchesAdministratives extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <div className="demarches-container">
                <NavLink to={{pathname:'/DemandeCarte', state: {id: this.props.id}}}><img src={carte}></img></NavLink>
                <NavLink to={{pathname:'/DemandePasseport', state: {id: this.props.id}}}><img src={passeport}></img></NavLink>
                <NavLink to={{pathname:'/DemandeImmatriculation', state: {id: this.props.id}}}><img src={immatriculation}></img></NavLink>
                </div>
            </div>
        )
    }
    
}


class SuiviDemarches extends Component {

    constructor(props) {
      super(props);
      this.state = {items: []};
    }
    
    
    componentDidMount() {

      const url = "http://localhost:8080/Web-Project/project/GetLoginId/"+this.props.id;

      fetch(url).then(res => res.json()).then((result) => {
            const url2 = "http://localhost:8080/Web-Project/project/DemandeCitoyenById/"+result[0]["idLogin"];
            fetch(url2)
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
                )})
      }



    render() {


        const questions = this.state.items;

        const elements = []

        for (const[index, value] of questions.entries()) {



            if (value.estTraite == "true") {

                elements.push(
                    <div className="demandes-container">
                                        <hr className="separate-demandes"></hr>
                        <div className="demandes-1-container">
                            <div className="demandes-content-container">
                                <div className="demande-text">
                                    <span> Demande de {value.typeDemande} </span>
                                    <span className="etat-traitement" style={{color: 'green'}}> [ Traitée ]</span>
                                </div>
                                <div className="demande-buttons">
                                    <button className="cosulter" type="button"  onClick={() => history.push({pathname: "/ConsulterDemarche",
                                state: {idCitoyen:this.props.id , typeDemarche: value.typeDemande, idDemarche: value.id}})}>Consulter</button>
                                </div>
                            </div>
                        </div>
                        <hr className="separate-demandes"></hr>
                    </div>
                )
            } else {

                elements.push(
                    <div className="demandes-container">
                                        <hr className="separate-demandes"></hr>
                        <div className="demandes-1-container">
                            <div className="demandes-content-container">
                                <div className="demande-text">
                                    <span> Demande de {value.typeDemande} </span>
                                    <spav className="etat-traitement" style={{color: 'red'}}> [ Non encore traitée ]</spav>
                                </div>
                                <div className="demande-buttons">
                                    <button className="cosulter" type="button" onClick={() => history.push({pathname: "/ConsulterDemarche",
                                state: {idCitoyen:this.props.id , typeDemarche: value.typeDemande, idDemarche: value.id}})}>Consulter</button>
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
            {elements}
          </div>
        )
    }
}


class SuiviQuestions extends Component {

    constructor(props) {
      super(props);
      this.state = {items: []};
    }
    
    
    componentDidMount() {

      const url = "http://localhost:8080/Web-Project/project/GetLoginId/"+this.props.id;

      fetch(url).then(res => res.json()).then((result) => {
            const url2 = "http://localhost:8080/Web-Project/project/QuestionCitoyenById/"+result[0]["idLogin"];
            fetch(url2)
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
                )})
      }



    render() {


        const questions = this.state.items;

        const elements = []

        for (const[index, value] of questions.entries()) {

            if (value.estTraite == "true") {

                elements.push(
                    <div className="demandes-container">
                                        <hr className="separate-demandes"></hr>
                        <div className="demandes-1-container">
                            <div className="demandes-content-container">
                                <div className="demande-text">
                                    <span> Question : {value.question} </span>
                                    <span className="etat-traitement" style={{color: 'green'}}> [ Traitée ]</span>
                                </div>
                                <div className="demande-buttons">
                                    <button className="cosulter" type="button"
                                    onClick={() => history.push({pathname: "/ConsulterQuestion",
                                    state: {idCitoyen:this.props.id , typeDemarche: value.typeDemande, idDemarche: value.id}})}>Consulter</button>
                                </div>
                            </div>
                        </div>
                        <hr className="separate-demandes"></hr>
                    </div>
                )
            } else {

                elements.push(
                    <div className="demandes-container">
                                        <hr className="separate-demandes"></hr>
                        <div className="demandes-1-container">
                            <div className="demandes-content-container">
                                <div className="demande-text">
                                    <span> Question : {value.question} </span>
                                    <spav className="etat-traitement" style={{color: 'red'}}> [ Non encore traitée ]</spav>
                                </div>
                                <div className="demande-buttons" >
                                    <button className="cosulter" type="button"
                                    onClick={() => history.push({pathname: "/ConsulterQuestion",
                                    state: {idCitoyen:this.props.id , typeDemarche: value.typeDemande, idDemarche: value.id}})}>Consulter</button>
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
            {elements}
          </div>
        )
    }
}



class DemarchesCitoyen extends Component {

    constructor(props) {
        super(props);
    }

    render() {
      return (
          <div>
              <HeaderCitoyen  id={this.props.location.state.id} />
              <hr className="overall-separator" />
              <h2 className="question-title"> Demarches et Plaintes </h2>
              <br></br>


              <Gestion id={this.props.location.state.id}/>
              <DemarchesAdministratives id={this.props.location.state.id} />

              <hr className="separate-demandes"></hr>
              <h2 className="question-title"> Suivi des demarches </h2>
              <br></br>

              <SuiviDemarches id={this.props.location.state.id} />

              <hr className="separate-demandes"></hr>
              <br></br>
              <h2 className="question-title"> Suivi des questions </h2>
              <br></br>


              <SuiviQuestions id={this.props.location.state.id} />


              <br></br>
              <div className="end">
              <center>Copyright <span>&#169;</span> 2021 tous les droits résérvés.</center>
              </div>



          </div>

      );
    }
  
}

export default DemarchesCitoyen;