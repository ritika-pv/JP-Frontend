import React from "react";
import "./explore_card.css";

const ExploreCard = ({ restaurant }) => {
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
  return (
    <div className="explore-card cur-pointer">
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
      </div>
    </div>
  );
};

export default ExploreCard;
