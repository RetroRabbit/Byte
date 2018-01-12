import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import '../Css/ContentOnSide.css';
import { connect } from 'react-redux'
import { Route } from 'react-router-dom';
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import ChatComponent from './ChatComponent';
import { Dispatch } from "redux";
import {
    getChat
} from '../modules/chats'

const styles = {
    chip: {
        margin: '0px 0px 0px 20px',
        top: '20px',
        position: 'relative',
    },
    wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
    },

};

class SideComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            userChats: props.chatList
        }

    }

    render() {
      
     
        return (
        <div>
       
                <ChatComponent />
                <div className="searchContainer">
                    <div className="searchBar">
                        <input type="text" placeholder="Search Chats" />
                        <header className="searchChats" >
                            <img className="searchIcon" src={require("../Images/search.png")} alt="" />
                        </header>
                    </div>
                    <div className="mainContatiner">
                        <div className="rectangle-8" onClick={this.props.getChat}>
                            <Chip

                                style={styles.chip}>
                                <Avatar src={require("../Images/Icon.png")} />
                                <header className="lloyd-jimenez">
                                    Chat-Username

                                </header>
                            </Chip>

                            <div className="statusM">
                                {this.props.message}
                            </div>
                        </div>

                        <div className="divider">
                        </div>

                        <div className="rectangle-8">
                            <Chip

                                style={styles.chip}
                            >
                                <Avatar src={require("../Images/Icon.png")} />
                                <header className="lloyd-jimenez">
                                    Chat-Username
                                </header>
                            </Chip>
                            <div className="statusM">
                                status message goes here
                            </div>
                        </div>

                        <div className="divider">
                        </div>

                        <div className="rectangle-8">
                            <Chip

                                style={styles.chip}
                            >
                                <Avatar src={require("../Images/Icon.png")} />
                                <header className="lloyd-jimenez">
                                    Chat-Username
                                </header>
                            </Chip>
                            <div className="statusM">
                                status message goes here
                            </div>
                        </div>



                        <div className="divider">
                        </div>

                        <div className="rectangle-8">
                            <Chip

                                style={styles.chip}
                            >
                                <Avatar src={require("../Images/Icon.png")} />
                                <header className="lloyd-jimenez">
                                    Chat-Username
                                </header>
                            </Chip>
                            <div className="statusM">
                                status message goes here
                            </div>
                        </div>



                        <div className="divider">
                        </div>

                        <div className="rectangle-8">
                            <Chip

                                style={styles.chip}
                            >
                                <Avatar src={require("../Images/Icon.png")} />
                                <header className="lloyd-jimenez">
                                    Chat-Username
                                </header>
                            </Chip>
                            <div className="statusM">
                                status message goes here
                            </div>
                        </div>



                        <div className="divider">
                        </div>

                        <div className="rectangle-8">
                            <Chip

                                style={styles.chip}
                            >
                                <Avatar src={require("../Images/Icon.png")} />
                                <header className="lloyd-jimenez">
                                    Chat-Username
                                </header>
                            </Chip>
                            <div className="statusM">
                                status message goes here
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }


}
//export default Header;
const mapStateToProps = (state) => ({
    userchats: state.chats.chatsList
})

const mapDispatchToProps = dispatch => bindActionCreators({
    getChat
}, dispatch)





export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SideComponent)

