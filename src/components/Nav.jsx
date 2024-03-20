import React, { useState } from 'react'
import logo from '../assets/images/logo.webp'

const Nav = () => {
    const [show, setshow] = useState(true);
    if (show === false) {
      document.body.classList.add("overflow_hidden");
    } else {
      document.body.classList.remove("overflow_hidden");
    }
  return (
    <>
      <nav className=" py-3 position-relative z-3">
          <div className="container">
            <div className=" d-flex align-items-center justify-content-between">
              <a href="#home">
                <img
                  src={logo}
                  alt="Logo"
                />
              </a>
              <ul className={`${show ? "left_100" : "left_0"} nav_bar`}>
                <li onClick={() => setshow(!show)}>
                  <a
                    className=" text-white font-robotoflex fs-16 fw-normal lh-24 nav_line position-relative head"
                    href="#about"
                  >
               About Us
                  </a>
                </li>
                <li onClick={() => setshow(!show)}>
                  <a
                    className=" text-white font-robotoflex fs-16 fw-normal lh-24  nav_line position-relative head"
                    href="#team"
                  >
                Our Team
                  </a>
                </li>
                <li onClick={() => setshow(!show)}>
                  <a
                    className=" text-white font-robotoflex fs-16 fw-normal lh-24  nav_line position-relative head"
                    href="#roadmap"
                  >
               Roadmap
                  </a>
                </li>
                <li onClick={() => setshow(!show)} className='ps-3'>
                 <button className='nav-btn font-robotoflex lh-27 fs-18 fw-bold my-1'>Contact Us</button>
                </li>
              </ul>
              <div
                onClick={() => setshow(!show)}
                className={`${show ? "" : "cross"} navline`}
              >
                <span className="crl-1"></span>
                <span className="crl-2"></span>
                <span className="crl-3"></span>
              </div>
            </div>
          </div>
        </nav>
    </>
  )
}

export default Nav
