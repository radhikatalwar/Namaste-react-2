import { useContext } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import UserContext from "../utils/userContext";
// import "../styles/header.css";

const HeaderComponent = () => {
  const { user } = useContext(UserContext);
  const { item } = useSelector((store) => store.cart);

  return (
    <div
      // className="header"
      className="flex justify-between m-3 border-2 border-black p-2 shadow-lg"
    >
      <Link to="/">
        <h1 className="font-bold text-4xl">Food Villa</h1>
      </Link>
      <div
      //  className="nav-items"
      >
        <ul className="flex">
          <Link to="/">
            <li className="p-3 font-bold underline">Home</li>
          </Link>
          <Link to="/about">
            <li className="p-3 font-bold underline">About Us</li>
          </Link>
          <Link to="/contact">
            <li className="p-3 font-bold underline">Contact</li>
          </Link>
          <Link to="/cart">
            <li className="p-3 font-bold underline">Cart {item.length}</li>
          </Link>
          <Link to="/instamart">
            <li className="p-3 font-bold underline">Instamart</li>
          </Link>
          <h1 className="p-3 text-green-700">{user?.name}</h1>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
