import React, { Component } from 'react';
import './App.css';

import Header from './Header';
import Attestations from './Attestations';
import News from './News';
import Recrutement from './Recrutement';


class App extends Component {
  render() {
    return (    
    <div>
      <Header />
      <hr className="overall-separator" />
      <Attestations />
      <News />
      <hr className="overall-separator"/>
      <Recrutement />
      <br></br>
      <div className="end">
        <center>Copyright <span>&#169;</span> 2021 tous les droits résérvés.</center>
      </div>

    </div>
    );
  }

}


export default App;

