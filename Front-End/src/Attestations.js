import React, { Component } from 'react';

import jeunesol from './pictures/1.png'
import attestation1 from './pictures/attestation1.png'
import attestation2 from './pictures/attestation2.png'
import attestation3 from './pictures/attestation3.png'

class Attestations extends Component {

    constructor(props) {
      super(props);
      this.state = {value: 0};
      this.attestations = ["Attestation de déplacement",
                           "Attestation de déplacement et de voyage", 
                           "Déplacement inter-régionaux", 
                           "Déplacement à l'étranger"];
      this.pictures = [attestation1, attestation2, attestation3, attestation3];
      this.contents = ["Sur l’ensemble du territoire métropolitain, un couvre-feu s'applique de 19h à 6h et des mesures renforcées sont en vigueur tous les jours de la semaine de 6h à 19h.",
      "Pour faire face au virus et limiter l’introduction de ses variants, des mesures de contrôle aux frontières sont temporairement nécessaires, à l’entrée comme à la sortie.", 
      "Pour se rendre en Outre-Mer, il vous faudra notamment avoir un motif impérieux de déplacement (motifs personnel ou familial, de santé relevant de l’urgence, professionnel à justifier par tout moyen) et présenter, pour toute personne de plus de 11 ans, avant l’embarquement le résultat négatif d’un test virologique « RT-PCR COVID » datant de moins de moins de 72h avant le départ.", 
      "Les déplacements à l'étranger sont déconseillés vu la situation sanitaire, vous trouverez la liste des pays avec lesquels ces déplacements sont permis."];
      this.links=["https://www.interieur.gouv.fr/content/download/127509/1019040/file/19-05-2021-attestation-de-deplacement-derogatoire.pdf#xtor=AD-322",
                  "https://www.interieur.gouv.fr/content/download/125988/1007782/file/25-01-2021-engagement-sur-l-honneur-plus-de-11-ans-espace-europeen.pdf",
                  "https://www.interieur.gouv.fr/content/download/126159/1008903/file/2021-02-04-attestation-de-deplacement-depuis-la-france-metropolitaine-vers-un-pays-exterieur-a-l-espace-europeen.pdf",
                  "https://www.interieur.gouv.fr/content/download/126159/1008903/file/2021-02-04-attestation-de-deplacement-depuis-la-france-metropolitaine-vers-un-pays-exterieur-a-l-espace-europeen.pdf"]
      this.handleClick = this.handleClick.bind(this);
    }
  
  
    handleClick(event, i) {
      this.setState({value: i});
    }
  
  
    render() {
      return (
        <div className="page-content">
          <div className="banner">
            <a href="https://covidtracker.fr/">
              <img className="jeune-sol" src={jeunesol}></img>
            </a>
            <div className="column-position">
              <div className="columns">
                <div className="display-blocks">
                  <div className="left-slides">
                    <a className="attestation" onClick={(e) => this.handleClick(e,0)}>
                      <span className="slide-content">{this.attestations[0]}</span></a>
                    <a className="attestation" onClick={(e) => this.handleClick(e,1)}>
                      <span className="slide-content">{this.attestations[1]}</span></a>
                    <a className="attestation" onClick={(e) => this.handleClick(e,2)}>
                      <span className="slide-content">{this.attestations[2]}</span></a>
                    <a className="attestation" onClick={(e) => this.handleClick(e,3)}>
                      <span className="slide-content">{this.attestations[3]}</span></a>
                  </div>
  
                  <div className="middle-slides">
                    <div className="middle-slides-content">
                      <div className="middle-slides-content-text">
                        <div className="slide-main-text">
                          <dl>
                            <dt>{this.attestations[this.state.value]}</dt>
                            <dd>
                              <div className="publication-date">
                                Publié le 26 Avril 2021
                              </div>
                              <div className="publication-text">
                                <p>
                                  {this.contents[this.state.value]}
                                </p>
                                <hr className="clearfloat"></hr>
                              </div>
                            </dd>
                          </dl>
                        </div>
                      </div>
                      <div className="right-slide">
                        <a href={this.links[this.state.value]}><img className="right-slide-image" src={this.pictures[this.state.value]}></img></a>
                      </div>
                    </div>
                  </div>
  
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }


export default Attestations;