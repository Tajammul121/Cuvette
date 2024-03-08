import React, { useState } from 'react'
import './Registerform.css'
import registerimg from '../assets/register.img.png'
import { useNavigate,Link } from 'react-router-dom'



export default function Registerform() {

  const [formValues, setFormValues] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    checkbox: false,
  });

  const [errors, setErrors] = useState({
    name: null,
    username: null,
    email: null,
    mobile: null,
    checkbox: null,
  });
  const navigate = useNavigate();
  const handleSignUp = () => {
    let isErrors = false;
    if (formValues.name.trim().length === 0) {
      // trim function removes whitespaces from start and end of string
      setErrors((prev) => ({ ...prev, name: "Name is required" }));
      isErrors = true;
    } else {
      setErrors((prev) => ({ ...prev, name: null }));
    }
    if (formValues.username.trim().length === 0) {
      setErrors((prev) => ({ ...prev, username: "Username is required" }));
      isErrors = true;
    } else {
      setErrors((prev) => ({ ...prev, username: null }));
    }
    if (formValues.email.trim().length === 0) {
      setErrors((prev) => ({ ...prev, email: "Email is required" }));
      isErrors = true;
    } else {
      setErrors((prev) => ({ ...prev, email: null }));
    }
    if (formValues.mobile.trim().length === 0) {
      setErrors((prev) => ({ ...prev, mobile: "Mobile is required" }));
      isErrors = true;
    } else {
      setErrors((prev) => ({ ...prev, mobile: null }));
    }
    if (formValues.checkbox === false) {
      setErrors((prev) => ({
        ...prev,
        checkbox: "Please accept the terms and conditions",
      }));
      isErrors = true;
    } else {
      setErrors((prev) => ({ ...prev, checkbox: null }));
    }
    // console.log(isErrors, "isErrors");
    if (!isErrors) {
      localStorage.setItem("userInfo", JSON.stringify(formValues));
      navigate("/movies");
    }
  };
  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
   
  



  return (
    <div className='registerform'>
        <div className="register-left">
          <img className="register-img" src={registerimg} alt="" />
      </div>
      <div className="register-right">
      <div className="title">
            <h1 className='title-heading'>Super app</h1>
            <h3>Create your new account</h3>
        </div>
        <div className="form">

          
       
      <input
        type="text"
        placeholder="Name"
        value={formValues.name}
        onChange={handleChange}
        name="name"
      />
      <div className="error-m">
      {errors.name ? <p style={{ color: "red" }}>{errors.name}</p> : <></>}
      </div>
      <input
        type="text"
        placeholder="Username"
        value={formValues.username}
        onChange={handleChange}
        name="username"
      />
     <div className="error-m">
     {errors.username ? (
        <p style={{ color: "red" }}>{errors.username}</p>
      ) : (
        <></>
      )}
     </div>
      <input
        type="email"
        placeholder="Email"
        value={formValues.email}
        onChange={handleChange}
        name="email"
      />
      <div className="error-m">
      {errors.email ? <p style={{ color: "red" }}>{errors.email}</p> : <></>}
      </div>
      <input
        type="text"
        placeholder="Mobile"
        value={formValues.mobile}
        onChange={handleChange}
        name="mobile"
      />
     <div className="error-m">
     {errors.mobile ? <p style={{ color: "red" }}>{errors.mobile}</p> : <></>}
     </div>




           <div className="check-box">
           <input
          type="checkbox"
          id="checkbox"
          name="checkbox"
          value={formValues.checkbox}
          onChange={handleChange}
        />
        <label htmlFor="checkbox">
          Share my registration data with Superapp
        </label>
           </div>
           <div className="error-m">
        {errors.checkbox ? (
        <p style={{ color: "red" }}>{errors.checkbox}</p>
      ) : (
        <></>
      )}
        </div>
            <div className="form-btn">
            <button onClick={handleSignUp}>Sign Up</button>
            </div>
        </div>
        <div className="form-desc">
            <p>By clicking on Sign up. you agree to Superapp <span>Terms and Conditions of Use</span></p>
            <p>To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp <span>Privacy Policy</span></p>
        </div>
      </div>
       
    </div>
  )
}
