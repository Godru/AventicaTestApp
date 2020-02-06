import React from 'react';
import './App.css';
import DraftZone from './components/DraftZone.js'
import InputZone from './components/InputZone.js'
import Header from './components/Header.js'
import CardZone from './components/CardZone.js'


class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            markCounter: 1,
            draftCards: [
                {
                    id: 0,
                    text: "text"
                },
                {
                    id: 1,
                    text: "text2"
                }
            ],
            Cards:[
                {
                    id: 0,
                    text: "text3",
                    mark: false
                },
                {
                    id: 1,
                    text: "text4",
                    mark: true
                },
            ]
        }

    }
    clickRemove = (id,cards) =>{
        let Cards = [];
        let newId = 0;
        if(cards === "Cards" && this.state[cards][id].mark){
            this.setState({markCounter: this.state.markCounter - 1});
        }
        for(let i=0; i<this.state[cards].length  ;i++){
            if(i !== id){
                Cards.push({"id": newId,"text": this.state[cards][i].text,"mark": this.state[cards][i].mark });
                newId++;
            }

        }
        this.setState({[cards]: Cards});
    }

    clickDraft = (id,text) =>{
        if(id !== undefined){
          this.clickRemove(id,"Cards")
        }
        let draftCards = this.state.draftCards;
        draftCards.push({"id": this.state.draftCards.length,"text": text})
        this.setState({draftCards: draftCards})
    }
    clickSave = (id,text) =>{
        if(id !== undefined){
            this.clickRemove(id,"draftCards")
        }
        let cards = this.state.Cards;
        cards.push({"id": this.state.Cards.length,"text": text})
        this.setState({Cards: cards})
    }
    clickMark = (id,mark)=>{
        let cards = this.state.Cards;
        cards[id].mark = mark;
        this.setState({Cards: cards,markCounter:  mark ? this.state.markCounter + 1 : this.state.markCounter - 1})
    }
    textChange = (text,id) => {
        let cards = this.state.draftCards;
        cards[id].text = text;
        this.setState({draftCards: cards})
    }
    render(){

        return (
          <div className="App">
              <Header markCounter={this.state.markCounter}/>
              <div className="container">
                  <div className="left">
                      <InputZone  clickSave = {this.clickSave} clickDraft={this.clickDraft}/>
                      <DraftZone  textChange={this.textChange} clickRemove ={this.clickRemove} clickSave = {this.clickSave} draftCards={this.state.draftCards}/>
                  </div>
                  <div className="right">
                      <CardZone clickMark = {this.clickMark} clickDraft={this.clickDraft} Cards={this.state.Cards}/>
                  </div>
              </div>
          </div>
        )};
}

export default App;