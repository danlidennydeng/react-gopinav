import React from 'react'

function NameList () {
    const names = ['Denny', 'Henry', 'Dennis']
    const nameList = names.map(name => <h4>{name}</h4>)  
    
    return (
        <div>
            {
              nameList// names.map(name => <h2>{name}</h2>)
            }
        </div>
    )
}

export default NameList