import React, { Component } from "react";
import css from './css/NavBarSimple.module.css';

export default class NavBarForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            'loggedIn': true,
            'text' : 'Log In'
            };
    };

    loggedIn(){
        this.setState((prevState) => {
            return {
                loggedIn : prevState.loggedIn === true ? false : true,
                text : prevState.text === 'Log in' ? 'Log out' : 'Log in'
            };
        }
        );
    };

    render() {
        return (
            <div className={css.NavBar}>
                <h1>My Gallery</h1>
                {
                this.state.loggedIn === false ?
                <button onClick={() => this.loggedIn()}> Log in </button>
                :
                <form>
                    <label htmlFor="">Username:</label>
                    <input type="text" />
                    <label htmlFor="">Password:</label>
                    <input type="password" />
                    <button onClick={() => this.loggedIn()}>Submit</button>
                </form>
                }
            </div>
        );
    };
};
