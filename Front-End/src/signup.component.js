import React, {Component} from "react";
import './auth-css/auth.css';
import Header from './Header';
import history from './history';


export default class Signup extends Component {
    constructor(props) {
        super(props);
        this.state ={
            civilite:"",
            nom: "",
            prenom: "",
            datedenaisssance: "",
            lieudenaissance:"",
            nationalite:"",
            adresse:"",
            email:"",
            motdepasse:"",
            statut:"",
            data:null
        }
        this.onFormSubmit = this.onFormSubmit.bind(this)
    }
    onFormSubmit(e){
        e.preventDefault() // Stop form submit

        // Ajout Citoyen
        fetch("http://localhost:8080/Web-Project/project/AddCitoyen", {
        method: "post",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          civilite:this.state.civilite,
          nom:this.state.nom,
          prenom:this.state.prenom,
          contact:null,
          dateDeNaissance:this.state.datedenaisssance,
          lieuDeNaissance:this.state.lieudenaissance,
          nationalite:this.state.nationalite,
          statut:this.state.statut,

        })
        })
        .then( (response) => { 
            //Récupérer ID de citoyen.
            const url = "http://localhost:8080/Web-Project/project/GetCitoyenId/"+this.state.nom+"/"+this.state.prenom+"/"+this.state.datedenaisssance+"/"+this.state.lieudenaissance+"/"+this.state.nationalite;
            fetch(url, {
                method:"get",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then(response => response.json()).then((data) => 
            // Ajout de login de citoyen.
            fetch("http://localhost:8080/Web-Project/project/AddLogin", {
            method: "post",
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
            email:this.state.email,
            mdp:this.state.motdepasse,
            type:"CITOYEN",
            idLogin:data[0]["id"]
            })
            })
            .then( (response) => { 
                //do something awesome that makes the world a better place
                
            })
            );
        });
        history.push("/Home");
    }
    render(){
        return(
            <div>
                <Header />
                <hr className="overall-separator" />
                <form onSubmit={this.onFormSubmit}>
                    <h3 className="inscription">Inscription</h3>
                    <div className="form-group">
                        <label>Civilite  </label><br></br>
                        <input type="radio"  name="civilite" value="M" onChange={(e) => {this.setState({civilite: e.target.value})}} /> M.    
                        <input type="radio" className="civilite-radio" name="civilite" value="Mme" onChange={(e) => {this.setState({civilite: e.target.value})}}/> Mme 
                        <input type="radio" className="civilite-radio" name="civilite" value="Melle" onChange={(e) => {this.setState({civilite: e.target.value})}}/> Melle
                        
                    </div>
                    <br></br>
                    <div className="form-group">
                        <label>Nom</label>
                        <input type="text" name="nom" className="form-control" placeholder="Votre nom" onChange={(e) => {this.setState({nom: e.target.value})}}/>
                    </div>
                    <br></br>
                    <div className="form-group">
                        <label>Prenom</label>
                        <input type="text" name="prenom" className="form-control" placeholder="Votre prenom" onChange={(e) => {this.setState({prenom: e.target.value})}}/>
                    </div>
                    <br></br>
                    <div className="form-group">
                        <label>Date de naissance  </label>
                        <input type="date"  className="form-control" id="start" name="trip-start"
                            onChange={(e) => {this.setState({datedenaisssance: e.target.value})}}
                            />
                    </div>
                    <br></br>
                    <div className="form-group">
                    <label>Lieu de naissance </label>
                    <input type="text" name="lieudenaissance" className="form-control" placeholder="Votre lieu de naissance" onChange={(e) => {this.setState({lieudenaissance: e.target.value})}}/>
                    </div>
                    <br></br>
                    <div className="form-group">
                    <label>Nationalité </label>
                    <input type="text" name="nationalite" className="form-control" placeholder="Votre nationalité" onChange={(e) => {this.setState({nationalite: e.target.value})}}/>
                    </div>
                    <br></br>
                    <div className="form-group">
                    <label>Statut </label>
                    <input type="text" name="statut" className="form-control" placeholder="Votre statut (Etudiant, Employé etc.)" onChange={(e) => {this.setState({statut: e.target.value})}}/>
                    </div>
                    <br></br>
                    <div className="form-group">
                    <label>Adresse </label>
                    <input type="text" name="adresse" className="form-control" placeholder="Votre adresse" onChange={(e) => {this.setState({adresse: e.target.value})}}/>
                    </div>
                    <br></br>
                    <div className="form-group">
                    <label>E-mail </label>
                    <input type="email" name="email" className="form-control" placeholder="Votre e-mail" onChange={(e) => {this.setState({email: e.target.value})}}/>
                    </div>
                    <br></br>
                    <div className="form-group">
                    <label>Mot de passe</label>
                    <input type="password" name="motdepasse" className="form-control" placeholder="Votre mot de passe" onChange={(e) => {this.setState({motdepasse: e.target.value})}}/>
                    </div>
                    <br></br>
                    <button type="submit" className="btn   btn-primary btn-block">Créer mon compte</button>
                    <p className="bottom-text text-right">
                        <a href="/login"> Vous avez déjà un compte ?</a>
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