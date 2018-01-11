import React, { Component } from 'react'

import '../Css/App.css'
import '../Css/style.css'
//import loginJS from './login';
//import $ from 'jquery';

import ReactDOM from 'react-dom'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { BrowserRouter, Route, Link } from "react-router-dom"
import { LoginToHome } from '../actions/Actions'
import { setValues } from '../reducers/Reducers'


class LoginComponent extends Component {

    constructor(props) {
      super(props);

      this.state = {
          value: '',
          submittedValue: ''
      }
      console.log(props);
      this.onChangeInput = this.onChangeInput.bind(this);
      this.onSubmitForm = this.onSubmitForm.bind(this);
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
  
  submit() {
      console.log(this.state.value, this.state.submittedValue);
      this.props.setValues(this.state.value, this.state.submittedValue);
  }  

  render() {
   return (
     
  <div className="rounded">
       <form>
        <header >
            <label className='welcome'>Welcome to the</label>
            <br/>
            <img className='welcome' src={require("../Images/Full_Logo.png")}/>
       </header>

         <input className='otherfont' placeholder="Email"  type="text" id="username" onChange={this.onChangeInput}/>
         <br/><br/><br/>
         <input  className='otherfont' placeholder="Password" type="pwd" id="pwd" onChange={this.onSubmitForm}/>
         <br/><br/><br/>
           <div className='position'>
                   <div className='button' onClick={this.submit}><Link to="/mainChat">Login </Link></div>
           </div>


           <div class="inside-the-footer"><button className='regbutton'> <Link to="/registration">No account yet? Get setup now</Link></button></div>  
       </form>

  </div>
        );
  }
}

const mapStateToProps = (state) => ({
   username: state.userName,
   password: state.password
})

const mapDispatchToProps = dispatch => bindActionCreators({
    setValues
},dispatch)

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(LoginComponent)