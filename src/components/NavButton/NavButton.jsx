import React from "react";
import { GrFormNextLink } from "react-icons/gr";
import "./styles.css";
import { useNavigate } from "react-router-dom";

const NavButton = ({ buttonText, showIcon = true, route }) => {
  const navigate = useNavigate();
  return (
    <div className="nav-button-container">
      <p className="nav-button-text" onClick={() => navigate(route)}>
        {buttonText}{" "}
        {showIcon ? (
          <GrFormNextLink size={35} style={{ marginTop: "5px" }} />
        ) : null}
      </p>
    </div>
  );
};

export default NavButton;
