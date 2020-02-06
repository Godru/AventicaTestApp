import React from 'react';
import '../App.css';

class DraftCard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            inputActive: false
        }
    }
    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }
    clickSave = () =>{
        this.setState({inputActive: false});
        this.props.clickSave(this.props.id,this.props.text)

    }
    clickRemove = () =>{
        this.props.clickRemove(this.props.id)

    }
    setWrapperRef = (node) => {
        this.wrapperRef = node;
    }
    handleClickOutside = (event) => {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.setState({inputActive: false});
        }
    }
    clickText = () =>{
        this.setState({inputActive: true, text: this.props.text})
    }
    textChange = (e) => {
        if(e.currentTarget.value.length < 9) {
            this.props.textChange(e.currentTarget.value,this.props.id)
        }
    }

    render(){

        return(
            <div className="DraftCard">
                {this.state.inputActive ? <input ref={this.setWrapperRef} value={this.props.text} onChange={this.textChange} type="text"/>:<p onClick={this.clickText}>{this.props.text}</p>}
                <button onClick={this.clickRemove} className="remove">Remove</button>
                <button onClick={this.clickSave} className="save">Save</button>
            </div>
        )};
}

export default DraftCard