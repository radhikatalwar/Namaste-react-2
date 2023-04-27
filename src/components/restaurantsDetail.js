import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addItem } from "../store/cartSlice";

const RestaurantDetail = () => {
  const dispatch = useDispatch();

  const handleAdditem = () => {
    dispatch(addItem("Healthy Food"));
  };

  // How to read a dynamic url
  const { id } = useParams();
  return (
    <div className={"text-center"}>
      <h1>Restaurant Detail : {id}</h1>
      <button
        className=" bg-green-800 text-white p-2 m-2 rounded-xl font-bold"
        onClick={handleAdditem}
      >
        Add To Cart
      </button>
    </div>
  );
};

export default RestaurantDetail;
