import React from 'react' 

function HeroError({heroName}) {
  if(heroName === 'Joker') {
    throw new Error('not a hero')
  }

  return (
    <div>
      {heroName}
    </div>
  )
}

export default HeroError