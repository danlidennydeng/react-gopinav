import React from 'react'

const ChildComponent1 = (props) => {

    return (
        <div>
            <button onClick={props.greetHandler}>Greet Parent 1</button>
        </div>
    )
}

// this child is to access the property of a parent
export default ChildComponent1