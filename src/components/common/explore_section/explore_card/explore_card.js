import React from "react";
import "./explore_card.css";

const ExploreCard = ({ restaurant }) => {
  const name = restaurant?.info?.name ?? "";
  const coverImg = restaurant?.info?.image?.url;
  const deliveryTime = restaurant?.order?.deliveryTime ?? "";
  const rating = restaurant?.info?.rating?.rating_text ?? "";
  const approxPrice = restaurant?.info?.cfo?.text ?? "";
  const cuisines = restaurant?.info?.cuisine
    ?.map((item) => item.name)
    .slice(0, 3);
  return (
    <div className="explore-card cur-pointer">
      <div className="explore-card-cover">
        <img src={coverImg} alt={name} className="explore-card-image" />
        <div className="delivery-time">{deliveryTime}</div>
      </div>
    </div>
  );
};

export default ExploreCard;
