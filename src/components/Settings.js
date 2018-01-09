import React, { Component } from 'react';
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
                <h2 className="profilePictureDetails">Addie Hogan</h2>
                <br/>
                <h5 className="profilePictureDetails">addiehogan@gmail.com</h5>
                <br/>
                <button className="profilePictureButton">DONE</button>
            </div>
        )
    }
}

// Make it component to be used

export default Settings;