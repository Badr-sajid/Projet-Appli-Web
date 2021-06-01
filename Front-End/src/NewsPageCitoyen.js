import React, { Component } from 'react';


import HeaderCitoyen from './HeaderCitoyen';
import Attestations from './Attestations';
import News from './News';
import Recrutement from './Recrutement';
import { withRouter } from 'react-router-dom'



class NewsPageCitoyen extends Component {


  constructor(props) {
    super(props);
    this.state = {items: []};
  }


  componentDidMount() {

    const url = "http://localhost:8080/Web-Project/project/GetActualite";

    fetch(url).then(res => res.json()).then((result) => { this.setState({items: result}) });

  }

  render() {

        const news = this.state.items;

        const elements = [];

        for (const[index, value] of news.entries()) {
            const source = "http://localhost:8080/Web-Project/Download?file="+value.urlImage.url;
            elements.push(
                <div>
                    <article class="forecast">
                        <h1>{value.titre}</h1>
                        <img className="image-actualites" src={source}></img>
                        <br></br>
                        <br></br>

                        <p>{value.text}</p>
                        <br></br>
                        <hr className="overall-separator" />

                    </article>

                </div>
            )
        }

    return (    

    
          <div>

             <HeaderCitoyen id={this.props.location.state.id} />      
             <hr className="overall-separator" />
            <br></br>
            <h2 className="question-title">Actualités </h2>
            <br></br>


            {elements}

            <br></br>
            <br></br>
            <br></br>

            <div className="end">
              <center>Copyright <span>&#169;</span> 2021 tous les droits résérvés.</center>
            </div>

          </div>
          );
        }
}




export default NewsPageCitoyen;

