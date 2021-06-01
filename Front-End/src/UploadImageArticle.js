import React, {Component} from "react";
import './auth-css/auth.css';
import history from './history';
import HeaderFonctionnaire from './Header';
import { withRouter } from "react-router-dom";


class UploadImageArticle extends Component {
    constructor(props){
        super(props);
        this.state ={
            filenames:[],
           disable:false,
        }
        this.onFileChange = this.onFileChange.bind(this);
        this.onButtonClick = this.onButtonClick.bind(this);
    }
    
    onButtonClick(){
        history.push("/HomeFonctionnaire");
    }

    onFileChange(event){
        const candidatureID = 1;
        if (Array.from(event.target.files).length != 1) {
            event.preventDefault();
            alert(`Il faut télécharger une seule image`);
            return;
        }
        const fileName = "admin@gmail.com-"+event.target.files[0].name;
        const url = "http://localhost:8080/Web-Project/project/AddImageActualite/"+this.props.location.state.idActualite+"/"+fileName;

        fetch(url, {
            method: "put",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
            })

    }
    render() {
      return (
          <div>
              <HeaderFonctionnaire />
              <hr className="overall-separator"/>
              <h1 class="UploadCarteSejourH1" >Télécharger votre CV</h1>
              <form method="POST" action="http://localhost:8080/Web-Project/Upload" enctype="multipart/form-data">
                <table>
                    <div className="form-group">
                        <br></br>
                        <input class ="upload-file" type="file" name="file" multiple onChange={this.onFileChange}/>
                        <input type="text" name="id" value="admin@gmail.com" hidden/>
                    </div>
                    <br></br>
                    <br></br>
                    <input type="submit" name="submit" className="btn   btn-primary btn-block btn-upload" value="Publier" />
                </table>
            </form>
          </div>

      )
    }
  }
  export default UploadImageArticle;