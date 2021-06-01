import React, { Component } from 'react';


import HeaderCitoyen from './HeaderCitoyen';
import Attestations from './Attestations';
import News from './News';
import Recrutement from './Recrutement';
import { withRouter } from 'react-router-dom'



class HomeCitoyen extends Component {


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
            <h2> Your mail is : {this.props.location.state.id}</h2>

{/*             <button type="button" onClick={(e) => this.handleClick(e)}> Test </button>
 */}        <HeaderCitoyen id={this.props.location.state.id}  />
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




export default withRouter(HomeCitoyen);

