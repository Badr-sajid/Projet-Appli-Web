import React, {Component} from "react";
import './auth-css/auth.css';
import HeaderCitoyen from './HeaderCitoyen';
import history from './history';

class Redirection extends Component {
    componentDidMount(){
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const page_type = urlParams.get('id')
        console.log(page_type);
        if (page_type == "admin@gmail.com") {
            history.push("/HomeFonctionnaire")
        } else {
            history.push({pathname:"/DemarchesCitoyen",state: {id: page_type}})
        }
    }
    render(){
        return (<h1>Loading</h1>)
    }
  }
  export default Redirection;