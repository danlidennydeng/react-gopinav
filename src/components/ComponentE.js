import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext from './userContext'
import { UserConsumer } from './userContext'

class ComponentE extends Component {
  
  render() {
    return (
    <div>
      <UserConsumer>
        {
          (name) => {
            return <div>Hello {name}</div>
          }
        }
      </UserConsumer>
      Component E context {this.context}
      <ComponentF />
    </div>
    )}
}

ComponentE.contextType = UserContext

export default ComponentE

// use the <UserConsumer> since UserContext only work with a single context
// only works with class.