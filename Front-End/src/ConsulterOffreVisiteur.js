import React, { Component } from 'react';
import Header from './HeaderCitoyen';
import Button from '@material-ui/core/Button';
import history from './history';



class ConsulterOffreVisiteur extends Component {



    constructor(props) {
        super(props);
        this.state = {typeDemarche: "", element: null};

    }


     componentDidMount() {
        const id = this.props.location.state.idOffre;
        const url = "http://localhost:8080/Web-Project/project/GetOffreById/"+id;
        fetch(url)
        .then(res => res.json())
        .then(
        (data) => { 
          this.setState({demarche: data});
            this.setState({element: 
           <div>
                    <table id="customers">
                    <tr>
                    <th>Titre</th>
                    <th>Type de poste</th>
                    <th>Nom de l'entreprise </th>
                    </tr>
                    <tr>
                    <td>{data.titre}</td>
                    <td>{data.typeDePoste}</td>
                    <td>{data.nomEntreprise}</td>
                    </tr>
                    <tr>
                    <th>Date de début</th>
                    <th>Durée</th>
                    <th>Rénumération</th>
                    </tr>
                    <tr>
                    <td>{data.dateDebut}</td>
                    <td>{data.duree}</td>
                    <td>{data.remuneration}</td>
                    </tr>
                    <tr>
                    <th>Description</th>
                    <th>Poste pourvu</th>
                    </tr>
                    <tr>
                    <td>{data.description}</td>
                    <td>{data.postePourvu}</td>
                    </tr>
                </table>
                <br></br>
                <br></br>
                <br></br>
                <Button className="button-postuler" variant="contained" color="default" onClick={() => history.push('/DemarcheError')}> Postuler </Button>
        </div>
          
        
        });
                             },
        // Remarque : il est important de traiter les erreurs ici
        // au lieu d'utiliser un bloc catch(), pour ne pas passer à la trappe
        // des exceptions provenant de réels bugs du composant.
        (error) => {

        }
        )

     } 



    render() {


        return (
            <div>
                <Header />
                <hr className="overall-separator" />
                <br></br>

                <h2 className="question-title"> Consultation de l'offre </h2>
                <br></br>

                {this.state.element}

                        
                <br></br>
                <div className="end">
                    <center>Copyright <span>&#169;</span> 2021 tous les droits résérvés.</center>
                </div>



            </div>
        )
    }
    
}

  
export default ConsulterOffreVisiteur;