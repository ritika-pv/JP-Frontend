import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { Divider } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import logo from "../../images/logo.png";
import { checkout, getCartService } from "../../Utilities/Axios/apiService";
import { getUserData } from "../../Utilities/Helper/function";
import "./cart.css";
import { Items } from "./Items";
export const Cart_Card2 = () => {
  const navigate = useNavigate();
  const cartProduct = useSelector((state) => [state.cart.cartItems]);
  const [cart, setCart] = useState([]);
  const [totalSum, setTotalSum] = useState([]);
  const [userData, setUserData] = useState();

  useEffect(() => {
    (async function fetchLocalDataFromStorage() {
      const local = await getUserData();
      setUserData(local);
      async function fetchCart(id) {
        const data = await getCartService(id);
        setCart(data.data.matchedCart);

        const amountList = (
          cartProduct && cartProduct[0].cartItems
            ? cartProduct[0].cartItems
            : data.data.matchedCart
        ).map((item) => {
          return item.quantity * item.cart_product.price;
        });

        function calculateSum(list) {
          return list.reduce((next, curr) => next + curr, 0);
        }
        let sum = calculateSum(amountList);
        setTotalSum(sum);
      }
      await fetchCart(local._id);
    })();
  }, [cartProduct[0].cartItems]);

  async function HandleCheckout() {
    try {
      let response = await checkout({
        shippingInfo: {
          address: userData.address,
          city: userData.city,
          state: userData.state,
          pincode: userData.zip,
          phoneNo: userData.phone,
        },
        orderItems: (cartProduct && cartProduct[0].cartItems
          ? cartProduct[0].cartItems.cart_product
          : cart
        ).map((items) => {
          items.cart_product.quantity = items.quantity;
          return items.cart_product;
        }),
        totalPrice: totalSum,
      });
      console.log(response, "response mila hai bro ");
    } catch (err) {
      console.log(err,"error h bro");
    }
  }

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
              Cart Total : <span>{totalSum}</span>
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
                  return (
                    <Items
                      key={curItem._id}
                      {...curItem.cart_product}
                      quantity={curItem.quantity}
                    />
                  );
                })}
              </Scrollbars>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "5rem",
              marginBottom: "2rem",
              fontSize: "2.8rem",
              alignItems: "center",
            }}
          >
            <div
              className="continue-shopping cur-pointer"
              onClick={() => navigate("/")}
            >
              <ArrowBackIosOutlinedIcon
                sx={{ height: "40px", width: "35px" }}
              />
              Continue Shopping
            </div>
            <div className="cur-pointer checkout" onClick={HandleCheckout}>
              Checkout
              <ArrowForwardIosOutlinedIcon
                sx={{
                  marginRight: "1rem",
                  marginLeft: "1rem",
                  height: "40px",
                  width: "35px",
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Cart_Card2;
