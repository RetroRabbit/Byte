
import React, { Component } from 'react';

import '../Css/App.css';
import '../Css/style.css'
//import loginJS from './login';
//import $ from 'jquery';

import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";
class LoginComponent extends Component {

   constructor(props) {
       super(props);

       this.state = {
           value: '',
           submittedValue: ''
       }

       this.onChangeInput = this.onChangeInput.bind(this);
       this.onSubmitForm = this.onSubmitForm.bind(this);
   }

   onChangeInput(event) {
       this.setState({value: event.target.value});
   }

   onSubmitForm(event) {
       event.preventDefault();
       this.setState({submittedValue: this.state.value});
       //this.props.setScreenFunc(2, this.state.value);

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

          <input className='otherfont' placeholder="Email"  type="text" id="username" />
          <br/><br/><br/>
          <input  className='otherfont' placeholder="Password" type="pwd" id="pwd"/>
          <br/><br/><br/>
            <div className='position'>
                <button className='button'><Link to="/mainChat">Login </Link></button>
            </div>


            <div class="inside-the-footer"><button className='regbutton'> <Link to="/registration">No account yet? Get setup now</Link></button></div>  
        </form>

   </div>
         );
   }
}

export default LoginComponent;