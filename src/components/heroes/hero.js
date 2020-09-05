import React from 'react'

const Hero = ({name, events, imgAdress, ext}) => {
    return (
        <div className='hero-card'>
            <img src={`${imgAdress}.${ext}`} />
        </div>
    )
}

export default Hero
