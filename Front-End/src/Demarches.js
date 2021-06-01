import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

import { NavLink } from 'react-router-dom';

import Header from './Header';

import carte from './pictures/carte.png'
import passeport from './pictures/passeport.png'
import immatriculation from './pictures/immatriculation.png'


import history from './history';



class Gestion extends Component {
    render() {
        return (
            <div className="gestion-button-container">
                <Button className="gerer-demandes" variant="contained" color="default" onClick={() => window.location.reload()}>Démarches administratives</Button>
                <Button className="gerer-demandes" variant="contained" color="default" onClick={() => history.push('/DemarcheError')}>Questions</Button>
                
            </div>
            
        )
    }
}

class DemarchesAdministratives extends Component {
    render() {
        return (
            <div>
                <div className="demarches-container">
                    <NavLink  to="/DemarcheError"><img src={carte}></img></NavLink>
                    <NavLink  to="/DemarcheError"><img src={passeport}></img></NavLink>
                    <NavLink  to="/DemarcheError"><img src={immatriculation}></img></NavLink>
                </div>
            </div>
        )
    }
    
}


class Demarches extends Component {

    constructor(props) {
        super(props);
    }

    render() {
      return (
          <div>
              <Header />
              <hr className="overall-separator" />
              <h2 className="question-title"> Demarches et Questions </h2>
              <br></br>
              <br></br>

              <Gestion />
              <DemarchesAdministratives />

              <hr className="separate-demandes"></hr>


              <br></br>
              <div className="end">
              <center>Copyright <span>&#169;</span> 2021 tous les droits résérvés.</center>
              </div>



          </div>

      );
    }
  
}

export default Demarches;