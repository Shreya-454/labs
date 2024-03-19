import React from 'react'

const About = () => {
  return (
    <div className='py-md-5 position-relative overflow-x-clip '>
      <div className="container py-md-5 pt-3 pb-0">
        <div className="row mt-3 pt-2 pb-md-5 mb-1">
            <div className="col-md-6" data-aos="fade-right">
                <div className=' d-flex justify-content-center d-md-block'><span className="  bg-orangegradient  border-none  gradient-border-mask badge-padding"><span className='text-gradient z-1 font-robotoflex lh-19 fw-normal '>DOERS OVER TALKERS</span></span></div>
                <h2 className=' text-white font-robotoflex fs-52 lh-62 fw-bold pt-1 mt-3 text-center text-md-start'>Game <span className='d-block'>First.Always.</span></h2>
            </div>
            <div className="col-md-6 pt-lg-5" data-aos="fade-left">
                <p className='text-white font-robotoflex fs-18 lh-21-6 fw-medium mb-2 pb-1 pt-1 text-center text-lg-start'>This is difficult</p>
                <p className='text-white font-robotoflex fs-16 lh-24 opacity-70 text-center text-lg-start'>Web3 Games have a notoriously high barrier-to-entry for casual gamers <span className='d-block'>who make up the vast majority of players. “Link your wallet” before </span>gameplay is not just off-putting, it’s boring. We’re solving that with <span className=' fw-semibold'>world-class storytelling</span>, world-building, game design, art and sound. And fun.</p>
            </div>
        </div>
        <div className="row pt-md-5 pt-2 pb-4 mb-2">
          <div className="col-lg-4 col-md-6 pb-3 d-flex justify-content-center mb-5 mb-lg-0">
            <div className="aboutcard cardborder-mask position-relative overflow-hidden" data-aos="zoom-in-right">
              <h3 className=' text-white font-robotoflex fs-32 lh-38 fw-bold mb-3 text-center text-lg-start'>World Building</h3>
              <p className=' text-white font-robotoflex fs-16 lh-24  opacity-70 text-center text-lg-start'>Every pixel, every character, every puzzle is a testament to the harmonious marriage of imagination and engineering precision</p>
              <div className="cardellipse"></div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 pb-3 d-flex justify-content-center mb-5 mb-lg-0">
            <div className="aboutcard cardborder-mask position-relative overflow-hidden" data-aos="zoom-in-up">
              <h3 className=' text-white font-robotoflex fs-32 lh-38 fw-bold mb-3'>Game Design</h3>
              <p className=' text-white font-robotoflex fs-16 lh-24  opacity-70'>Every frame becomes a brushstroke, every motion a choreographed dance, contributing to a symphony of visuals that captivate players' senses and ignite their imagination.</p>
              <div className="cardellipse"></div>
            </div>
          </div>
          <div className="col-lg-4 pb-3 d-flex justify-content-center">
            <div className="aboutcard cardborder-mask position-relative overflow-hidden" data-aos="zoom-in-left">
              <h3 className=' text-white font-robotoflex fs-32 lh-38 fw-bold mb-3'>Art and Sound</h3>
              <p className=' text-white font-robotoflex fs-16 lh-24  opacity-70'>In the realm of game design, art and animation are the storytellers, whispering tales of wonder and excitement, etching memories that linger long after the controller is set down.</p>
              <div className="cardellipse"></div>
            </div>
          </div>
        </div>
      </div>
      <p className=' text-white font-robotoflex opacity-6 fs-187 lh-224 fw-bold mb-0 position-absolute top-0 about-text d-none d-sm-block'>About Us</p>
      <div className="aboutellipse1">
      </div>
    </div>
  )
}

export default About
