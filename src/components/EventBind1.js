import React, { Component } from 'react' 

class EventBind1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: 'Howdy?'
    }

    
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

        <button onClick={this.clickHandler.bind(this)}>EventBind1 Click</button>

        {/*above works, might perform poorly in a large App*/}

       
      </div>
    )
  }

}

export default EventBind1