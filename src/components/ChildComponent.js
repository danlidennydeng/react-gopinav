import React from 'react'
// import PropTypes from 'prop-types'

const ChildComponent = (props) => {

    return (
        <div>
            <button onClick={() => props.greetHandler('child')}>
                Greet Parent
            </button>
        </div>
    )
}
     
export default ChildComponent