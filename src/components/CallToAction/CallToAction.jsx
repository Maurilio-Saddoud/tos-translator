import React from "react";
import "./styles.css";

const CallToAction = () => {
  return (
    <div className="call-to-action-container">
      <img
        className="certification-img"
        src="/assets/personalFile.svg"
        alt="clip art of signing contract"
      />
      <p className="call-to-action-text">
        Use the translator to <br /> see what you're <b>really</b> <br />{" "}
        agreeing to
      </p>
    </div>
  );
};

export default CallToAction;
