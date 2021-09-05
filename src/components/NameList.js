import React from 'react'

function NameList () {
    const names = ['Denny', 'Henry', 'Dennis']
    const nameList = names.map((name, index) => <h4 key={index}>{index} {name}</h4>)  
    
    return (
        <div>
            {
              nameList
            }
        </div>
    )
}

export default NameList