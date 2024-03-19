import React from "react";
import logo from "../assets/images/footlogo.webp";
import { Facebook, Insta, Linked, Twitter } from "./Icon";
const Footer = () => {
  return (
    <div>
      <div className="container d-flex flex-column align-items-center pb-1">
        <img src={logo} alt="logo" />
        <ul className="ps-0 d-flex gap-4 font-robotoflex lh-18 fs-16 opacity-70 mb-0 mt-3 pt-1 ">
          <li>
            <a href="" className="text-white">
              Home
            </a>
          </li>
          <li>
            <a href="" className="text-white">
              Roadmap
            </a>
          </li>
          <li>
            <a href="" className="text-white">
              Team
            </a>
          </li>
          <li>
            <a href="" className="text-white">
              About Us
            </a>
          </li>
        </ul>
        <div className="d-flex gap-3 mt-4 pb-4 mb-3">
          <a href="https://twitter.com/" target="_blank" className="icons">
            <div className="circle1 d-flex justify-content-center align-items-center">
              <Twitter />{" "}
            </div>
          </a>
          <a href="https://www.facebook.com/" target="_blank" className="icons">
            <div className="circle1 d-flex justify-content-center align-items-center">
              <Facebook />{" "}
            </div>
          </a>
          <a href="https://www.instagram.com/" target="_blank" className="icons">
            <div className="circle1 d-flex justify-content-center align-items-center">
              <Insta />{" "}
            </div>
          </a>
          <a href="https://in.linkedin.com/" target="_blank" className="icons">
            <div className="circle1 d-flex justify-content-center align-items-center">
              <Linked />{" "}
            </div>
          </a>
        </div>
      </div>
      <div className="footline"></div>
      <div className="contianer">
        <p className=" font-robotoflex fs-14 text-white lh-16 opacity-60 mb-0 text-center py-4">© 2023 248 Labs. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
