import React, {Component} from 'react'

class UserGreeting2 extends Component {
    constructor(props) {
        super(props) 

        this.state = {
            isLoggedIn: true
        }
    }

    render() {
        let message

        if (this.state.isLoggedIn) {
           message = <div>Hello Denny 2</div>
        } else {
           message = <div>Welcome Guest 2</div>
        }
        
        return <div>{message}</div>
    }
}

export default UserGreeting2