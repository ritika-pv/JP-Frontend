import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./delivery_collection.css";
import NextArrow from "../../common/carousel/next_arrow";
import PreviousArrow from "../../common/carousel/prev_arrow";
import Slider from "react-slick";
import DeliveryItems from "./delivery_items/delivery_items";
import { getCategories } from "../../../Utilities/Axios/apiService";
const settings = {
  infinite: true,
  centerMode: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  nextArrow: <NextArrow />,
  prevArrow: <PreviousArrow />,
};
const DeliveryCollections = () => {
  const [categories, setCategoryData] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    (async function getAllCategories() {
      let categoryList = await getCategories();
      setCategoryData(categoryList.data.category)
    })();
  }, [dispatch]);
  return (
    <div className="delivery-collection">
      <div className="max-width">
        <div className="collection-title">Eat What Makes You Happy</div>
        <Slider {...settings}>
          {categories.map((item) => {
            return <DeliveryItems item={item} />;
          })}
        </Slider>
      </div>
    </div>
  );
};

export default DeliveryCollections;
