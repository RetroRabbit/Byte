import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setName,setPassword, setEmail } from '../reducers/Reducers'
import { changesE , setImage} from '../reducers/Reducers'
import HeaderComponent from "../components/HeaderComponent";
import FontAwesome from 'react-fontawesome'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter, Route, Link } from "react-router-dom"
// Setting class having the profile details
// Image has been imported




class Settings extends Component {


constructor(props) {
        super(props);
        this.state = {
            value: '',
            submittedValue: '',
            emailValue: '',
            imageF:''
        }
        console.log(props);
        this.onChangeInput = this.onChangeInput.bind(this);
        this.onSubmitForm = this.onSubmitForm.bind(this);
        this.onEmailInput = this.onEmailInput.bind(this);
        this.submit = this.submit.bind(this);
        this.handleClick = this.handleClick.bind(this);
    
        var objectURL;
    }

    onChangeInput(event) {
        event.preventDefault();
        this.setState({ value: event.target.value });
    }
  
    onSubmitForm(event) {
        event.preventDefault();
        this.setState({submittedValue: event.target.value});
  
    }
    onEmailInput(event) {
        event.preventDefault();        
        this.setState({ emailValue: event.target.value });
    }

    onImageChange(event) {
        event.preventDefault();
        if (event.target.files && event.target.files[0]) {
            this.setState({ imageF: event.target.value });
            this.objectURL = window.URL.createObjectURL(event.target.files[0])
        }
        
    }

    handleClick(e) {
        this.refs.fileUploader.click();
    }
    
    submit() {
        if (!(this.state.value === "" || this.state.emailValue === "")){
            this.props.changesE(this.state.value, this.state.emailValue);
        } 
        else {
            if (!(this.state.value === "")) {
                this.props.changesE(this.state.value, this.props.useremail);
            } else if (!(this.state.emailValue === "")) {
                this.props.changesE(this.props.username, this.state.emailValue);
            } 
            
        }
        if (!(this.state.imageF === "" )){
            this.props.setImage(this.objectURL);
        } 

    }  

    

    

    render(){
        return (

            <div className="mainSettings">
                
            <MuiThemeProvider>
                <HeaderComponent/>
                <br />
                <div className="profilePictureSha">
                        <img onClick={this.handleClick} className="profilePictureImg" src={this.objectURL|| this.props.userimage} alt="profile picture" />

                        <input type="file" id="picID" onChange={this.onImageChange.bind(this)} className="registrationPictureImg" style={{ display: 'none' }} ref="fileUploader" />        
                </div>
                <br/>
                <br/>
                <div className="profilePictureDetails">
                    <input  className="profileText" defaultValue={this.props.username} onChange={this.onChangeInput} />
                    {/* <i  className="fa fa-pencil" aria-hidden="true"> </i>     */}
                </div>
                <br/>
                <div className="profilePictureDetails">
                    <input  className="profileText" defaultValue={this.props.useremail} onChange={this.onEmailInput} />
                    {/* <i  className="fa fa-pencil" aria-hidden="true"> </i>     */}
                </div>
                <br/>
                
                <Link to="/mainChat"><button onClick={this.submit} className="profilePictureButton">DONE</button></Link>    
                
                </MuiThemeProvider>
            </div>
        )
    }
}

// Make it component to be used
const mapStateToProps = ({login}) => ({
    username: login.userName,
    useremail: login.email,
    password: login.password,
    userimage: login.userImage
 })

 
 const mapDispatchToProps = dispatch => bindActionCreators({
     changesE,
    setImage 
},dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings)
