import React from "react";
import logo from "../assets/images/footlogo.webp";
import { Facebook, Insta, Linked, Twitter } from "./Icon";
const Footer = () => {
  const Dates = new Date()
  const year = Dates.getFullYear()
  return (
    <div className="position-relative overflow-hidden">
      <div className="container d-flex flex-column align-items-center pb-1 ">
        <img src={logo} alt="logo" />
        <ul className="ps-0 d-flex gap-4 font-robotoflex lh-18 fs-16 opacity-70 mb-0 mt-3 pt-1 ">
          <li>
            <a href="#home" className="text-white foot">
              Home
            </a>
          </li>
          <li>
            <a href="#roadmap" className="text-white foot">
              Roadmap
            </a>
          </li>
          <li>
            <a href="#team" className="text-white foot">
              Team
            </a>
          </li>
          <li>
            <a href="#about" className="text-white foot">
              About Us
            </a>
          </li>
        </ul>
        <div className="d-flex gap-3 mt-4 pb-4 mb-3">
          <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="icons">
            <div className="circle1 d-flex justify-content-center align-items-center">
              <Twitter />{" "}
            </div>
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="icons">
            <div className="circle1 d-flex justify-content-center align-items-center">
              <Facebook />{" "}
            </div>
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="icons">
            <div className="circle1 d-flex justify-content-center align-items-center">
              <Insta />{" "}
            </div>
          </a>
          <a href="https://in.linkedin.com/" target="_blank" rel="noreferrer" className="icons">
            <div className="circle1 d-flex justify-content-center align-items-center">
              <Linked />{" "}
            </div>
          </a>
        </div>
      </div>
      <div className="footline"></div>
      <div className="contianer">
        <p className=" font-robotoflex fs-14 text-white lh-16 opacity-60 mb-0 text-center py-4">© {year} 248 Labs. All rights reserved</p>
      </div>
      <div className="foot-ellipse1"></div>
      <div className="foot-ellipse2"></div>
    </div>
  );
};

export default Footer;
