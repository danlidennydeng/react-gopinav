import React from 'react'
import ReactDOM from 'react-dom' 

function PortalDemo() {
  return ReactDOM.createPortal (
    <h4>
      Portals Demo
    </h4>,
    document.getElementById('portal-root')
  )
}

export default PortalDemo