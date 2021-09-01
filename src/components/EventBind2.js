import React, { Component } from 'react' 

class EventBind2 extends Component {
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

       
        <button onClick={() => this.clickHandler()}>EventBind2 Click</button>
        
        {/*performance is better in a large App*/}

        
      </div>
    )
  }

}

export default EventBind2