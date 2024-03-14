import React from 'react'

const About = () => {
  return (
    <div className='py-5 position-relative overflow-x-clip z-1'>
      <div className="container py-5">
        <div className="row mt-3 pt-2 pb-5 mb-1">
            <div className="col-6">
                <span className="  bg-orangegradient  border-none  gradient-border-mask badge-padding"><span className='text-gradient z-1 font-robotoflex lh-19 fw-normal '>DOERS OVER TALKERS</span></span>
                <h2 className=' text-white font-robotoflex fs-52 lh-62 fw-bold pt-1 mt-3'>Game <span className='d-block'>First.Always.</span></h2>
            </div>
            <div className="col-6 pt-5">
                <p className='text-white font-robotoflex fs-18 lh-21-6 fw-medium mb-2 pb-1 pt-1'>This is difficult</p>
                <p className='text-white font-robotoflex fs-16 lh-24 opacity-70'>Web3 Games have a notoriously high barrier-to-entry for casual gamers <span className='d-block'>who make up the vast majority of players. “Link your wallet” before </span>gameplay is not just off-putting, it’s boring. We’re solving that with <span className=' fw-semibold'>world-class storytelling</span>, world-building, game design, art and sound. And fun.</p>
            </div>
        </div>
        <div className="row pt-5 pb-4 mb-2">
          <div className="col-4 pb-3">
            <div className="aboutcard cardborder-mask position-relative overflow-hidden">
              <h3 className=' text-white font-robotoflex fs-32 lh-38 fw-bold mb-3'>World Building</h3>
              <p className=' text-white font-robotoflex fs-16 lh-24  opacity-70'>Every pixel, every character, every puzzle is a testament to the harmonious marriage of imagination and engineering precision</p>
              <div className="cardellipse"></div>
            </div>
          </div>
          <div className="col-4 pb-3">
            <div className="aboutcard cardborder-mask position-relative overflow-hidden">
              <h3 className=' text-white font-robotoflex fs-32 lh-38 fw-bold mb-3'>Game Design</h3>
              <p className=' text-white font-robotoflex fs-16 lh-24  opacity-70'>Every frame becomes a brushstroke, every motion a choreographed dance, contributing to a symphony of visuals that captivate players' senses and ignite their imagination.</p>
              <div className="cardellipse"></div>
            </div>
          </div>
          <div className="col-4 pb-3">
            <div className="aboutcard cardborder-mask position-relative overflow-hidden">
              <h3 className=' text-white font-robotoflex fs-32 lh-38 fw-bold mb-3'>Art and Sound</h3>
              <p className=' text-white font-robotoflex fs-16 lh-24  opacity-70'>In the realm of game design, art and animation are the storytellers, whispering tales of wonder and excitement, etching memories that linger long after the controller is set down.</p>
              <div className="cardellipse"></div>
            </div>
          </div>
        </div>
      </div>
      <p className=' text-white font-robotoflex opacity-6 fs-187 lh-224 fw-bold mb-0 position-absolute top-0 about-text'>About Us</p>
      <div className="aboutellipse1">
      </div>
    </div>
  )
}

export default About
