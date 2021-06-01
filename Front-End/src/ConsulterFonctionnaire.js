import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import HeaderFonctionnaire from './HeaderFonctionnaire';
import history from './history';



class ConsulterFonctionnaire extends Component {



    constructor(props) {
        super(props);
        this.state = {typeDemarche: "", element: null};

    }


    handleClick(event, id, etat)  {
      const url = "http://localhost:8080/Web-Project/project/UpdateDemandeById/"+id+"/"+etat;
      history.goBack();
      fetch(url, {
          method: "PUT",
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(null)
      })
   }



     componentDidMount() {
        const type = this.props.location.state.typeDemarche;
        const id = this.props.location.state.idDemarche;
        const url = "http://localhost:8080/Web-Project/project/GetDemandeById/"+id;
        fetch(url)
        .then(res => res.json())
        .then(
        (data) => { 
          const url2 = "http://localhost:8080/Web-Project/project/GetUrlById/"+id;
          fetch(url2)
          .then(res => res.json())
          .then((result) => { this.setState({demarche: data});
          if (type == "carte") {
            this.setState({element: 
            <div>
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
                  <th>Civilité</th>
                  <th>Adresse</th>
                  <th>Nationalité</th>
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
              </table>

              <br></br>
              <h2 className="question-title"> Consultation des documents </h2>
               <br></br>
               <div className="traitement-container">
                <Button className="gerer-demandes" variant="contained" color="default"
                onClick={(e) => window.open('http://localhost:8080/Web-Project/Download?file='+result[0]["url"], '_blank') }> Document 1 </Button>
                <Button className="gerer-demandes" variant="contained" color="default"
                onClick={(e) => window.open('http://localhost:8080/Web-Project/Download?file='+result[1]["url"], '_blank')}> Document 2 </Button>
                                <Button className="gerer-demandes" variant="contained" color="default"
                onClick={(e) => window.open('http://localhost:8080/Web-Project/Download?file='+result[2]["url"], '_blank')}> Document 3 </Button>

                </div>

                <br></br>
              <h2 className="question-title"> Traitement de la demande </h2>
               <br></br>

                <div className="traitement-container">
                <Button className="gerer-demandes" variant="contained" style={{backgroundColor: "green"}}
                onClick={(e) => this.handleClick(e,data.id,"true")}> Valider </Button>
                <Button className="gerer-demandes" variant="contained" style={{backgroundColor: "red"}}
                onClick={(e) => this.handleClick(e,data.id,"false")}> Refuser </Button>

                </div>
          </div>
          
          });
          } else if (type == "passeport") {
            this.setState({element: 
              <div>
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
                  <th>Civilité</th>
                  <th>Adresse</th>
                  <th>Nationalité</th>
                </tr>
                <tr>
                  <td>{data.demandePasseport.genre}</td>
                  <td>{data.demandePasseport.adresse}</td>
                  <td>Français</td>
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
              </table>

              <br></br>
              <h2 className="question-title"> Consultation des documents </h2>
               <br></br>
               <div className="traitement-container">
                <Button className="gerer-demandes" variant="contained" color="default"
                onClick={(e) => window.open('http://localhost:8080/Web-Project/Download?file='+result[0]["url"], '_blank') }> Document 1 </Button>
                <Button className="gerer-demandes" variant="contained" color="default"
                onClick={(e) => window.open('http://localhost:8080/Web-Project/Download?file='+result[1]["url"], '_blank')}> Document 2 </Button>
                                <Button className="gerer-demandes" variant="contained" color="default"
                onClick={(e) => window.open('http://localhost:8080/Web-Project/Download?file='+result[2]["url"], '_blank')}> Document 3 </Button>

                </div>

                <br></br>
              <h2 className="question-title"> Traitement de la demande </h2>


              
                                      
              <br></br>
                <div className="traitement-container">
                <Button className="gerer-demandes" variant="contained" style={{backgroundColor: "green"}}
                onClick={(e) => this.handleClick(e,data.id,"true")}> Valider </Button>
                <Button className="gerer-demandes" variant="contained" style={{backgroundColor: "red"}}
                onClick={(e) => this.handleClick(e,data.id,"false")}> Refuser </Button>

                </div>
            </div>
              
              });

          } else {
            this.setState({element: 
              <div>
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
                  <th>Civilité</th>
                  <th>Date de naissance</th>
                  <th>Lieu de naissance</th>
                </tr>
                <tr>
                  <td>{data.demandeImmatriculation.genre}</td>
                  <td>{data.demandeImmatriculation.datedenaissance}</td>
                  <td>{data.demandeImmatriculation.lieudenaissance}</td>
                </tr>
                <tr>
                  <th>Numéro d'immatriculation</th>
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
                  <th>Numéro de formulaire</th>
                  <th>Dénomination commerciale</th>
                </tr>
                <tr>
                  <td>{data.demandeImmatriculation.dateImmatriculation1}</td>
                  <td>{data.demandeImmatriculation.numeroFormulaire}</td>
                  <td>{data.demandeImmatriculation.denominationCommerciale}</td>
                </tr>
                <tr>
                  <th>Type et version</th>
                  <th>Numéro de véhicule</th>
                  <th>Genre national</th>
                </tr>
                <tr>
                  <td>{data.demandeImmatriculation.typeVersion}</td>
                  <td>{data.demandeImmatriculation.numeroVehicule}</td>
                  <td>{data.demandeImmatriculation.genreNational}</td>
                </tr>
                <tr>
                  <th>Numéro d'exploitation</th>
                  <th>Nuance couleur</th>
                  <th>Couleur dominante</th>
                </tr>
                <tr>
                  <td>{data.demandeImmatriculation.numeroExploitation}</td>
                  <td>{data.demandeImmatriculation.nuanceCouleur}</td>
                  <td>{data.demandeImmatriculation.couleurDominant}</td>
                </tr>
              </table>

              <br></br>
              <h2 className="question-title"> Consultation des documents </h2>
               <br></br>
               <div className="traitement-container">
                <Button className="gerer-demandes" variant="contained" color="default"
                onClick={(e) => window.open('http://localhost:8080/Web-Project/Download?file='+result[0]["url"], '_blank') }> Document 1 </Button>
                <Button className="gerer-demandes" variant="contained" color="default"
                onClick={(e) => window.open('http://localhost:8080/Web-Project/Download?file='+result[1]["url"], '_blank')}> Document 2 </Button>
                                <Button className="gerer-demandes" variant="contained" color="default"
                onClick={(e) => window.open('http://localhost:8080/Web-Project/Download?file='+result[2]["url"], '_blank')}> Document 3 </Button>

                </div>

                <br></br>
              <h2 className="question-title"> Traitement de la demande </h2>
                                      
              <br></br>
                <div className="traitement-container">
                <Button className="gerer-demandes" variant="contained" style={{backgroundColor: "green"}}
                onClick={(e) => this.handleClick(e,data.id,"true")}> Valider </Button>
                <Button className="gerer-demandes" variant="contained" style={{backgroundColor: "red"}}
                onClick={(e) => this.handleClick(e,data.id,"false")}> Refuser </Button>
                </div>
            </div>
              
              });          }})


 
                  },
        // Remarque : il est important de traiter les erreurs ici
        // au lieu d'utiliser un bloc catch(), pour ne pas passer à la trappe
        // des exceptions provenant de réels bugs du composant.
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
                <HeaderFonctionnaire />
                <hr className="overall-separator" />
                <br></br>

                <h2 className="question-title"> Consultation de la démarche  </h2>
                <br></br>

                {this.state.element}


                    <br></br>

                    <br></br>
                    <br></br>

                    <center>Copyright <span>&#169;</span> 2021 tous les droits résérvés.</center>



            </div>
        )
    }
    
}

  
export default ConsulterFonctionnaire;