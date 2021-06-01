import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Header from './Header';
import history from './history';
import PageDemandes from './PageDemandes';

class Traitements extends Component {


    render() {
      return (
        <div className="Reponse">
            <PageDemandes traite="false" />
        </div>
      );
    }
  
  }

  
export default Traitements;