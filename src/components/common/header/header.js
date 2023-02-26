import React, { useState, useEffect } from "react";
import "./header.css";
import logo from "../../../images/logo.png";
import profile from "../../../images/profile.jpg";
import MyTextButton from "../button/buttons";
import { useNavigate } from "react-router-dom";
import {
  clearLocalStorage,
  getUserData,
} from "../../../Utilities/Helper/function";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Logout from "@mui/icons-material/Logout";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../../reducers/user_slice";

export const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  function handleLogin() {
    navigate("/login");
  }
  function handleSignup() {
    navigate("/register");
  }
  const [userData, setUserDataLocal] = useState("");

  useEffect(() => {
   (async function fetchLocalDataFromStorage(){
    const local  = await getUserData();
    setUserDataLocal(local);
   })()
  }, []);
  console.log(userData, "userData");
  const isLoggedIn = userData ? true : false;

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
            <React.Fragment>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Tooltip title="Account settings">
                  <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                  >
                    <Avatar sx={{ width: 60, height: 60, bgcolor: "#FB2B55" }}>
                      {userData.fname[0]}
                    </Avatar>
                  </IconButton>
                </Tooltip>
              </Box>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <MenuItem onClick={handleClose}>
                  <Avatar>
                    <ShoppingCartOutlinedIcon />
                  </Avatar>
                  My Cart
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Avatar /> My Profile
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Avatar /> My Order
                </MenuItem>
                <Divider />
                <MenuItem
                  onClick={() => {
                    setUserDataLocal("");
                    dispatch(logout());
                    clearLocalStorage();
                  }}
                >
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
            </React.Fragment>
          ) : (
            <div className="not-logged-in absolute-center">
              <div className="log-in">
                <MyTextButton
                  className="sign-in-button"
                  onClick={handleLogin}
                  background={{ color: "#256fef" }}
                  style={{ color: "#ff5f1f" }}
                  label="Log In"
                />
              </div>
              <div className="sign-up">
                <MyTextButton
                  className="sign-up-button"
                  onClick={handleSignup}
                  style={{ color: "#ff5f1f" }}
                  label="Sign Up"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
