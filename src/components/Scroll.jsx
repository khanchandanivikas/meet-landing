import React from "react";
import "../scss/scroll.scss";

const Scroll = () => {
  return (
    <div className="scroll-container">
      <p className="scroll-text">
        <span>Scroll </span>
        <span>to connect.</span>
      </p>
      <div className="mouse">
        <div className="mouse-wheel"></div>
      </div>
    </div>
  );
};

export default Scroll;
