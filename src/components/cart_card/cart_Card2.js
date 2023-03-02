import { Divider } from "@mui/material";
import React from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import logo from "../../images/logo.png";
import "./cart.css";
import { Items } from "./Items";

export const Cart_Card2 = () => {
  const navigate = useNavigate();

  const cartProduct = useSelector((state) => [state.cart.cartItems]);
  console.log(cartProduct, "cart producttss");
  return (
    <>
      <section className="main-cart-section">
        <div className="header-cart">
          <img
            onClick={() => navigate("/")}
            src={logo}
            alt="Logo"
            className="header-logo-cart cur-pointer"
          />
        </div>

        <div className="sub-header">
          <div>
            <div className="cart-description collection-title">Food Cart</div>
            <div className="total-items">
              You have{" "}
              <span className="total-items-count">
                {cartProduct[0].cartItems.length}
              </span>{" "}
              items in Food Cart
            </div>
          </div>
          <div>
            <div className="card-total collection-title">
              Cart Total : <span>2200 rs</span>
            </div>
            <div className="inclusive">(inclusive of all taxes)</div>
          </div>
        </div>
        <Divider />
        <div>
          <div className="cart-items">
            <div className="cart-items-container">
              <Scrollbars>
                {cartProduct[0].cartItems.map((curItem) => {
                  console.log(curItem.cart_product, "curItem");
                  return (
                    <Items
                      key={curItem._id}
                      {...curItem.cart_product}
                    />
                  );
                })}
              </Scrollbars>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Cart_Card2;
