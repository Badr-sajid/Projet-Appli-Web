import React, { Component } from 'react';
import HeaderCitoyen from './HeaderCitoyen';
import history from './history';



class ConsulterDemarche extends Component {



    constructor(props) {
        super(props);
        this.state = {typeDemarche: "", element: null};

    }


     componentDidMount() {
        const type = this.props.location.state.typeDemarche;
        const id = this.props.location.state.idDemarche;
        const url = "http://localhost:8080/Web-Project/project/GetDemandeById/"+id;
        fetch(url)
        .then(res => res.json())
        .then(
        (data) => { 
          this.setState({demarche: data});
          if (type == "carte") {
            this.setState({element: 
            <table id="customers">
            <tr>
              <th>Nom</th>
              <th>Prenom</th>
              <th>Date de naissance</th>
            </tr>
            <tr>
              <td>{data.demandeCarteSejour.nom}</td>
              <td>{data.demandeCarteSejour.prenom}</td>
              <td>{data.demandeCarteSejour.datedenaissance}</td>
            </tr>
            <tr>
              <th>Civilit√©</th>
              <th>Adresse</th>
              <th>Nationalit√©</th>
            </tr>
            <tr>
              <td>{data.demandeCarteSejour.genre}</td>
              <td>{data.demandeCarteSejour.adresse}</td>
              <td>{data.demandeCarteSejour.nationnalite}</td>
            </tr>
            <tr>
              <th>Lieu de naissance</th>
              <th>Statue</th>
              <th>Revenus mensuels</th>
            </tr>
            <tr>
              <td>{data.demandeCarteSejour.lieudenaissance}</td>
              <td>{data.demandeCarteSejour.statut}</td>
              <td>{data.demandeCarteSejour.revenumensuel}</td>
            </tr>
          </table>});
          } else if (type == "passeport") {
            this.setState({element: 
                <table id="customers">
                <tr>
                  <th>Nom</th>
                  <th>Prenom</th>
                  <th>Date de naissance</th>
                </tr>
                <tr>
                  <td>{data.demandePasseport.nom}</td>
                  <td>{data.demandePasseport.prenom}</td>
                  <td>{data.demandePasseport.datedenaissance}</td>
                </tr>
                <tr>
                  <th>Civilit√©</th>
                  <th>Adresse</th>
                  <th>Nationalit√©</th>
                </tr>
                <tr>
                  <td>{data.demandePasseport.genre}</td>
                  <td>{data.demandePasseport.adresse}</td>
                  <td>Fran√ßais</td>
                </tr>
                <tr>
                  <th>Lieu de naissance</th>
                  <th>Statut</th>
                  <th>Remaruqes </th>
                </tr>
                <tr>
                  <td>{data.demandePasseport.lieudenaissance}</td>
                  <td>{data.demandePasseport.statut}</td>
                  <td>{data.demandePasseport.remarque}</td>
                </tr>
              </table>});

          } else {
            this.setState({element: 
                <table id="customers">
                <tr>
                  <th>Nom</th>
                  <th>Prenom</th>
                  <th>Date de naissance</th>
                </tr>
                <tr>
                  <td>{data.demandeImmatriculation.nom}</td>
                  <td>{data.demandeImmatriculation.prenom}</td>
                  <td>{data.demandeImmatriculation.datedenaissance}</td>
                </tr>
                <tr>
                  <th>Civilit√©</th>
                  <th>Date de naissance</th>
                  <th>Lieu de naissance</th>
                </tr>
                <tr>
                  <td>{data.demandeImmatriculation.genre}</td>
                  <td>{data.demandeImmatriculation.datedenaissance}</td>
                  <td>{data.demandeImmatriculation.lieudenaissance}</td>
                </tr>
                <tr>
                  <th>Num√©ro d'immatriculation</th>
                  <th>Date d'achat</th>
                  <th>Date de certification </th>
                </tr>
                <tr>
                  <td>{data.demandeImmatriculation.numeroImmatriculation}</td>
                  <td>{data.demandeImmatriculation.dateAchat}</td>
                  <td>{data.demandeImmatriculation.dateCertificat}</td>
                </tr>
                <tr>
                  <th>Date d'immatriculation</th>
                  <th>Num√©ro de formulaire</th>
                  <th>D√©nomination commerciale</th>
                </tr>
                <tr>
                  <td>{data.demandeImmatriculation.dateImmatriculation1}</td>
                  <td>{data.demandeImmatriculation.numeroFormulaire}</td>
                  <td>{data.demandeImmatriculation.denominationCommerciale}</td>
                </tr>
                <tr>
                  <th>Type et version</th>
                  <th>Num√©ro de v√©hicule</th>
                  <th>Genre national</th>
                </tr>
                <tr>
                  <td>{data.demandeImmatriculation.typeVersion}</td>
                  <td>{data.demandeImmatriculation.numeroVehicule}</td>
                  <td>{data.demandeImmatriculation.genreNational}</td>
                </tr>
                <tr>
                  <th>Num√©ro d'exploitation</th>
                  <th>Nuance couleur</th>
                  <th>Couleur dominante</th>
                </tr>
                <tr>
                  <td>{data.demandeImmatriculation.numeroExploitation}</td>
                  <td>{data.demandeImmatriculation.nuanceCouleur}</td>
                  <td>{data.demandeImmatriculation.couleurDominant}</td>
                </tr>
              </table>
              });          }
                  },
        // Remarque : il est important de traiter les erreurs ici
        // au lieu d'utiliser un bloc catch(), pour ne pas passer √† la trappe
        // des exceptions provenant de r√©els bugs du composant.
        (error) => {

        }
        )

     } 



    render() {




        if (this.state.typeDemarche == "carte") {
/*          ; */

        } else if (this.state.typeDemarche == "passeport") {

        } else {

        }

        return (
            <div>
                <HeaderCitoyen id={this.props.location.state.idCitoyen}/>
                <hr className="overall-separator" />
                <br></br>

                <h2 className="question-title"> Consultation de la d√©marche  </h2>
                <br></br>

                {this.state.element}

                        
                <br></br>
                <div className="end">
                    <center>Copyright <span>&#169;</span> 2021 tous les droits r√©s√©rv√©s.</center>
                </div>



            </div>
        )
    }
    
}

  
export default ConsulterDemarche;