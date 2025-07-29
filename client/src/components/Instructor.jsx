import React from "react";
import "../styles/Instructor.css";
import instructorImage from "../assets/profile.jpg";

const Instructor = () => {
  return (
    <div className="instructor-page">
      <div className="instructor-card">
        <div className="instructor-image">
          <img src={instructorImage} alt="Instructor" />
        </div>
        <div className="instructor-info">
          <h1>Om Kumar</h1>
          <h4>Project Creator</h4>
          <p>
            Hi! I'm Om Kumar, a dedicated MERN stack developer focused on
            building secure and efficient web applications. This project
            showcases complete authentication using the MERN stack, including
            OTP verification through Twilio and Nodemailer. I hope this serves
            as a solid reference or base for your own projects.
          </p>
          <div className="social-links">
            <a
              href="https://github.com/omku415"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/kumar-om45/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://leetcode.com/u/omku45/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LeetCode
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
