import React, {Component} from "react";
import './auth-css/auth.css';
import { Redirect } from 'react-router';
import history from './history';
import { withRouter } from "react-router-dom";
import axios from 'axios';
import testUtils from "react-dom/test-utils";
import Header from './Header';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state ={
            email:"",
            mdp:"",
            isLogged:""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    handleSubmit(event){
        event.preventDefault();
        const url = "http://localhost:8080/Web-Project/project/verification/"+this.state.email+"/"+this.state.mdp;
        const success = fetch(url, {
        method: "get",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        })
        .then( (response) => response.json())
        .then( (data) =>{
            if (data)  {
                this.setState({isLogged: "true"});
            } else {
                this.setState({isLogged: "false"})
            }
            if (this.state.isLogged == "true" && this.state.email != "admin@gmail.com") {
                history.push({pathname: "/HomeCitoyen",
                                state: {id: this.state.email}})
            } else if (this.state.isLogged == "true" && this.state.email == "admin@gmail.com") {
                history.push({pathname: "/HomeFonctionnaire",
                state: {id: this.state.email}})
            } else {
                history.push("/LoginError");
            }
        
         });

    }


    render(){
        return(
         <div>
                <Header />
                <hr className="overall-separator" />

                <form onSubmit={this.handleSubmit}>
                    <h3 className="connexion">Connexion</h3>
                    <div className="form-group">
                        <label>Adresse E-mail</label>
                        <input type="email" onChange={(e) => {this.setState({email: e.target.value})}}  className="form-control" placeholder="Entrer votre e-mail"/>
                    </div>
                    <br></br>
                    <div className="form-group">
                        <label>Mot de passe</label>
                        <input type="password" onChange={(e) => {this.setState({mdp: e.target.value})}}  className="form-control" placeholder="Entrer votre mot de passe"/>
                    </div>
                    <br></br>
                    <button type="submit" className="btn   btn-primary btn-block">Connexion</button>
                    <p className="bottom-text text-right">
                        <a href="#"> Mot de passe oublié ?</a>
                    </p>
                    <p className="bottom-text text-left">
                        <a href="/signup"> Inscription</a>
                    </p>
                </form>


                <br></br>
                <div className="end">
                <center>Copyright <span>&#169;</span> 2021 tous les droits résérvés.</center>
                </div>

        </div>   
        )
    }
}

export default withRouter(Login);