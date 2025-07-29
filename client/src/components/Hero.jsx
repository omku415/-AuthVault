import React, { useContext } from "react";
import "../styles/Hero.css";
import heroImage from "../assets/img1.png";
import { Context } from "../main";

const Hero = () => {
  const { user } = useContext(Context);
  return (
    <>
      <div className="hero-section">
        <img src={heroImage} alt="hero-image" />
        <h4>Hello, {user ? user.name : "Developer"}</h4>
        <h1>Welcome to the MERN Auth Project</h1>
        <p>
          This project implements secure authentication using the MERN stack,
          featuring OTP verification via Twilio and Nodemailer integration.
        </p>
      </div>
    </>
  );
};

export default Hero;
