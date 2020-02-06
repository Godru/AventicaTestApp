import React from 'react';
import '../App.css';
import Card from './Card.js'

class CardZone extends React.Component{
    constructor(props) {
        super(props);
        this.parseCards = this.parseCards.bind(this);
    }
    clickDraft = (id,text) =>{
        this.props.clickDraft(id,text)
    }
    clickMark = (id,mark)=>{
        this.props.clickMark(id,mark)
    }
    parseCards(){
        let cards = [];
        for(let i=0; i<this.props.Cards.length;i++){
            cards.push(<Card clickMark = {this.props.clickMark} clickDraft={this.clickDraft} id={this.props.Cards[i].id} key ={i} text={this.props.Cards[i].text}  mark = {this.props.Cards[i].mark} />)
        }
        return cards
    }
    render(){
        return(
            <div className="CardZone" >
                {this.parseCards()}
            </div>
        )};
}

export default CardZone;