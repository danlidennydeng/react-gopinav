import React, { Component } from 'react' 

class EventBind3 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: 'Howdy?'
    }

    this.clickHandler = this.clickHandler.bind(this)
    
  }

  clickHandler() {
    this.setState({
      message: "goodbye!"
    })

    console.log(this)
  }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>

        

        <button onClick={this.clickHandler}>EventBind3 Click</button>

        {/* Binding in the constructor block is the official binding method */}
      </div>
    )
  }

}

export default EventBind3