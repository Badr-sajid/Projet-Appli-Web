import React, { Component } from 'react';

import recrutement from './pictures/recrutement.png';
import history from './history'

class Recrutement extends Component {
    render() {
      return (
        <div className="recrutement">
          <div className="recrutement-container">
            <img className="recrutement-image" src={recrutement}></img>
            <div className="recrutement-text-container">
              <h2> Le Ministère Recrute ! </h2>
              <p> Retrouvez ici toutes les informations concernant les métiers du Ministre de l'intérieur et les modes de recrutement.
              </p>
              <button className="rejoindre" type="button" onClick={() => history.push("/Candidature")}>Nous rejoindre</button>
            </div>
          </div>
          <div>
            <br></br>
              <em>Une question ? Besoin d'aide? Consulter notre aide en ligne ou contacter nous: </em> 
              <button className="aide" type="button">Consulter le centre d'aide</button>
          </div>
        </div>
      );
    }
  
  
  }

  
export default Recrutement;