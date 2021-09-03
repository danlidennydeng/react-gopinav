import React from 'react'

function NameList2 () {
    const persons = [
      {
        id: 1,
        name: 'Denny',
        age: 30,
        skill: 'React'
      },
      
      {
        id: 2,
        name: 'Henry', 
        age: 23,
        skill: 'Angular'
      },

      {
        id: 3,
        name: 'Dennis',
        age: 45,
        skill: 'Vue'
      }
    ]
    
    const personList = persons.map(person => (
     <h4>
      I am {person.name}, {person.age} year old. I know {person.skill}
    </h4>
    ))

    return (
        <div>
            {
              personList
            }
        </div>
    )
}

export default NameList2