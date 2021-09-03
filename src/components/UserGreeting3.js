import React, {Component} from 'react'

class UserGreeting3 extends Component {
    constructor(props) {
        super(props) 

        this.state = {
            isLoggedIn: false
        }
    }

    render() {
        return this.state.isLoggedIn ? (
            <div>Welcome Denny 3</div>
        ) : (
            <div>Welcome Guest 3</div>
        )
    }
}

export default UserGreeting3