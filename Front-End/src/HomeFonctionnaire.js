import React, { Component } from 'react';


import HeaderFonctionnaire from './HeaderFonctionnaire';
import Attestations from './Attestations';
import News from './News';
import Recrutement from './Recrutement';
import { withRouter } from 'react-router-dom'



class HomeFonctionnaire extends Component {


  constructor(props) {
    super(props);
/*     this.handleClick = this.handleClick.bind(this);
 */  }

/* 
  handleClick(e) {
    console.log(this.props.location.state.id);
  }
 */

  render() {

    return (    
          <div>

{/*             <button type="button" onClick={(e) => this.handleClick(e)}> Test </button>
 */}        <HeaderFonctionnaire  />
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




export default HomeFonctionnaire;

