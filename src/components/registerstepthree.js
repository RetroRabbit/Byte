import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";

import Registration from './registration';
import Registerstepone from './registerstepone';
import Registersteptwo from './registersteptwo';
import MainChat from './MainChatComponent';
import { setFriend } from '../reducers/Reducers'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class Registerstepthree extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            value: ''
        }

        this.onChangeInput = this.onChangeInput.bind(this);
        this.submit = this.submit.bind(this);
    }

    onChangeInput(event) {
        event.preventDefault();
        this.setState({ value: event.target.value });
    }

    submit() {
        this.props.setFriend(this.state.value);
    }  

    render(){
        return (
            <div className="registrationStepThree">

                <h3 className="titleTopp"> Last Step </h3>
                <h2 className="titleBottom"> YOUR FIRST CHAT </h2>
                <br/><br/><br/><br/>
                <input className="userInput" onChange={this.onChangeInput} placeholder="Friends Email" type="text" defaultValue={this.props.name} ref="name" /> <br/><br/><br/>
                <br/><br/><br/><br/>

                    <div>
                        <header>
                            <button onClick={this.submit} className="registrationButtonStepOne"> <Link to="/mainChat">  NEXT STEP </Link>  </button>
                        </header>
                    </div>

                <h6 className="skip"> <Link to="/mainChat"> SKIP FOR NOW </Link> </h6>

            </div>
        )
    }

}

const mapStateToProps = (state) => ({
    friend: state.friendM
 })
 
 const mapDispatchToProps = dispatch => bindActionCreators({
    setFriend
},dispatch)
 
 export default connect(
    mapStateToProps,
    mapDispatchToProps
 )(Registerstepthree);