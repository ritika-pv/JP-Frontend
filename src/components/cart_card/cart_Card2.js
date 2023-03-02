import { Divider } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import logo from "../../images/logo.png";
import { getCartService } from "../../Utilities/Axios/apiService";
import { getUserData } from "../../Utilities/Helper/function";
import "./cart.css";
import { Items } from "./Items";

export const Cart_Card2 = () => {
  const navigate = useNavigate();
  const cartProduct = useSelector((state) => [state.cart.cartItems]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    (async function fetchLocalDataFromStorage() {
      const local = await getUserData();
      async function fetchCart(id) {
        const data = await getCartService(id);
        setCart(data.data.matchedCart);
      }
      await fetchCart(local._id);
    })();
  }, []);
  console.log(cart, "cart producttss");
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
                {cartProduct && cartProduct[0] && cartProduct[0].cartItems
                  ? cartProduct[0].cartItems.length
                  : cart.length}
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
                {(cartProduct && cartProduct[0] && cartProduct[0].cartItems
                  ? cartProduct[0].cartItems
                  : cart
                ).map((curItem) => {
                  console.log(curItem.cart_product, "curItem");
                  return <Items key={curItem._id} {...curItem.cart_product} />;
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
