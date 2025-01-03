import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const Hero = ({showPerson}) => {
  return (
    <header className="hero">
      {showPerson && (
      <StaticImage
        src="../assets/person.png"
        placeholder="blurred"
        className="hero-person"
        alt="en tegning af en person der skriver på en computer"
      />
    )}
    </header>
  )  
}

export default Hero
