import React, { Component } from 'react'
import ChildComponent1 from './ChildComponent1'

class ParentComponent1 extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            parentName: 'parent'
        }

        this.greetParent = this.greetParent.bind(this)
    }

    greetParent() {
        alert(`hello ${this.state.parentName}`)
    }

    render() {
        return (
            <div>
                <ChildComponent1 greetHandler={this.greetParent} />
            </div>
        )
    }
}
// this parent allows a child to access its property
export default ParentComponent1