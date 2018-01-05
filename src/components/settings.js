import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Setting class having the profile details

class Settings extends Component {

    render(){

        return (

            <div>

                <img src={'http://www.the-lizard.org/images/phocagallery/Mammals/Rabbit_320_Natural%20England_Allan%20Drewitt.jpg'} alt="profile picture" className="profileImage" />

                <h3>Addie Hogan</h3>

                <p>addiehogan@gmail.com</p>

                <button>DONE</button>

            </div>

        )

    }

}

// Make it component to be used

export default Settings;