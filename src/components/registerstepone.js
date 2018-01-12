import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";
// COMPONENT
import Registration from './registration';
import Registersteptwo from './registersteptwo';
import Registerstepthree from './registerstepthree';
import MainChat from './MainChatComponent';
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { RegisterThis } from '../actions/Actions'
import { setName,setPassword, setEmail } from '../reducers/Reducers'
import { setValuesE } from '../reducers/Reducers'

class Registerstepone extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            submittedValue: '',
            emailValue:''
        }
        console.log(props);
        this.onChangeInput = this.onChangeInput.bind(this);
        this.onSubmitForm = this.onSubmitForm.bind(this);
        this.onEmailInput = this.onEmailInput.bind(this);
        this.submit = this.submit.bind(this);
    }

    onChangeInput(event) {
        event.preventDefault();
        this.setState({ value: event.target.value });
    }
  
    onSubmitForm(event) {
        event.preventDefault();
        this.setState({submittedValue: event.target.value});
        //this.props.setScreenFunc(2, this.state.value);
        //console.log(event.target.value);
  
    }
    onEmailInput(event) {
        event.preventDefault();        
        this.setState({ emailValue: event.target.value });
  }
    
    submit() {
        console.log(this.state.value, this.state.submittedValue,this.state.emailValue);
        this.props.setValuesE(this.state.value, this.state.submittedValue,this.state.emailValue);
    }  


    render(){       
        return (    
            <div className="registrationStepOne">

                <div className="titleTopp"> Step One </div>
                <div className="titleBottom"> THE BASICS </div>

                <input className="userInput" onChange={this.onChangeInput} placeholder="Your name" type="text" defaultValue={this.props.name} ref="name" /> <br/><br/><br/>
                <input className="userInput" onChange={this.onEmailInput} placeholder="Email" type="text" defaultValue={this.props.email} ref="email"/>     <br/><br/><br/>
                <input className="userInput" onChange={this.onSubmitForm} placeholder="Password" type="text" defaultValue={this.props.password} ref="password"/>
                

               <button onClick={this.submit} className="registrationButtonStepOne"> <Link to="/steptwo" >  NEXT STEP </Link>  </button>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    username: state.userName,
    password: state.password,
    email: state.email
 })
 
 const mapDispatchToProps = dispatch => bindActionCreators({
    setValuesE
},dispatch)
 
 export default connect(
    mapStateToProps,
    mapDispatchToProps
 )(Registerstepone)
