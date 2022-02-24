import React from "react";
import "../scss/info.scss";

const Info = () => {
  return (
    <div>
      <section className="info-container">
        <h4>BUILT FOR MODERN USE</h4>
        <h2>Smarter meetings, all in one place</h2>
        <p>
          Send messages, share files, show your screen, and record your meetings
          — all in one workspace. Control who can join with invite-only team
          access, data encryption, and data export.
        </p>
      </section>
      <div className="divider">
        <div className="divider-line"></div>
        <div className="divider-number">
          <span>02</span>
        </div>
      </div>
    </div>
  );
};

export default Info;
