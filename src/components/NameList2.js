import React from 'react'
import Person from './Person.js'

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
    
    const personList = persons.map(person => <Person key={person.id} person={person} />)

    return (
        <div>
            {
              personList
            }
        </div>
    )
}

export default NameList2