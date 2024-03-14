import React from "react";
import domainimg from "../assets/images/domainimg.webp";
const Domain = () => {
  return (
    <div className="py-5">
      <div className="py-5 mt-2">
        <div className="container pb-4">
          <img src={domainimg} alt="img" className="w-100" />
        </div>
        <div className="container pb-2">
            <div className="row">
                <div className="col-3">
                    <button className="gradient-border-mask border-btn font-robotoflex fs-18 lh-27 text-center w-237 mb-4 fw-bold ">name@domain.com</button>
                    <button className=" gradient-btn font-robotoflex fs-18 lh-27 text-center w-237 fw-bold">Make Your Move</button>
                </div>
                <div className="col-9">
                    <p className=" font-robotoflex fw-normal fs-16 lh-24 text-grey mb-0"><span className="d-block pb-2">Unveiled Is A Unique <span className="text-white fw-semibold opacity-100">Collectible Card Game</span> In Which You Gain Fervour For Your Ventures, Spending it On Mercenaries, Spies, Automata, And Influence.</span> 
<span className="pt-1 pb-2"><span className="d-block">You Play <span className=" fw-bold text-white">A Rogue Merchant Trader</span> Allied To A Noble House, Alongside Your <span className="fw-semibold text-white">Cryptid-Humanoid Companions</span> In</span> A Game Of Ambition And Alliance, Deception And Miracles, Manipulation And Annihilation. Bells Chime In The Harbour, And Markets Are Opening. Guards Have Swept The Streets Of The More Obvious Dangers.</span>
<span className="d-block pt-1 fw-semibold text-white ">What’s Your Next Move?</span></p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Domain;
