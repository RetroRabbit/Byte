
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
          <loginJS/>
         <header >
             <label className='welcome'>Welcome to the</label>
             <br/>
             <img className='-align-center' src={require("../Images/Full_Logo.png")}/>
        </header>

           <label className='otherfont' htmlFor="username">Username</label>
          <input className='otherfont'  type="text" id="username" />
          <hr/>

          <label  className='otherfont' htmlFor="pwd">Password </label>
          <input  className='otherfont'  type="pwd" id="pwd"/>
<hr/>
            <div className='position'>
                <button className='button'><Link to="/mainChat">Login </Link></button>
            </div>


            <div class="inside-the-footer"><button className='regbutton'>No account yet? Get setup now</button></div>
            <Link to="/registration"> <button className="skip"> No account yet? Get setup now </button> </Link>    
        </form>

   </div>
         );
   }
}

export default LoginComponent;