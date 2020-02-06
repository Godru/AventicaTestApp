import React from 'react';
import '../App.css';

class InputZone extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            text: "",
        }
    }
    textChange = (e) => {
        if(e.currentTarget.value.length < 9) {
            this.setState({text: e.currentTarget.value});
        }
    }
    clickSave = () =>{
        this.props.clickSave(undefined,this.state.text);
        this.setState({text: ""})
    }
    clickDraft= () =>{
        this.props.clickDraft(undefined,this.state.text);
        this.setState({text: ""})
    }
    render(){

        return(
            <div className="InputZone">
                <input value={this.state.text} onChange={this.textChange}/>
                <div>
                    <button onClick={this.clickDraft} className="draft">
                        Draft
                    </button>
                    <button onClick={this.clickSave} className="save">
                        Save
                    </button>
                </div>
            </div>
        )};
}

export default InputZone;