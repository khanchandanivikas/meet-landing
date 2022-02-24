import React from "react";
import "../scss/gallery.scss";
import womanInVideocall from "../images/image-woman-in-videocall.jpg";
import womanVideochatting from "../images/image-women-videochatting.jpg";
import manInMeeting from "../images/image-men-in-meeting.jpg";
import manTexting from "../images/image-man-texting.jpg";

const Gallery = () => {
  return (
    <div className="gallery-container">
      <div className="divider">
        <div className="divider-line"></div>
        <div className="divider-number">
          <span>01</span>
        </div>
      </div>
      <div className="gallery">
        <img src={womanInVideocall} alt="woman-in-videocall" />
        <img src={womanVideochatting} alt="woman-videochatting" />
        <img src={manInMeeting} alt="men-in-meeting" />
        <img src={manTexting} alt="man-texting" />
      </div>
    </div>
  );
};

export default Gallery;
