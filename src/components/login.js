<<<<<<< HEAD
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";

import Registration from './registration';
import Registerstepone from './registerstepone';
import MainChat from './mainChat'

class Login extends Component {

    constructor(props)
    {
        super(props);
    }

    render(){
        return (
            <div className="login">

                <h3  className="titleTop"> Welcome to the </h3>
                <h2  className="titleBottom"> CHATTERBOX </h2>
                <br/><br/><br/><br/>
                <input className="userInputLogin" placeholder="Email" type="text" ref="name" /> <br/><br/><br/>
                <br/>
                <input className="userInputLogin" placeholder="Password" type="text" ref="name" /> <br/><br/><br/>
                <br/><br/><br/><br/>

                    <div>
                        <header>
                            <button className="loginButton"> <Link to="/mainChat">  LOGIN </Link>  </button>
                        </header>
                    </div>

                <Link to="/registration"> <h6 className="skip"> No account yet? Get setup now </h6> </Link>

            </div>
        )
    }

}

=======
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";

import Registration from './registration';
import Registerstepone from './registerstepone';
import MainChat from '../App'

class Login extends Component {

    constructor(props)
    {
        super(props);
    }

    render(){
        return (
            <div className="login">

                <h3  className="titleTop"> Welcome to the </h3>
                <h2  className="titleBottom"> CHATTERBOX </h2>
                <br/><br/><br/><br/>
                <input className="userInputLogin" placeholder="Email" type="text" ref="name" /> <br/><br/><br/>
                <br/>
                <input className="userInputLogin" placeholder="Password" type="text" ref="name" /> <br/><br/><br/>
                <br/><br/><br/><br/>

                    <div>
                        <header>
                            <button className="loginButton"> <Link to="/mainChat">  LOGIN </Link>  </button>
                        </header>
                    </div>

                <Link to="/registration"> <h6 className="skip"> No account yet? Get setup now </h6> </Link>

            </div>
        )
    }

}

>>>>>>> b4fab02a29cedbbd1b63bd276b0cdcad05a77608
export default Login;