import React, { Component } from 'react'
import MemoComp from './MemoComp'


class ParentCompMemo extends Component {

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
        Parent Component with Memo
        <MemoComp name={this.state.name} />
      </div>
    )
  }
}

export default ParentCompMemo