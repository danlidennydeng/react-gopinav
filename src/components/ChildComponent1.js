import React from 'react'

const ChildComponent1 = (props) => {

    return (
        <div>
            <button onClick={props.greetHandler}>Greet Parent 1</button>
        </div>
    )
}

export default ChildComponent1