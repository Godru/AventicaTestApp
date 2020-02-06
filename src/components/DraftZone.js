import React from 'react';
import '../App.css';
import DraftCard from './DraftCard.js'

class DraftZone extends React.Component{
    constructor(props) {
        super(props);
        this.parseCards = this.parseCards.bind(this);
    }
    parseCards(){
        let cards = [];
        for(let i=0; i<this.props.draftCards.length;i++){
            cards.push(<DraftCard  clickRemove = {this.clickRemove} clickSave = {this.clickSave}
                                   id={this.props.draftCards[i].id} key ={i} text={this.props.draftCards[i].text}
                                   textChange={this.textChange}/>)
        }
        return cards
    }
    textChange = (text,id) => {
        this.props.textChange(text,id)
    }
    clickSave = (id,text) =>{
        this.props.clickSave(id,text)
    }
    clickRemove = (id) =>{
        this.props.clickRemove(id,"draftCards")
    }
    render(){

        return(
            <div className="DraftZone">
                <h1>Draft</h1>
                {this.parseCards()}
            </div>
        )};
}
//
export default DraftZone