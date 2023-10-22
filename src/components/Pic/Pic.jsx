/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Pic = ({
  className,
  ellipseClassName,
  ellipse = "https://c.animaapp.com/rWLqFFLy/img/ellipse-71-1@2x.png",
}) => {
  return (
    <div className={`pic ${className}`}>
      <img className={`ellipse ${ellipseClassName}`} alt="Ellipse" src={ellipse} />
    </div>
  );
};

Pic.propTypes = {
  ellipse: PropTypes.string,
};
