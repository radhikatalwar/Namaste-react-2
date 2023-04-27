import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../store/cartSlice";

const Cart = () => {
  const { item } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center">
      <button
        className=" bg-green-800 text-white p-2 m-2 rounded-xl font-bold"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
      <h1 className="font-bold text-3xl">Cart - {item.length}</h1>
      {item.map((food, idx) => {
        return <h2 key={idx}>{food}</h2>;
      })}
    </div>
  );
};

export default Cart;
