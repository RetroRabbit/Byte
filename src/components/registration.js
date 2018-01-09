
//var React = require('react');
import React, { Component } from 'react';
import RegisterStepOne from './registerstepone';
import RegisterStepTwo from './registersteptwo';    
import RegisterStepThree from './registerstepthree';

var fieldValues = {
    name: null,
    email: null,
    password: null
}

class Registration extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            step: 1,
            name: null,
            email: null,
            password: null
        }
    }

    saveValues(fields) {
        return function() {
           fieldValues = Object.assign({}, fieldValues, fields)
        }()
      }

    nextStep() {
        this.setState({
          step : this.state.step + 1
        })
      }

    previousStep() {
        this.setState({
          step : this.state.step - 1
        })
      }

    render(){
        switch(this.state.step) {
            case 1: 
                return <RegisterStepOne fieldValues={this.fieldValues} nextStep={this.nextStep.bind(this)} saveValues={this.saveValues} name={this.state.name} email={this.state.email} password = {this.state.password} />
            case 2:
                return <RegisterStepTwo fieldValues={this.fieldValues} nextStep={this.nextStep.bind(this)} saveValues={this.saveValues} name={this.state.name} email={this.state.email} password = {this.state.password}/>
            case 3:
                return <RegisterStepThree fieldValues={this.fieldValues} nextStep={this.nextStep.bind(this)} saveValues={this.saveValues} name={this.state.name} email={this.state.email} password = {this.state.password}/>
        }

    }

}

//module.exports = Registration

export default Registration