import React, { Component } from "react";

class Welcome extends Component {
    render() {
        return <div><h1>Welcome {this.props.name} is {this.props.heroName}</h1>{this.props.children}</div>
        //the above cannot be formated and separated, but why?
        
    }
}

export default Welcome