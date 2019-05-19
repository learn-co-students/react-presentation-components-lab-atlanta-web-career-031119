import React, { Component } from 'react'

class SimpleComponent extends Component{

    constructor(){
        super()
        this.state = {
            mood: 'happy'
        }
    }

    handleclick = () => {
        const updateMood = this.state.mood === 'happy' ? 'sad' : 'happy'
        this.setState({mood: updateMood})
    }

    render(){
        return(
            <div onClick={this.handleclick}>{this.state.mood}</div>
        )
    }
}

export default SimpleComponent