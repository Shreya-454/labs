import React from "react";
import domainimg from "../assets/images/domainimg.webp";
const Domain = () => {
  return (
    <div className="py-md-5 overflow-x-clip">
      <div className="py-5 mt-2">
        <div className="container pb-4 position-relative z-1">
        <div className="domain-ellipse z-n1 d-none d-md-block"></div>
          <img src={domainimg} alt="img" className="w-100" data-aos="zoom-in"/>
        </div>
        <div className="container pb-2">
          <div className="row">
            <div className="col-lg-3 d-xs-flex justify-content-center gap-4 d-lg-block mb-md-5 mb-4 mb-lg-0">
              <div className="d-flex justify-content-center mb-xs-4">
                <button className="gradient-border-mask border-btn font-robotoflex fs-18 lh-27 text-center w-237 mb-lg-4 fw-bold smallbtnpadding " data-aos="fade-right">
                  name@domain.com
                </button>
              </div>
              <div className=" d-flex justify-content-center">
                <button className=" gradient-btn font-robotoflex fs-18 lh-27 text-center w-237 fw-bold smallbtnpadding" data-aos="fade-right">
                  Make Your Move
                </button>
              </div>
            </div>
            <div className="col-lg-9">
              <p className=" font-robotoflex fw-normal fs-16 lh-24 text-grey mb-0 text-center text-lg-start" data-aos="fade-left">
                <span className="d-block pb-2">
                  Unveiled Is A Unique{" "}
                  <span className="text-white fw-semibold opacity-100">
                    Collectible Card Game
                  </span>{" "}
                  In Which You Gain Fervour For Your Ventures, Spending it On
                  Mercenaries, Spies, Automata, And Influence.
                </span>
                <span className="pt-1 pb-2">
                  <span className="d-block">
                    You Play{" "}
                    <span className=" fw-bold text-white">
                      A Rogue Merchant Trader
                    </span>{" "}
                    Allied To A Noble House, Alongside Your{" "}
                    <span className="fw-semibold text-white">
                      Cryptid-Humanoid Companions
                    </span>{" "}
                    In
                  </span>{" "}
                  A Game Of Ambition And Alliance, Deception And Miracles,
                  Manipulation And Annihilation. Bells Chime In The Harbour, And
                  Markets Are Opening. Guards Have Swept The Streets Of The More
                  Obvious Dangers.
                </span>
                <span className="d-block pt-1 fw-semibold text-white ">
                  What’s Your Next Move?
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Domain;
