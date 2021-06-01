import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Header from './Header';
import history from './history';
import { isThursday } from 'date-fns';

class PageReponse extends Component {


    constructor(props) {
        super(props);
        this.state = {textareaVal: ""};
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleClick(event, id)  {
        const response = this.state.textareaVal;
        const question = this.props.location.state.question;
        const url = "http://localhost:8080/Web-Project/project/UpdateQuestion/"+id;
        history.goBack();
        fetch(url, {
            method: "PUT",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                question: question,
                reponse: response,
                estTraite: true
            })
        })
    }

    handleChange(event) {
        this.setState({textareaVal: event.target.value});
    }


    render() {
      return (
        <div className="Reponse">
            <Header />
            <br></br>
            <h2 className="reponse-title"> Reponse </h2>
            <br></br>
            <div className="reponse-textfield">
                <textarea ref='myTextarea' value={this.state.textareaVal} onChange={(e) => this.handleChange(e)} rows="20" cols="100">
                </textarea>
                <hr className="separate-demandes"></hr>
                <Button className="envoyer-response" variant="contained" color="default" onClick={(e) => this.handleClick(e,this.props.location.state.id)}>Envoyer</Button>
            </div>
        </div>
      );
    }
  
  }

  
export default PageReponse;