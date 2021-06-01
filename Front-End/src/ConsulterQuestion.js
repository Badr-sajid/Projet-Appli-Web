import React, { Component } from 'react';
import HeaderCitoyen from './HeaderCitoyen';
import history from './history';




class ConsulterQuestion extends Component {



    constructor(props) {
        super(props);
        this.state = {typeDemarche: "", element: null};

    }


     componentDidMount() {
        const type = this.props.location.state.typeDemarche;
        const id = this.props.location.state.idDemarche;
        const url = "http://localhost:8080/Web-Project/project/GetQuestionById/"+id;
        fetch(url)
        .then(res => res.json())
        .then(
        (data) => { 
            this.setState({element: <table id="customers">
            <tr>
              <th>Question</th>
              <th>Réponse</th>
            </tr>
            <tr>
              <td>{data.question}</td>
              <td>{data.reponse}</td>
            </tr>
          </table>});


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
                <HeaderCitoyen id={this.props.location.state.idCitoyen}/>
                <hr className="overall-separator" />
                <br></br>

                <h2 className="question-title"> Consultation de la question  </h2>
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

  

  
export default ConsulterQuestion;