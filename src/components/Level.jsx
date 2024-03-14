import React from 'react'

const Level = () => {
  return (
    <div className='py-5'>
      <div className="levelbg min-vh-100 d-flex flex-column">
        <div className=' flex-grow-1 d-flex align-items-center'>
            <div className="container d-flex justify-content-end">
                <div className="levelbox">
                    <h3 className='text-white font-robotoflex fs-52 lh-67 fw-bold mb-3 pb-3'>Level up your gaming experience</h3>
                    <button className='gradient-btn font-robotoflex fw-bold fs-18 lh-27 text-center '>Play Unvilled</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Level
