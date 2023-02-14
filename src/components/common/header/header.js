import React from "react";
import "./header.css";
import logo from "../../../images/logo.png";
import profile from "../../../images/profile.jpg";

export const Header = () => {
  const isLoggedIn = true;
  return (
    <div className="max-width header">
      <img src={logo} alt="Logo" className="header-logo" />
      <div className="header-right">
        <div className="header-location-search-container">
          <div className="location-wrapper">
            <div className="location-icon-div">
              <i className="fi fi-rs-marker absolute-center location-drop-icon"></i>
              <div>Hyderabad</div>
            </div>
            <i className="fi fi-rs-caret-down absolute-center"></i>
          </div>
          <div className="location-search-separator"></div>

          <div className="header-search-bar">
            <div>
              <i className="fi fi-rs-search absolute-center search-icon"></i>
            </div>

            <div>
              <input
                placeholder="Search for cuisine or a dish"
                className="search-input"
              />
            </div>
          </div>
        </div>

        <div className="profile-wrapper">
          {isLoggedIn ? (
            <>
              <img
                src={profile}
                alt="Profile"
                className="header-profile-image"
              />
              <span className="profile-username">John Wick</span>
              <i class="fi fi-rr-angle-down absolute-center profile-option-down"></i>
            </>
          ) : (
            <div>Not LoggedIn</div>
          )}
        </div>
      </div>
    </div>
  );
};
