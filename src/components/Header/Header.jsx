/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Header = ({ property1, className }) => {
  return (
    <div className={`header ${property1} ${className}`}>
      {property1 === "default" && (
        <>
          <div className="frame">
            <div className="frame-wrapper">
              <div className="frame-2">
                <div className="text-wrapper">hsuan_n_art</div>
                <div className="text-wrapper-2">$35,352.02</div>
              </div>
            </div>
            <img
              className="icon-arrow-down"
              alt="Icon arrow down"
              src="https://c.animaapp.com/rWLqFFLy/img/icon-arrow-down-1@2x.png"
            />
          </div>
          <div className="search-bar">
            <img
              className="icon-search-normal"
              alt="Icon search normal"
              src="https://c.animaapp.com/rWLqFFLy/img/icon-search-normal-2@2x.png"
            />
            <div className="text-wrapper-3">Enter address, domain, identity</div>
          </div>
          <div className="icon-wrapper">
            <div className="icon-notification-wrapper">
              <div className="icon-notification">
                <div className="ellipse-2" />
              </div>
            </div>
          </div>
          <div className="photo-wrapper">
            <div className="photo" />
          </div>
          <div className="div-wrapper">
            <div className="photo" />
          </div>
          <div className="frame-3">
            <div className="photo" />
          </div>
        </>
      )}

      {property1 === "variant-2" && (
        <div className="overlap-group-2">
          <div className="frame-4">
            <div className="frame-5">
              <div className="frame-2">
                <div className="frame-6">
                  <img
                    className="icon-plus"
                    alt="Icon plus"
                    src="https://c.animaapp.com/rWLqFFLy/img/---icon--plus-@2x.png"
                  />
                  <div className="connect">CONNECT</div>
                </div>
              </div>
            </div>
          </div>
          <div className="rectangle-3" />
          <div className="search-bar">
            <img
              className="icon-search-normal"
              alt="Icon search normal"
              src="https://c.animaapp.com/rWLqFFLy/img/icon-search-normal-2@2x.png"
            />
            <div className="text-wrapper-3">Enter address, domain, identity</div>
          </div>
          <div className="icon-wrapper">
            <div className="icon-notification-wrapper">
              <div className="icon-notification">
                <div className="ellipse-2" />
              </div>
            </div>
          </div>
          <div className="photo-wrapper">
            <div className="photo" />
          </div>
          <div className="div-wrapper">
            <div className="photo" />
          </div>
          <div className="frame-3">
            <div className="photo" />
          </div>
        </div>
      )}
    </div>
  );
};

Header.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
};
