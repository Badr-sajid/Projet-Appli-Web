import React, {Component} from "react";
import './auth-css/auth.css';
import HeaderCitoyen from './HeaderCitoyen';
import history from './history';

class UploadPasseport extends Component {
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
        history.push({pathname: "/DemarchesCitoyen",
        state: {id: this.props.location.state.id}});
    }
    onFileChange(event){
        if (Array.from(event.target.files).length != 3) {
            event.preventDefault();
            alert(`Le nombre des fichiers à télécharger est ${3}`);
            return;
          }
        const fileNames = this.props.location.state.id+"-"+event.target.files[0].name+"--"+this.props.location.state.id+"-"+event.target.files[1].name+"--"+this.props.location.state.id+"-"+event.target.files[2].name;
        console.log(fileNames);
        const url = "http://localhost:8080/Web-Project/project/AjouterDocumentPasseportByEmail/"+this.props.location.state.id+"/"+fileNames;

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
              <HeaderCitoyen id={this.props.location.state.id} />
              <hr className="overall-separator"/>
              <h1 class="UploadCarteSejourH1" >Télécharger les documents nécessaires </h1>
              <form method="POST" action="http://localhost:8080/Web-Project/Upload" enctype="multipart/form-data">
                <table>
                    <div className="form-group">
                        <h3 class="DocumentsLabel" path="file">Veuillez Selectionner les fichiers suivants : Justificatif des revenus, Signature, Photo :</h3>
                        <br></br>
                        <input class ="upload-file" type="file" name="file" multiple onChange={this.onFileChange}/>
                        <input type="text" name="id" value={this.props.location.state.id} hidden/>
                    </div>
                    <br></br>
                    <br></br>
                    <input type="submit" name="submit" className="btn   btn-primary btn-block btn-upload" value="Submit" />
                </table>
            </form>
          </div>

      )
    }
  }
  export default UploadPasseport;