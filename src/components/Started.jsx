// import React, { useRef, useState } from "react";
import toplayer from "../assets/images/formtoplayer.webp";
import bottomlayer from "../assets/images/formbottonlayer.webp";
const Started = () => {
  return (
    <div className=" pt-md-5 mt-1 pb-4 position-relative">
      <div className="mt-4 formbg py-5">
        <div className="container py-md-5 my-5">
          <div className="row align-items-center py-5 mb-4">
            <div className="col-lg-8 pt-1 pb-5 pb-lg-0">
              <div className="formcard" data-aos="zoom-in">
                <h2 className="text-white font-robotoflex fs-52 lh-62 mb-4 text-center text-lg-start">
                  Get updated with us
                </h2>
                <form className=" z-1 position-relative">
                  <div className="d-md-flex gap-4 mb-3 mb-md-4 d-block">
                    <div className="w-md-50 mb-3 mb-md-0">
                      <label htmlFor="name"   className="text-white font-robotoflex fs-16 lh-18 fw-medium mb-2"> First Name:</label>
                      <div className="w-100">
                        <input
                          type="text"
                          id="name"
                          placeholder="Park Seijun"
                          className="w-100 inputbg input-layout" autoComplete="true"
                        />
                      </div>
                    </div>
                    <div className="w-md-50">
                      <label htmlFor="lastname"   className="text-white font-robotoflex fs-16 lh-18 fw-medium mb-2"> Last Name:</label>
                      <div className="w-100">
                        <input
                          type="text"
                          id="lastname"
                          placeholder="Sejiun"
                          className="w-100 inputbg input-layout"
                          autoComplete="true"
                        />
                      </div>
                    </div>
                    </div>
                    <div className="d-md-flex gap-4 mb-3 mb-md-4 d-block ">
                      <div className="w-md-50 mb-3 mb-md-0">
                          <label htmlFor="number"   className="text-white font-robotoflex fs-16 lh-18 fw-medium mb-2">Number:</label>
                          <div className="w-100">
                          <input
                            type="text"
                            placeholder="+12 5858526478"
                            id="number"
                          className="inputbg input-layout w-100"
                          autoComplete="true"
                          />
                        </div>
                      </div>
                    <div className="w-md-50 ">
                      <label
                        className="text-white font-robotoflex fs-16 lh-18 fw-medium mb-2"
                        htmlFor="Email"
                      >
                        Email
                      </label>
                      <div className="cardborder w-100">
                        <input
                          type="email"
                          id="Email"
                          autoComplete="true"
                          placeholder="Park@458@Gmail.com"
                            className="inputbg input-layout w-100"
                          />
                      </div>
                    </div>
                    </div>
                  <div className="d-flex">
                    <input
                      type="checkbox"
                                     id="policy" className="mt-1"
                    />
                    <label
                      htmlFor="policy"
                      className="text-white font-robotoflex fs-18 lh-27  ms-3"
                    >
                      By sending this form I confirm that I have read and accept
                      the <span className="fw-medium">Privacy Policy</span>
                    </label>
                  </div>
                </form>
                <div className="d-flex justify-content-center d-md-block">
                  <button type="submit" className=" gradient-btn smallbtnpadding font-robotoflex lh-18 fs-15 fw-medium mt-4">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-4" >
              <div className="ps-2 " data-aos="fade-left">
                <h4 className=" text-white font-robotoflex fs-24 lh-28-13 fw-normal pb-1 mb-2 text-center text-lg-start">
                  Stay Updated
                </h4>
                <p className="text-white font-robotoflex fs-16 lh-24 opacity-70 fw-normal mb-3 pb-3 text-center text-lg-start">
                  At 248 Labs, our constant pursuit is to build engaging games
                  that spared joy. Don’t hesitate to reach out to us with your
                  thoughts and messages - we are all ears!
                </p>
                <h4 className=" text-white font-robotoflex fs-24 lh-28-13 fw-normal pb-1 mb-2 pt-1 text-center text-lg-start">
                  Address
                </h4>
                <p className="text-white font-robotoflex fs-16 lh-24 opacity-70 fw-normal text-center text-lg-start">
                  390 Orchard Road, 03-07, Palais Renaissance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src={toplayer} alt="layer" className="formtoplayer" />
      <img src={bottomlayer} alt="layer" className="formbottomlayer" />
    </div>
  );
};

export default Started;
