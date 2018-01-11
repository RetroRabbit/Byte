import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";

import Registration from './registration';
import Registerstepone from './registerstepone';
import Registerstepthree from './registerstepthree';
import MainChat from './MainChatComponent';
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { PPic } from '../actions/Actions'
import { setImage } from '../reducers/Reducers'

class Registersteptwo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
        console.log(props);
        this.onImageClick = this.onImageClick.bind(this);
        this.submit = this.submit.bind(this);
    }

    onImageClick(event) {
        event.preventDefault();
        this.setState({ value: event.target.value });
    }

    submit() {
        this.props.setImage(this.state.value);
    }  

    onImageChange(event) {

        event.preventDefault();
        if (event.target.files && event.target.files[0]) {
            this.setState({ value: event.target.value });
        }
    }

    render(){
        return (
            <div className="registrationStepTwo">

                <h3 className="titleTopp"> Step Two </h3>
                <h2 className="titleBottom"> PROFILE PICTURE </h2>

                {/* <img  onClick={this.onImageChange.bind(this)} className="registrationPictureImg" src={require('../registration.png')} alt="profile picture" /> */}
                <input type="file" onChange={this.onImageChange.bind(this)} className="registrationPictureImg" id="group_image"  src={require('../registration.png')} alt="profile picture" />
                <br/><br/><br/><br/>

                    <div>
                        <header>
                            <button onClick={ this.submit } className="registrationButtonStepOne"> <Link to="/stepthree">  NEXT STEP </Link>  </button>
                        </header>
                    </div>

            </div>
        )
    }


}

const mapStateToProps = (state) => ({
    userimage:state.userImage
 })
 
 const mapDispatchToProps = dispatch => bindActionCreators({
    setImage
},dispatch)
 
 export default connect(
    mapStateToProps,
    mapDispatchToProps
 )(Registersteptwo)