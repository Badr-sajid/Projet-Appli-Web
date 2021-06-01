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
        history.push("/Signup");
    }




    render() {
      return (
        <div>
            <Header />
            <hr className="overall-separator" />

            <div className="Reponse">
                <h3> Vous pouvez effectuer les démarches seulement si vous avez un compte </h3>
                <h3> Créer un compte : </h3> 
                <button type="button" className="tryagain-button" onClick={(e) => this.handleClick(e)}> S'inscrire </button>
            </div>
       </div>
      );
    }
  
  }

  
export default LoginError;