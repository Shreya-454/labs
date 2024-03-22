import React, { useRef, useState } from "react";
import toplayer from "../assets/images/formtoplayer.webp";
import bottomlayer from "../assets/images/formbottonlayer.webp";
const Started = () => {
  const checkboxRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    lastname:"",
    number: "",
  email:""
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    lastname:"",
    number: "",
    email:""
  });
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const regex = {
      name: /^[a-zA-Z\s]+$/,
      lastname: /^[a-zA-Z\s]+$/,
      number: /^\d{10}$/,
      email: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,})$/,
     
    };
    const errors = {};
    if (!regex.name.test(formData.name)) {
      errors.name = "Name is invalid.";
    }
    if (!regex.lastname.test(formData.lastname)) {
      errors.lastname = "LastName is invalid.";
    }
    if (!regex.number.test(formData.number)) {
      errors.number = "Number is invalid.";
    }
    if (!regex.email.test(formData.email)) {
      errors.email = "email is invalid.";
    }
    if (!checkboxRef.current.checked) {
      errors.checkbox = "agreement not checked";
    }
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      setShowSuccessPopup(true);
    }
  };
  const handlePopupClose = () => {
    setShowSuccessPopup(false);
    setFormData({
      name: "",
      lastname:"",
      number: "",
      email:""
    });
    setFormErrors({
      name: "",
      lastname:"",
      number: "",
      email:""
    });}
  if (showSuccessPopup) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }   
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
                <form className=" z-1 position-relative" onSubmit={handleSubmit}>
                  <div className="d-md-flex gap-4 mb-3 mb-md-4 d-block">
                    <div className="w-md-50 mb-3 mb-md-0">
                      <label htmlFor="name"   className="text-white font-robotoflex fs-16 lh-18 fw-medium mb-2"> First Name:</label>
                      <div className="w-100">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          placeholder="Park Seijun"
                          className="w-100 inputbg input-layout" 
                          value={formData.name}
                          onChange={handleChange}
                          autoComplete="true"
                        />
                        {formErrors.name && (
                          <p className="text-danger pt-1 font-robotoflex">{formErrors.name}</p>
                        )}
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
                          name="lastname"
                          value={formData.lastname}
                          onChange={handleChange}
                          // className={formErrors.name ? "error" : ""}
                        />
                        {formErrors.lastname && (
                          <p className="text-danger pt-1 font-robotoflex">{formErrors.lastname}</p>
                        )}
                      </div>
                    </div>
                    </div>
                    <div className="d-md-flex gap-4 mb-3 mb-md-4 d-block ">
                      <div className="w-md-50 mb-3 mb-md-0">
                          <label htmlFor="number"   className="text-white font-robotoflex fs-16 lh-18 fw-medium mb-2">Number:</label>
                          <div className="w-100">
                          <input
                            type="tel"
                            name="number"
                            placeholder="+12 5858526478"
                            id="number"
                            autoComplete="true"
                          value={formData.number}
                          onChange={handleChange}
                          className={`${formErrors.number ? "error" : ""} inputbg input-layout w-100`}
                        />
                        {formErrors.number && (
                          <p className="text-danger pt-1 font-robotoflex">{formErrors.number}</p>
                        )}
                        </div>
                      </div>
                    <div className="w-md-50 ">
                      <label
                        className="text-white font-robotoflex fs-16 lh-18 fw-medium mb-2"
                        htmlFor="Email"
                      >
                        Email
                      </label>
                      <div className=" w-100">
                        <input
                          type="email"
                          id="Email"
                          name="email"
                          autoComplete="true"
                          onChange={handleChange}
                          placeholder="Park@458@Gmail.com"
                            className="inputbg input-layout w-100"
                            value={formData.email}/>
                        {formErrors.email && (
                          <p className="text-danger pt-1 font-robotoflex">{formErrors.email}</p>
                        )}
                      </div>
                    </div>
                    </div>
                  <div className="d-flex">
                  <input
                      type="checkbox"
                      id="checkbox"
                      defaultChecked={false}
                      ref={checkboxRef}
                    />
                    <label
                      htmlFor="checkbox"
                      className="text-white font-robotoflex fs-18 lh-27  ms-3"
                    >
                      By sending this form I confirm that I have read and accept
                      the <span className="fw-medium">Privacy Policy</span>
                    </label>
                    
                  </div>
                  {formErrors.checkbox && (
                    <p className="text-danger pt-1">{formErrors.checkbox}</p>
                  )}
                  <div className="d-flex justify-content-center d-md-block">
                  <button type="submit" className=" gradient-btn smallbtnpadding font-robotoflex lh-18 fs-15 fw-medium mt-4">
                    Subscribe
                  </button>
                  {showSuccessPopup && (
        <div className="success-popup">
          <p className="text-white pt-1 font-robotoflex">Form submitted successfully!</p>
          <button className="gradient-btn px-3 py-2" onClick={handlePopupClose}>Close</button>
        </div>
      )}
                </div>
                </form>
         
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
  );}

export default Started;
