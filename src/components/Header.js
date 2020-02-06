import React from 'react';
import '../App.css';

class Header extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div className="Header">
                <h1>
                    React App for <span>Aventica</span>
                </h1>
                <div className="counter">{this.props.markCounter}</div>
            </div>
        )};
}

export default Header;