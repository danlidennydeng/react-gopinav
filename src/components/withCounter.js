import React from 'react' 

const withCounter = (WrappedComponent, incrementNumber) => {
  class WithCounter extends React.Component {

    constructor(props) {
      super(props)
  
      this.state = {
        count: 0
      }
  
    }
  
    incrementCount = () => {
      this.setState(prevState => {
        return { 
          count: prevState.count + incrementNumber 
        }
      }) 
    }
      
    //above codes are shared

    render() {
      return <WrappedComponent 
        name="Denny" 
        count={this.state.count} 
        incrementCount={this.incrementCount}
        {...this.props}
      />
    }
  }

  return WithCounter
}

export default withCounter