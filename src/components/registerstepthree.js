import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";

import Registration from './registration';
import Registerstepone from './registerstepone';
import Registersteptwo from './registersteptwo';

class Registerstepthree extends Component {

    constructor(props)
    {
        super(props);
    }

    render(){
        return (
            <div className="registrationStepThree">

                <h3 > Last Step </h3>
                <h2> YOUR FIRST CHAT </h2>
                <br/><br/><br/><br/>
                <input className="userInput" placeholder="Your name" type="text" defaultValue={this.props.name} ref="name" /> <br/><br/><br/>
                <br/><br/><br/><br/>
                <button className="registrationButtonStepTwo"> NEXT STEP </button>
                <h6 className="skip"> Skip for now </h6>

            </div>
        )
    }

}

export default Registerstepthree;