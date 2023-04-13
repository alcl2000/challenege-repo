import React from 'react';
import css from './css/NavBarSimple.module.css';

class NavBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            'message': 'Hello, guest!',
            'button': 'Log in'
        };
    };

    changeText(){
        this.setState((prevState) =>{
            return {
            message : prevState.message === 'Hello, guest!' ? 'Welcome, user' : 'Hello, guest!',
            button : prevState.button === 'Log in' ? 'Log out' : 'Log in'
            };
        });
    };
        render(){
        return  ( <div className={css.NavBar}>
                    <h1>My Website</h1>
                    <span>{this.state.message}</span>
                    <button onClick={() => this.changeText()}> 
                        {this.state.button}
                    </button>
                </div>
        );
        };
};


export default NavBar