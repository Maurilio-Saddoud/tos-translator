import React from "react";
import OpeningHook from "../../components/OpeningHook";
import CallToAction from "../../components/CallToAction";
import "./styles.css";
import { Grid } from "@mui/material";
import TitleComponent from "../../components/TitleComponent";
import NavButton from "../../components/NavButton";

const CallToActionContainer = () => {
  return (
    <div className="call-to-action-wrapper">
      <Grid container>
        <Grid item xs={1} sm={2} md={3} lg={4}></Grid>
        <Grid item xs={10} sm={8} md={6} lg={4}>
          <div className="call-to-action-content-container">
            <TitleComponent />
            <div className="component-spacer">
              <OpeningHook />
              <CallToAction />
            </div>
            <NavButton buttonText={"Translate"} route={"/contractInput"} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default CallToActionContainer;
