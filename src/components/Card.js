import React from 'react';
import '../App.css';

class Card extends React.Component{
    constructor(props) {
        super(props);
    }
    clickDraft = () =>{
        this.props.clickDraft(this.props.id,this.props.text)
    }
    clickMark = ()=>{
        this.props.clickMark(this.props.id,!this.props.mark)
    }
    render(){
        return(
            <div className="Card">
                <div>
                    <p>{this.props.text}</p>
                    <div style = {this.props.mark ? {backgroundColor: "#3fae61"}:{backgroundColor: "#d5564f"}} className="color"/>
                </div>
                <div>
                    <button onClick={this.clickDraft} className="draft">Draft</button>
                    <button onClick={this.clickMark} className="mark">Mark</button>
                </div>
            </div>
        )};
}

export default Card