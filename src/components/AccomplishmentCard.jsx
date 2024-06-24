import React from 'react'

function AccomplishmentCard({src, accTitle, accDesc}) {
  return (
    <a>
        <img className='hover' src={src}/>
        <h3>{accTitle}</h3>
        <p>{accDesc}</p>
    </a>
  )
}

export default AccomplishmentCard