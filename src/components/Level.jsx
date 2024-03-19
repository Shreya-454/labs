import React from 'react'

const Level = () => {
  return (
    <div className='py-md-5 position-relative z-1 overflow-hidden'>
      <div className="levelbg min-vh-100 d-flex flex-column">
        <div className=' flex-grow-1 d-flex align-items-center'>
            <div className="container d-flex justify-content-lg-end justify-content-center">
                <div className="levelbox" data-aos="zoom-out-left">
                    <h3 className='text-white font-robotoflex fs-52 lh-67 fw-bold mb-3 pb-3 text-center text-lg-start'>Level up your gaming experience</h3>
                    <div className='d-flex justify-content-center d-lg-block'><button className='gradient-btn font-robotoflex fw-bold fs-18 lh-27 text-center smallbtnpadding '>Play Unvilled</button></div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Level
