import React from 'react' 

const UpdatedComponent = OriginalComponent => {
  class NewComponent extends React.Component {

    constructor(props) {
      super(props)
  
      this.state = {
        count: 0
      }
  
    }
  
    incrementCount = () => {
      this.setState(prevState => {
        return { 
          count: prevState.count + 1 
        }
      }) 
    }
      
    //above codes are shared

    render() {
      return <OriginalComponent 
        name="Denny" 
        count={this.state.count} 
        incrementCount={this.incrementCount}
      />
    }
  }

  return NewComponent
}

export default UpdatedComponent