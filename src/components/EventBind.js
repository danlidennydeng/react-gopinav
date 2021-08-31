import React, { Component } from 'react' 

class EventBind extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: 'Howdy?'
    }

    this.clickHandler = this.clickHandler.bind(this)
    {/* this is the official binding method */}
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

        {/* <button onClick={this.clickHandler.bind(this)}>EventBind Click</button> */}

        {/*above works, might perform poorly in a large App*/}

        {/* <button onClick={() => this.clickHandler()}>EventBind Click</button> */}
        
        {/*performance is better in a large App*/}

        <button onClick={this.clickHandler}>EventBind Click</button>

        {/* above works, might perform poorly in a large App */}
      </div>
    )
  }

}

export default EventBind