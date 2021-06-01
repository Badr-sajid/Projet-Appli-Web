import React, {Component} from "react";
import './auth-css/auth.css';
import HeaderCitoyen from './HeaderCitoyen';
import history from './history';

class UploadCV extends Component {
    constructor(props){
        super(props);
        this.state ={
            filenames:[],
           disable:false,
           idCandidature: 0
        }
        this.onFileChange = this.onFileChange.bind(this);
        this.onButtonClick = this.onButtonClick.bind(this);
    }
    onButtonClick(){
        history.push({pathname: "/HomeCitoyen",
        state: {id: this.props.location.state.id}});
    }
    onFileChange(event){
        const idOffre = this.props.location.state.idOffre;
        const idCitoyen = this.props.location.state.idCitoyen;
        console.log(idOffre);
        console.log(idCitoyen);
        const url = "http://localhost:8080/Web-Project/project/GetCandidatureIdByIdOffre/"+idOffre+"/"+idCitoyen;
        fetch(url).then(res => res.json()).then((data) => { console.log(data);
            if (Array.from(event.target.files).length != 1) {
                event.preventDefault();
                alert(`Il faut télécharger un seul document qui est le CV`);
                return;
            }
            const fileName = this.props.location.state.id+"-"+event.target.files[0].name;
            const url2 = "http://localhost:8080/Web-Project/project/AddCVCandidature/"+data+"/"+fileName;
    
            fetch(url2, {
                method: "put",
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                }
                })});


    }
    render() {
      return (
          <div>
              <HeaderCitoyen id={this.props.location.state.id} />
              <hr className="overall-separator"/>
              <h1 class="UploadCarteSejourH1" >Télécharger votre CV</h1>
              <form method="POST" action="http://localhost:8080/Web-Project/Upload" enctype="multipart/form-data">
                <table>
                    <div className="form-group">
                        <br></br>
                        <input class ="upload-file" type="file" name="file" multiple onChange={this.onFileChange}/>
                        <input type="text" name="id" value={this.props.location.state.id} hidden/>
                    </div>
                    <br></br>
                    <br></br>
                    <input type="submit" name="submit" className="btn   btn-primary btn-block btn-upload" value="Envoyer la candidature" />
                </table>
            </form>
          </div>

      )
    }
  }
  export default UploadCV;