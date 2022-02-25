import React from "react";
import "../scss/intro.scss";
import logo from "../images/logo.svg";
import avatarLeftOne from "../images/avatar-left-1.png";
import avatarLeftTwo from "../images/avatar-left-2.png";
import avatarLeftThree from "../images/avatar-left-3.png";
import avatarLeftFour from "../images/avatar-left-4.png";
import avatarLeftFive from "../images/avatar-left-5.png";
import avatarLeftSix from "../images/avatar-left-6.png";
import avatarRightOne from "../images/avatar-right-1.png";
import avatarRightTwo from "../images/avatar-right-2.png";
import avatarRightThree from "../images/avatar-right-3.png";
import avatarRightFour from "../images/avatar-right-4.png";
import avatarRightFive from "../images/avatar-right-5.png";
import avatarRightSix from "../images/avatar-right-6.png";

const Intro = () => {
  return (
    <main className="intro-container">
      <div className="logo-container">
        <img className="logo-img" src={logo} alt="meet-logo" />
      </div>
      <div className="intro-content">
        <div className="hero hero-left">
          <img src={avatarLeftOne} alt="avatars-social-left" />
          <img src={avatarLeftTwo} alt="avatars-social-left" />
          <img src={avatarLeftThree} alt="avatars-social-left" />
          <img src={avatarLeftFour} alt="avatars-social-left" />
          <img src={avatarLeftFive} alt="avatars-social-left" />
          <img src={avatarLeftSix} alt="avatars-social-left" />
        </div>
        <div className="hero-text">
          <h1 className="hero-heading">Group Chat for Everyone</h1>
          <p className="hero-description">
            Meet makes it easy to connect with others face-to-face virtually and
            collaborate across any device.
          </p>
          <div className="link">
            <button>Download v1.3</button>
            <button>What is it?</button>
          </div>
        </div>
        <div className="hero hero-right">
          <img src={avatarRightOne} alt="avatars-social-right" />
          <img src={avatarRightTwo} alt="avatars-social-right" />
          <img src={avatarRightThree} alt="avatars-social-right" />
          <img src={avatarRightFour} alt="avatars-social-right" />
          <img src={avatarRightFive} alt="avatars-social-right" />
          <img src={avatarRightSix} alt="avatars-social-right" />
        </div>
      </div>
    </main>
  );
};

export default Intro;
