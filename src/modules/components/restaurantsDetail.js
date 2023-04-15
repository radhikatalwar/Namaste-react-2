import React from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  // How to read a dynamic url
  const { id } = useParams();
  return (
    <div className="body">
      <h1>Restaurant Menu : {id}</h1>
    </div>
  );
};

export default RestaurantMenu;
