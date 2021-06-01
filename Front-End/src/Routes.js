import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import history from './history';
import App from './App'
import PageDemandes from './PageDemandes';
import Home from './Home';
import TestPage from './TestPage';
import TestPost from './TestPost';
import PageReponse from './PageReponse';
import HistoriqueTraitement from "./HistoriqueTraitement";
import Traitements from './Traitements';
import Demarches from './Demarches';
import DemandePasseport from './DemandePasseport';
import DemandeCarte from './DemandeCarte';
import DemandeImmatriculation from './DemandeImmatriculation';
import Plainte from './Plainte';
import Signup from './signup.component';
import Login from './login.component';
import HeaderCitoyen from './HeaderCitoyen';
import HomeCitoyen from './HomeCitoyen';
import LoginError from './LoginError';
import DemarchesFonctionnaire from './DemarchesFonctionnaire';
import DemarchesCitoyen from './DemarchesCitoyen';
import CandidatureCitoyen from './CandidatureCitoyen';
import HeaderFonctionnaire from './HeaderFonctionnaire';
import HomeFonctionnaire from './HomeFonctionnaire';
import Candidature from './Candidature';
import TraitementCandidature from './TraitementCandidature';
import ConsulterDemarche from './ConsulterDemarche';
import ConsulterFonctionnaire from './ConsulterFonctionnaire';
import UploadCarteSejour from './UploadCarteSejour';
import Redirection from './Redirection';
import UploadPasseport from './UploadPasseport';
import UploadImmatriculation from './UploadImmatriculation';
import ConsulterOffre from './ConsulterOffre';
import FormulaireCandidature from './FormulaireCandidature';
import UploadCV from './UploadCV';
import ConsulterCandidature from './ConsulterCandidature';
import AjouterOffre from './AjouterOffre';
import DemarcheError from './DemarcheError';
import ConsulterOffreVisiteur from './ConsulterOffreVisiteur';
import AjouterArticle from './AjouterArticle';
import UploadImageArticle from './UploadImageArticle';
import NewsPage from './NewsPage';
import ConsulterQuestion from './ConsulterQuestion';
import NewsPageCitoyen from './NewsPageCitoyen';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/" exact component={Home} />
                    <Route path="/Home" exact component={Home} />   
                    <Route path="/HomeCitoyen" component = {HomeCitoyen} />
                    <Route path="/PageDemandes" component={PageDemandes} />
                    <Route path="/TestPage" component={TestPage} />
                    <Route path="/TestPost" component={TestPost} />
                    <Route path="/PageReponse" component={PageReponse} />
                    <Route path="/Traitements" component={Traitements} />
                    <Route path="/HistoriqueTraitement" component={HistoriqueTraitement} />
                    <Route path="/Demarches" component={Demarches} />
                    <Route path="/DemandePasseport" component={DemandePasseport} />
                    <Route path="/DemandeCarte" component={DemandeCarte} />
                    <Route path="/DemandeImmatriculation" component={DemandeImmatriculation} />
                    <Route path="/Plainte" component={Plainte} />
                    <Route path="/signup" component={Signup} />
                    <Route path="/HeaderCitoyen" component={HeaderCitoyen} />
                    <Route path="/LoginError" component={LoginError} />
                    <Route path="/DemarchesFonctionnaire" component={DemarchesFonctionnaire} />
                    <Route path="/DemarchesCitoyen" component={DemarchesCitoyen} />
                    <Route path="/CandidatureCitoyen" component={CandidatureCitoyen} />
                    <Route path="/HeaderFonctionnaire" component={HeaderFonctionnaire} />
                    <Route path="/HomeFonctionnaire" component={HomeFonctionnaire} />
                    <Route path="/Candidature" component={Candidature} />
                    <Route path="/TraitementCandidature" component={TraitementCandidature} />
                    <Route path="/ConsulterDemarche" component={ConsulterDemarche} />
                    <Route path="/ConsulterFonctionnaire" component={ConsulterFonctionnaire} />
                    <Route path="/UploadCarteSejour" component={UploadCarteSejour} />
                    <Route path="/Redirection" component={Redirection} />
                    <Route path="/UploadPasseport" component={UploadPasseport} />
                    <Route path="/UploadImmatriculation" component={UploadImmatriculation} />
                    <Route path="/ConsulterOffre" component={ConsulterOffre} />
                    <Route path="/FormulaireCandidature" component={FormulaireCandidature} />
                    <Route path="/UploadCV" component={UploadCV} />
                    <Route path="/ConsulterCandidature" component={ConsulterCandidature} />
                    <Route path="/AjouterOffre" component={AjouterOffre} />
                    <Route path="/DemarcheError" component={DemarcheError} />
                    <Route path="/ConsulterOffreVisiteur" component={ConsulterOffreVisiteur} />
                    <Route path="/AjouterArticle" component={AjouterArticle} />
                    <Route path="/UploadImageArticle" component={UploadImageArticle} />
                    <Route path="/NewsPage" component={NewsPage} />
                    <Route path="/ConsulterQuestion" component={ConsulterQuestion} />
                    <Route path="/NewsPageCitoyen" component={NewsPageCitoyen} />
                </Switch>
            </Router>
        )
    }
}