import React, { Component } from 'react';


class TestPage extends React.Component {


    
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }



    componentDidMount() {
        fetch("http://localhost:8080/Web-Project/project/AddQuestion", {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                question: "myName",
                reponse: "myPassword"
            })
        })
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
        return(
            <h2> Done </h2>
        )
    }

  }

export default TestPage;