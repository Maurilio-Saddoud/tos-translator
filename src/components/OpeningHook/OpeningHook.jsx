import React from "react";
import "./styles.css";

const OpeningHook = () => {
  return (
    <div className="opening-hook-container">
      <p className="opening-hook-text">
        Stop signing shit you <br /> didn't read
      </p>
      <img
        className="terms-img"
        src="/assets/terms.svg"
        alt="clip art of signing contract"
      />
    </div>
  );
};

export default OpeningHook;
