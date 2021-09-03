import React, {Component} from 'react'

class UserGreeting4 extends Component {
    constructor(props) {
        super(props) 

        this.state = {
            isLoggedIn: false
        }
    }

    render() {
       this.state.isLoggedIn && <div>Hello Denny 4</div>
    }
}

export default UserGreeting4