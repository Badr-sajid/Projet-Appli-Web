import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Header from './Header';
import history from './history';
import HeaderFonctionnaire from './HeaderFonctionnaire';

class AjouterArticle extends Component {


    constructor(props) {
        super(props);
        this.state = {titre:"", contenu: "",isSubmitted:""};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event)  {
        event.preventDefault();

        const url = "http://localhost:8080/Web-Project/project/AddActualite/";
        fetch(url, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                titre: this.state.titre,
                text: this.state.contenu,
            })
        }).then((response) => response.json()).then( (data) => {

            console.log(data);

            if (data){
                this.setState({isSubmitted: "true"});
            } else {
                this.setState({isSubmitted: "true"});
            }
            if (this.state.isSubmitted =="true"){
                history.push({pathname: "/UploadImageArticle",
                                state: {idActualite: data.id}})
            }
        })
    }

    handleChange(event) {
        this.setState({contenu: event.target.value});
    }


    render() {
        return (
            <div className="AjouterArticle">
                <HeaderFonctionnaire />
                <hr className="overall-separator" />

                <h2 className="reponse-title"> Ajouter un article </h2>
                <br></br>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Titre de l'article</label>
                        <input type="text" onChange={(e) => {this.setState({titre: e.target.value})}}  className="form-control" placeholder="Entrer le titre de l'article"/>
                    </div>
                    <br></br>
                    <label>Contenu de l'article</label>
                    <div className="form-group">
                        <textarea ref='myTextarea' title="Entrer le contenu" onChange={(e) => {this.setState({contenu: e.target.value})}} rows="20" cols="117">
                </textarea>
                    </div>
                    <br></br>
                    <button type="submit" className="btn   btn-primary btn-block">Ajouter une photo</button>
                    <br></br>
                </form>
            </div>
          );
 }
}


export default AjouterArticle;