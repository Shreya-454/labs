import React from 'react'
import toplayer from '../assets/images/whattoplayer.webp'
import bottomlayer from '../assets/images/whatbottomlayer.webp'
const What = () => {
  return (
    <div className='nextbg py-md-5 position-relative mb-5'>
      <div className='py-5 my-5'>
          <div className="container py-4 mt-2" data-aos="zoom-in">
            <h2 className='pt-1 text-white text-center font-robotoflex fs-52 lh-62 fw-bold  mb-3'>What’s Next</h2>
            <p className=' text-white text-center font-robotoflex fs-16  lh-24 fw-semibold mb-2'>92% of gamers have never even tried a Web3 game. We’re going to change that.</p>
            <p className='pt-1 font-robotoflex text-center text-white fs-16 fw-normal lh-24 opacity-70 mb-4 pb-2'> 248Labs The market is worth about a gazillion dollars, so whatever those stats were, that goes here.</p>
            <div className='d-flex justify-content-center'><button className='gradient-btn bigbtn-padding fs-18 lh-27 font-robotoflex fw-bold'>Try to keep up</button></div>
          </div>
      </div>
      <img src={toplayer} alt="layer" className='whattoplayer' />
      <img src={bottomlayer} alt="layer" className='whatbottomlayer' />
    </div>
  )
}

export default What
