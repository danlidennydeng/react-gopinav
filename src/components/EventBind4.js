import React, { Component } from 'react' 

class EventBind4 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: 'Howdy?'
    }
    
  }

  clickHandler = () => {
    this.setState({
      message: "goodbye!"
    })

    console.log(this)
  }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>

        <button onClick={this.clickHandler}>EventBind4 Click</button>

        {/* this binding method is experimental before Dec 2018 */}
      </div>
    )
  }

}

export default EventBind4