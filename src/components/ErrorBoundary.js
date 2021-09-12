import React from 'react' 

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasError: false
    }
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true
    }
  }

  componetDidCatch(error, info) {
    console.log(error)
    console.log(info)
  }
  // if you omit above, it can compile. wonder if it is mandatory

  render() {
    if (this.state.hasError) {
      return (
        <div>Something went wrong</div>
      )
    }
    
    return this.props.children
  }
}

export default ErrorBoundary