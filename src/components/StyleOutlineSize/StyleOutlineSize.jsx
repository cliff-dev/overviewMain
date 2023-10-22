/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const StyleOutlineSize = ({
  className,
  groupClassName,
  overlapGroupClassName,
  subtractClassName,
  subtract = "https://c.animaapp.com/rWLqFFLy/img/subtract-1.svg",
  rectangleClassName,
  rectangleClassNameOverride,
  divClassName,
}) => {
  return (
    <div className={`style-outline-size ${className}`}>
      <div className={`group ${groupClassName}`}>
        <div className={`overlap-group ${overlapGroupClassName}`}>
          <img className={`subtract ${subtractClassName}`} alt="Subtract" src={subtract} />
          <div className={`rectangle ${rectangleClassName}`} />
          <div className={`div ${rectangleClassNameOverride}`} />
          <div className={`rectangle-2 ${divClassName}`} />
        </div>
      </div>
    </div>
  );
};

StyleOutlineSize.propTypes = {
  subtract: PropTypes.string,
};
