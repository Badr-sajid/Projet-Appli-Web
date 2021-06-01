import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import HeaderCitoyen from './HeaderCitoyen';
import history from './history';



class Plainte extends Component {



    constructor(props) {
        super(props);
        this.state = {textareaVal: "", idCitoyen: 1};
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }


    componentDidMount(){
        // Recuperer les informations de citoyen.
        const url = "http://localhost:8080/Web-Project/project/GetLoginId/"+this.props.location.state.id;
        fetch(url)
        .then(res => res.json())
        .then(
        (data) => {
          console.log(data);
          this.setState({idCitoyen: data[0]["idLogin"]});
        },
        // Remarque : il est important de traiter les erreurs ici
        // au lieu d'utiliser un bloc catch(), pour ne pas passer à la trappe
        // des exceptions provenant de réels bugs du composant.
        (error) => {

        }
        )

    }

    handleClick(event, id)  {
        const question = this.state.textareaVal;
        const url = "http://localhost:8080/Web-Project/project/AddQuestion";
        history.goBack();
        fetch(url, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                citoyen: {id: this.state.idCitoyen},
                question: question,
                reponse: "",
                estTraite: "false"
            })
        })
    }

    handleChange(event) {
        this.setState({textareaVal: event.target.value});
    }


    render() {
        return (
            <div>
                <HeaderCitoyen id={this.props.location.state.id}/>
                <hr className="overall-separator" />
                <br></br>


                <h2 className="question-title"> Poser une question </h2>
                <br></br>
                <div className="reponse-textfield">
                    <textarea ref='myTextarea' value={this.state.textareaVal} onChange={(e) => this.handleChange(e)} rows="10" cols="100">
                    </textarea>
                    <hr className="separate-demandes"></hr>
                    <Button className="envoyer-response" variant="contained" color="default" onClick={(e) => this.handleClick(e,this.props.location.state.id)}>Envoyer</Button>
                </div>

                        
                <br></br>
                <div className="end">
                    <center>Copyright <span>&#169;</span> 2021 tous les droits résérvés.</center>
                </div>



            </div>
        )
    }
    
}

  
export default Plainte;