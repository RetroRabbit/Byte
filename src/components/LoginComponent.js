
import React, { Component } from 'react';
import '../Css/style.sass';
import '../Css/App.css';
import '../Css/style.css';
//import loginJS from './login';
//import $ from 'jquery';

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
       
   
        <form>
                 <loginJS/>
         <header>
             <label class="welcome">Welcome to the</label>
             <br/>
             <br/>
             <img src={require("../Images/Full_Logo.png")}/>
        </header>
           <label htmlFor="username">Username</label>
          <input type="text" id="username" />
          <hr/>
        <br/>
        <br/>
          <label htmlFor="pwd">Password </label>
          <input type="pwd" id="pwd"/>
          <hr/>
          <br/>
          <br/>
         <button>Login</button>
         <footer>
                <div class="inside-the-footer"><a href="">No account yet? Get setup now <span>&#8744;</span></a></div>
             </footer> 
        </form>

         );
   }
}

export default LoginComponent;