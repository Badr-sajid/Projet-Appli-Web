import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Header from './Header';
import history from './history';

class LoginError extends Component {


    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event, id)  {
        history.push("/Login");
    }




    render() {
      return (
        <div>
            <Header />
            <hr className="overall-separator" />

            <div className="Reponse">
                <h3> Votre Login ou votre mot de passe est erroné</h3>
                <h3> Veuillez resaisir vos données </h3> 
                <button type="button" className="tryagain-button" onClick={(e) => this.handleClick(e)}>Try Again</button>
            </div>
       </div>
      );
    }
  
  }

  
export default LoginError;