import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";

import Registration from './registration';
import Registerstepone from './registerstepone';
import Registerstepthree from './registerstepthree';
import MainChat from './mainChat';

class Registersteptwo extends Component {

    constructor(props)
    {
        super(props);
    }

    render(){
        return (
            <div className="registrationStepTwo">

                <h3 className="titleTopp"> Step Two </h3>
                <h2> PROFILE PICTURE </h2>

                <img className="registrationPictureImg" src={require('../registration.png')} alt="profile picture" />
                <br/><br/><br/><br/>

                <BrowserRouter>
                    <div>
                        <header>
                            <button onClick={ this.saveAndContinue.bind(this) } className="registrationButtonStepOne"> <Link to="/stepthree">  NEXT STEP </Link>  </button>
                        </header>
                    </div>
                </BrowserRouter>

            </div>
        )
    }

    saveAndContinue(e) {
        e.preventDefault()
    
        // Get values via this.refs
        // var data = {
        //   name     : this.refs.name.value,
        //   email    : this.refs.email.value,
        //   password : this.refs.password.value,
        // }

        //var newData: {

        //}
    
        // this.props.saveValues(newData)
         this.props.nextStep()
      }

}

export default Registersteptwo;