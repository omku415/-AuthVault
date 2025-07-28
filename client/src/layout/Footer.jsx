import React from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";
import yt from "../assets/yt.png";
import git from "../assets/git.png";
import linkedin from "../assets/linkedin.png";
import leetcode from "../assets/leetcode.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h2>MERN Authentication</h2>
          <p>A secure authentication system built using the MERN stack.</p>
        </div>
        <div className="footer-social">
          <h3>Follow Me</h3>
          <div className="social-icons">
            <Link
              to="https://www.linkedin.com/in/kumar-om45/"
              target="_blank"
              className="social-link"
            >
              <img src={linkedin} alt="LinkedIn" />
            </Link>
            <Link
              to="https://github.com/omku415"
              target="_blank"
              className="social-link"
            >
              <img src={git} alt="GitHub" />
            </Link>
            <Link
              to="https://leetcode.com/u/omku45/"
              target="_blank"
              className="social-link"
            >
              <img src={leetcode} alt="LeetCode" />
            </Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 MERN Authentication. All Rights Reserved.</p>
        <p>Designed by Om Kumar</p>
      </div>
    </footer>
  );
};

export default Footer;
