import React from 'react' 
import './myStyles.css'

function Stylesheet(props) {
  let className = props.primary? 'primary' : 'secondary'

  return (
    <div>
      <h1 className={`${className} font-xl`}>Stylesheets</h1>
      {/* two classes got to togather */}
    </div>
  )
}

export default Stylesheet