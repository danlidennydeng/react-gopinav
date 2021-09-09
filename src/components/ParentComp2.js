import React, { PureComponent } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'

class ParentComp2 extends PureComponent {

  constructor(props) {
    super(props) 

    this.state = {
      name: 'Denny'
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: 'Denny'
      })
    }, 2000)
  }

  render() {
    console.log('****Parent Comp Render*****')
    return (
      <div>
        Parent Component
        <RegComp name={this.state.name} />
        <PureComp name={this.state.name} />
      </div>
    )
  }
}

export default ParentComp2

//RegComp and PureComp only render once since the props and state are the same in console.