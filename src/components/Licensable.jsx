import React from 'react'
import licenseimg from '../assets/images/licenseimg.webp'
import { Play } from './Icon'
const Licensable = () => {
  return (
    <div className='py-5'>
      <div className='pb-5'>
        <div className="container pb-4">
            <h2 className=' text-white font-robotoflex fs-52 lh-62 fw-bold text-center mb-3'>A rich, inhabited, and licensable world.</h2>
        </div>
          <div className="container position-relative">
          <img src={licenseimg} alt="img" className='w-100' />
          <div className="playbtn">
            <Play/>
          </div>
          </div>
          <div className="container pb-5">
           <p className='fs-16 text-white font-robotoflex lh-24 opacity-70 fw-normal text-center mb-0 mt-4'> Illustrated With Original Artwork And A Cinematic Score, Destined Not Only For Mobile And Desktop Gaming But <span className='d-block mt-1 pt-2'>Also For Film And Television, Events, Merchandising, And Partnerships.</span></p>
        </div>
      </div>
    </div>
  )
}

export default Licensable
