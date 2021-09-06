import React from 'react'  
import styles from '../appStyles.module.css'

const heading = {
  fontSize: '10px',
  color: 'blue'
}

function Inline() {
  return (
    <div>
      <h2 className={styles.success}>Success</h2>
      <h1 style={heading}>Inline</h1>
    </div>
  )
}

export default Inline