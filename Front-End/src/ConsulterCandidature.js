import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import HeaderFonctionnaire from './HeaderFonctionnaire';
import history from './history';



class ConsulterCandidature extends Component {



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
        const idCandidature = this.props.location.state.idCandidature;
        const url = "http://localhost:8080/Web-Project/project/GetCandidatureById/"+idCandidature;
        fetch(url)
        .then(res => res.json())
        .then( (data) => {
            this.setState({element:
                <div>
                <table id="customers">
                <tr>
                  <th>Nom</th>
                  <th>Prenom</th>
                  <th>Date de naissance</th>
                </tr>
                <tr>
                  <td>{data.citoyen.nom}</td>
                  <td>{data.citoyen.prenom}</td>
                  <td>{data.citoyen.dateDeNaissance}</td>
                </tr>
                <tr>
                  <th>Civilité</th>
                  <th>Statut</th>
                  <th>Nationalité</th>
                </tr>
                <tr>
                  <td>{data.citoyen.civilite}</td>
                  <td>{data.citoyen.statut}</td>
                  <td>{data.citoyen.nationalite}</td>
                </tr>
                <tr>
                  <th>Titre de l'offre</th>
                  <th>Type du poste</th>
                  <th>Durée </th>
                </tr>
                <tr>
                  <td>{data.offre.titre}</td>
                  <td>{data.offre.description}</td>
                  <td>{data.offre.duree}</td>
                </tr>
              </table>
              <br></br>
              <br></br>
              <h2 className="question-title"> Consultation des documents </h2>
              <br></br>

              <Button className="gerer-demandes" variant="contained" color="default"
                onClick={(e) => window.open('http://localhost:8080/Web-Project/Download?file='+data.cvcandidature.url, '_blank') }> CV </Button>
              </div>
            
            })
        });
        

     } 



    render() {



        return (
            <div>
                <HeaderFonctionnaire />
                <hr className="overall-separator" />
                <br></br>

                <h2 className="question-title"> Consultation de la candidature  </h2>
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

  
export default ConsulterCandidature;