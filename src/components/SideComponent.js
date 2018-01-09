import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import '../Css/ContentOnSide.css';

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



// repeating only to display scrolling
class SideComponent extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <div className="searchContainer">
                    <div className="searchBar">
                        <header className="searchChats" >
                            Search Chats
                            <img className="searchIcon" src={require("../Images/search.png")} alt=""/>
                        </header>
                    </div>
                    <div className="mainContatiner">
                        <div className="rectangle-8">
                            <Chip
                                /*onClick={"do something"}*/
                                style={styles.chip}>
                                <Avatar src={require("../Images/aaa.png")} />
                                <header className="lloyd-jimenez">
                                    name goes here !!!!!!!!!!!!
                                </header>
                            </Chip>
                            <div className="statusM">
                                status message goes here
                            </div>
                        </div>

                                <Avatar src={require("../Images/aaa.png")} />

                        <div className="divider">
                        </div>

                        <div className="rectangle-8">
                            <Chip
                                /*onClick={"do something"}*/
                                style={styles.chip}
                            >
                                <header className="lloyd-jimenez">
                                    name goes here
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
                                /*onClick={"do something"}*/
                                style={styles.chip}
                            >
                                <Avatar src={require("../Images/aaa.png")} />
                                <header className="lloyd-jimenez">
                                    name goes here
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
                                /*onClick={"do something"}*/
                                style={styles.chip}
                            >
                                <Avatar src={require("../Images/aaa.png")} />
                                <header className="lloyd-jimenez">
                                    name goes here
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
                                /*onClick={"do something"}*/
                                style={styles.chip}
                            >
                                <Avatar src={require("../Images/aaa.png")} />
                                <header className="lloyd-jimenez">
                                    name goes here
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
                                /*onClick={"do something"}*/
                                style={styles.chip}
                            >
                                <Avatar src={require("../Images/aaa.png")} />
                                <header className="lloyd-jimenez">
                                    name goes here
                                </header>
                            </Chip>
                            <div className="statusM">
                                status message goes here
                            </div>
                        </div>



                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default SideComponent;