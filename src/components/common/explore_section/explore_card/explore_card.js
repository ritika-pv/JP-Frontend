import React, { useState } from "react";
import "./explore_card.css";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";

const ExploreCard = ({ restaurant }) => {
  const [style, setStyle] = useState({ visibility: "hidden" });
  const name = restaurant?.info?.name ?? "";
  const coverImg = restaurant?.info?.image?.url;
  const deliveryTime = restaurant?.order?.deliveryTime ?? "";
  const rating = restaurant?.info?.rating?.rating_text ?? "";
  const approxPrice = restaurant?.info?.cfo?.text ?? "";
  const offers = restaurant?.bulkOffers ?? [];
  const discount =
    offers.length > 1
      ? offers[1].text
      : offers.length === 1
      ? offers[0].text
      : null;
      const handleAddtoCart = () => {
        console.log('Button clicked!');
        // Your code here to handle the button click event
      };
  return (
    <div
      className="explore-card cur-pointer"
      onMouseEnter={(e) => {
        setStyle({ visibility: "visible" });
      }}
      onMouseLeave={(e) => {
        setStyle({ visibility: "hidden" });
      }}
    >
      <div className="explore-card-cover">
        <img src={coverImg} alt={name} className="explore-card-image" />
        <div className="delivery-time">{deliveryTime}</div>
        {discount && <div className="discount absolute-center">{discount}</div>}
      </div>
      <div className="res-row">
        <div className="res-name">{name}</div>
        {rating && (
          <div className="res-rating absolute-center">
            {rating}
            <i className="fi fi-rr-star absolute-center" />
          </div>
        )}
      </div>
      <div className="res-row">
        {approxPrice && <div className="res-price">{approxPrice}</div>}
        <Stack direction="row" spacing={2}>
          <Button
            onClick={handleAddtoCart}
            style={style}
            className="add-to-cart"
            variant="contained"
            endIcon={<AddIcon />}
          >
            ADD
          </Button>
        </Stack>
      </div>
    </div>
  );
};

export default ExploreCard;
