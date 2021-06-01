import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


import HeaderFonctionnaire from './HeaderFonctionnaire';
import history from './history';


import Date from './Date';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 200,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));


class Gestion extends Component {
    render() {
        return (
            <div className="gestion-button-container">
                <Button className="gerer-demandes" variant="contained" color="default" onClick={() => history.push('/HistoriqueTraitement')}>
                  Historique des traitements
                </Button>                
            </div>
            
        )
    }
}

  
 function ChoixDemandes() {
    const classes = useStyles();
    const [age, setAge] = React.useState('');
  
    const handleChange = (event) => {
      setAge(event.target.value);
    };
  
    return (
      <div className="gestion-demande-container">
        <div className="type-demande">
        <FormControl className={classes.formControl}>
          <InputLabel  id="demo-simple-select-label">Type de demande</InputLabel>
          <Select className="type-de-demande"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            onChange={handleChange}
            autoWidth="true"
          >
            <MenuItem value={10}>Carte nationale d'identité</MenuItem>
            <MenuItem value={20}>Passeport</MenuItem>
            <MenuItem value={30}>Immatriculation des véhicules</MenuItem>
          </Select>
        </FormControl>
        </div>
        <div className="date">
            <Date />
        </div>

      </div>
    );
  }


  function ChoixQuestions() {
    const classes = useStyles();
    const [age, setAge] = React.useState('');
  
    const handleChange = (event) => {
      setAge(event.target.value);
    };
  
    return (
      <div className="gestion-demande-container">
        <div className="type-demande">
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Type de question</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            onChange={handleChange}
            autoWidth="true"
          >
            <MenuItem value={10}>Type 1</MenuItem>
            <MenuItem value={20}>Type 2</MenuItem>
            <MenuItem value={30}>Type 3</MenuItem>
          </Select>
        </FormControl>
        </div>
        <div className="date">
            <Date />
        </div>

      </div>
    );
  }



class Demandes extends Component {

    constructor(props) {
      super(props);
      this.state = {items: []};
      this.handleClick = this.handleClick.bind(this);
    }


    handleClick(event, id)  {
      const url = "http://localhost:8080/Web-Project/project/DeleteDemande/"+id;
      fetch(url, {
          method: "DELETE",
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(null)
      })
  }
    
    
    
    componentDidMount() {
      fetch("http://localhost:8080/Web-Project/project/GetDemande")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result
            });
          },
          // Remarque : il est important de traiter les erreurs ici
          // au lieu d'utiliser un bloc catch(), pour ne pas passer à la trappe
          // des exceptions provenant de réels bugs du composant.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
      }



    render() {


        const questions = this.state.items;

        const elements = []

        var content = "";

        if (this.props.estTraite == "true") {
          content = "Changer le traitement"
        } else {
          content = "Traiter";
        }

        for (const[index, value] of Array.from(questions.entries()).reverse()) {
          if (value.estTraite == this.props.estTraite) {
              elements.push(
                <div className="demandes-container">
                                    <hr className="separate-demandes"></hr>

                    <div className="demandes-1-container">
                        <div className="demandes-content-container">
                            <div className="demande-text">
                                <span> Demande de {value.typeDemande} </span>
                            </div>
                            <div className="demande-buttons">
                                <button className="traiter" type="button" onClick={() => history.push({pathname: "/ConsulterFonctionnaire",
                                state: {idCitoyen:this.props.id , typeDemarche: value.typeDemande, idDemarche: value.id}})}>{content}</button>
                                <button className="traiter" type="button" onClick={(e) => {window.location.reload(); this.handleClick(e, value.id);}}>Supprimer</button>
                            </div>
                        </div>
                    </div>
                    <hr className="separate-demandes"></hr>

                </div>
              )
          }

        }
        return (
          <div>
            {elements}
          </div>
        )
    }
}

class Questions extends Component {


  constructor(props) {
    super(props);
    this.state = {items: []}
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(event, id)  {
    const url = "http://localhost:8080/Web-Project/project/DeleteQuestion/"+id;
    fetch(url, {
        method: "DELETE",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(null)
    })
}
  
  
  componentDidMount() {
    fetch("http://localhost:8080/Web-Project/project/GetQuestion")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        // Remarque : il est important de traiter les erreurs ici
        // au lieu d'utiliser un bloc catch(), pour ne pas passer à la trappe
        // des exceptions provenant de réels bugs du composant.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
    }

    render() {

        const questions = this.state.items;

        const elements = []

        var content = "";

        if (this.props.estTraite == "true") {
          content = "Changer la reponse"
        } else {
          content = "Répondre";
        }

        for (const[index, value] of Array.from(questions.entries()).reverse()) {

          if (value.estTraite == this.props.estTraite) {
            if (value.estTraite == "false") {
                  elements.push(
                    <div className="demandes-container" >
                    <hr className="separate-demandes"></hr>
                    <div className="demandes-1-container">
                        <div className="demandes-content-container" >
                            <div className="demande-text">
                                <span> Question : {value.question}</span>
                            </div>
                            <div className="demande-buttons">
                                <button className="Répondre" type="button" onClick={() => history.push({pathname: "/PageReponse",
                                state: {id: value.id, question: value.question}})}>{content}</button>
                                <button className="traiter" type="button" onClick={(e) => {window.location.reload(); this.handleClick(e, value.id);} }>Supprimer</button>
                            </div>
                        </div>
                    </div>
                    <hr className="separate-demandes"></hr>
                </div>
                  )
            } else {
                  elements.push(
                    <div className="demandes-container" >
                    <hr className="separate-demandes"></hr>
                    <div className="demandes-1-container">
                        <div className="demandes-content-container" >
                            <div className="demande-text">
                                <span> Question : {value.question}</span>
                                <br/>
                                <br/>
                                <span className="reponse-color"> Réponse :</span> <span> {value.reponse} </span>
                            </div>
                            <div className="demande-buttons">
                                <button className="Répondre" type="button" onClick={() => history.push({pathname: "/PageReponse",
                                state: {id: value.id, question: value.question}})}>{content}</button>
                            </div>
                        </div>
                    </div>
                    <hr className="separate-demandes"></hr>
                </div>
                  )
            }
          }
        }
        return (
          <div>
            {elements}
          </div>       
        )
    }
}

class PageDemandes extends Component {


  constructor(props) {
    super(props);
  }


  render() {

    return (    
    <div>
      <HeaderFonctionnaire />


       <hr className="overall-separator" />

       <Gestion />

       <h2 className="question-title"> Demandes </h2>
      
      <ChoixDemandes />
      <Demandes estTraite={this.props.traite}/>

      <br></br>

      <h2 className="question-title"> Questions </h2>
      <ChoixQuestions />
      <Questions estTraite={this.props.traite}/>


      <br></br>
      <div className="end">
        <center>Copyright <span>&#169;</span> 2021 tous les droits résérvés.</center>
      </div>

    </div>
    );
  }

}
export default PageDemandes;

