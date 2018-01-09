import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";
// COMPONENT
import Registration from './registration';
import Registersteptwo from './registersteptwo';
import Registerstepthree from './registerstepthree';

class Registerstepone extends Component {

    constructor(props)
    {
        super(props);
        console.log(props);
    }

    render(){       
        return (    
            <div className="registrationStepOne">

                <h3 > Step One </h3>
                <h2> THE BASICS </h2>

                <input className="userInput" placeholder="Your name" type="text" defaultValue={this.props.name} ref="name" /> <br/><br/><br/>
                <input className="userInput" placeholder="Email" type="text" defaultValue={this.props.email} ref="email"/>     <br/><br/><br/>
                <input className="userInput" placeholder="Password" type="text" defaultValue={this.props.password} ref="password"/>  <br/><br/><br/>
                <br/><br/><br/><br/>
                

                <BrowserRouter>
                    <div>
                        <header>
                            <button onClick={ this.saveAndContinue.bind(this) } className="registrationButtonStepOne"> <Link to="/steptwo">  NEXT STEP </Link>  </button>
                        </header>
                    </div>
                </BrowserRouter>
            </div>
        )
    }

    saveAndContinue(e) {
        e.preventDefault()
    
        // Get values via this.refs
        var data = {
          name     : this.refs.name.value,
          email    : this.refs.email.value,
          password : this.refs.password.value,
        }
    
        this.props.saveValues(data)
        this.props.nextStep()
      }

}

export default Registerstepone;