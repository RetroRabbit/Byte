import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setName,setPassword, setEmail } from '../reducers/Reducers'
import { setValuesE } from '../reducers/Reducers'
// Setting class having the profile details
// Image has been imported




class Settings extends Component {



    
    render(){
        return (
            <div>
                <br/>
                <img className="profilePictureImg" src={require('../rabbit.jpg')} alt="profile picture" />
                <br/>
                <br/>
                <h2 className="profilePictureDetails">{this.props.username}</h2>
                <br/>
                <h5 className="profilePictureDetails">addiehogan@gmail.com</h5>
                <br/>
                <button className="profilePictureButton">DONE</button>
            </div>
        )
    }
}

// Make it component to be used
const mapStateToProps = ({login}) => ({
    username: login.userName,
    password: login.password,
    userimage: login.userImage
 })

 
 const mapDispatchToProps = dispatch => bindActionCreators({
    setValuesE
},dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings)