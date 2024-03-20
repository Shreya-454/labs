import React from "react";
import india from "../assets/images/india.webp";
import australia from "../assets/images/australia.webp";
import england from "../assets/images/england.webp";
import { Star } from "./Icon";

const Roadmap = () => {
  return (
    <div className="roadmap-bg py-lg-5 mt-md-5 position-relative z-1 overflow-x-clip" id="roadmap">
      <div className="roadmap-ellipse "></div>
      <div className="container py-md-5 mt-5">
        <div className="d-flex justify-content-center mb-3 mt-4">
          <span className="  bg-orangegradient  border-none  gradient-border-mask badge-padding">
            <span className="text-gradient z-1 font-robotoflex lh-19 fw-normal ">
              Road map
            </span>
          </span>
        </div>
        <h2 className="text-white font-robotoflex text-center fs-52 lh-62 fw-bold mb-md-5 pb-3">
          Milestones and markers
        </h2>
        <div className=" roadrow mt-lg-5 mt-md-3 mt-1 pt-lg-5 pt-md-3 pt-1 pb-md-5 position-relative">
          <div className=" w-100 d-flex justify-content-lg-end justify-content-center my-lg-5 my-md-3 my-1 ">
            <div className="roadcard d-flex justify-content-center align-items-center  overflow-hidden mb-lg-5 mb-md-3 mb-1 " data-aos="fade-left">
              <div className="roadcardbody">
                <h4 className=" text-gradient text-center font-robotoflex fs-24 lh-28-13">
                  Oct 2014
                </h4>
                <p className="text-white text-center font-robotoflex fs-24 lh-28-13">
                  Hired our first employee
                </p>
              </div>
            </div>
          </div>
          <div className=" w-100 d-flex  justify-content-center d-lg-block  py-lg-5 py-md-3 py-1 mt-1">
            <div className="roadcard d-flex justify-content-center align-items-center overflow-hidden mb-1" data-aos="fade-right">
              <div className="roadcardbody">
                <h4 className=" text-gradient text-center font-robotoflex fs-24 lh-28-13">
                  Nov 2014
                </h4>
                <p className="text-white text-center font-robotoflex fs-24 lh-28-13">
                  Launched Bitcoin wallet
                </p>
              </div>
            </div>
          </div>
          <div className="w-100 d-flex justify-content-center justify-content-lg-end  my-lg-5 my-md-3 my-1">
            <div className="roadcard d-flex justify-content-center align-items-center overflow-hidden my-lg-5 my-md-3 my-1 " data-aos="fade-left">
              <div className="roadcardbody">
                <h4 className=" text-gradient text-center font-robotoflex fs-24 lh-28-13">
                  Oct 2015
                </h4>
                <p className="text-white text-center font-robotoflex fs-24 lh-28-13">
                  1st prize by Bit angels at Coin Agenda,{" "}
                  <span className="d-block">Las Vegas</span>
                </p>
              </div>
            </div>
            </div>
            <div className="w-100 d-flex d-lg-block justify-content-center  pt-1 my-lg-5 my-md-3 my-1">
              <div className="roadcard d-flex justify-content-center align-items-center overflow-hidden my-lg-5 my-md-3 my-1" data-aos="fade-right">
                <div className="roadcardbody">
                  <h4 className=" text-gradient text-center font-robotoflex fs-24 lh-28-13">
                    Jan 2020
                  </h4>
                  <div className="d-flex gap-3">
                    <p className="text-white text-center font-robotoflex fs-24 lh-28-13">
                      Launch On
                    </p>
                    <span className=" d-flex gap-3">
                      <span>
                        <img src={india} alt="flags" />
                      </span>
                      <span>
                        <img src={australia} alt="flags" />
                      </span>
                      <span>
                        <img src={england} alt="flags" />
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className=" w-100 d-flex justify-content-lg-end justify-content-center mt-lg-5 mt-md-3 mt-1 pt-1 pt-md-3 pt-lg-5 ">
              <div className="roadcard d-flex justify-content-center align-items-center overflow-hidden mt-lg-5 mt-md-3 mt-1" data-aos="fade-left">
                <div className="roadcardbody">
                  <h4 className=" text-gradient text-center font-robotoflex fs-24 lh-28-13">
                    Jan 2022
                  </h4>
                  <p className="text-white text-center font-robotoflex fs-24 lh-28-13">
                    Trusted by 10 Millions+ Users
                  </p>
                  <div className="d-flex justify-content-center gap-1">
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                  </div>
                </div>
              </div>
            </div>
            <div className="roadline d-none d-xl-block "></div>
          </div>
        
        </div>
      </div>
  );
};

export default Roadmap;
