import React from 'react'
import './hero.css'

const Hero = ({name, events, imgAdress, ext}) => {
  return (
    <div className='hero-card'>
      <img src={`${imgAdress}.${ext}`}/>
      <div>{name}</div>
      {events.slice(0, 3).map(event => {
          return <div>{event.name}</div>
      })}
    </div>
  )
}

export default Hero
