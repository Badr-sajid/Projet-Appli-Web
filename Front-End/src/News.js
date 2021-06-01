import React, { Component } from 'react';

import actualite from './pictures/actualite.png'
import history from './history'

class News extends Component {



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

        if (index <= 2 ) {

            const source = "http://localhost:8080/Web-Project/Download?file="+value.urlImage.url;

            elements.push(
                  <div className="news-1-container">
                  <img className="news-image" src={source}></img>
                  <div className="news-text-container">
                    <h2> {value.titre} </h2>
                    <p> {value.text.substr(1, 200)} </p>
                    <a className="lire-suite" onClick={() => history.push("/NewsPage")}><em>Lire la suite</em></a>
                  </div>
                  <hr className="separate-news"></hr>
                </div>
            )
        }
  

      }


      return (
        

        <div >
          <div className="news-column">
            <div className="spacer">
              <h2 className="actualites">Actualités</h2>
            </div>
              <hr className="separator"></hr>
          </div>
  
          <div className="news">
  
            <div className="news-container">
              
              {elements}
  
            </div>
  
          </div>
  
        </div>
      );
    }
  
}

export default News;