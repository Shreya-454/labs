import React from 'react'
import Nav from './Nav'
import triangle from '../assets/images/headtriangle.webp'
const Hero = () => {
    
  return (
    <div className='herobg min-vh-100 d-flex flex-column position-relative'>
      <Nav/>
      <div className='flex-grow-1 align-items-center d-flex'>
          <div className="container " data-aos="fade-up">
            <h1 className=' font-robotoflex text-white fs-72 lh-86 text-center fw-bold mb-3'>Changing the way games <span className='d-block'>are made</span></h1>
            <p className='text-center text-white font-robotoflex fs-24 lh-28-8'>Redefining the future of play</p>
          </div>
      </div>
      <img src={triangle} alt="tri" className='triangle d-none d-sm-block' />
    </div>
  )
}

export default Hero
