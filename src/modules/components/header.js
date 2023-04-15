import { Link } from "react-router-dom";
import "../styles/header.css";

const HeaderComponent = () => {
  return (
    <div className="header">
      <Link to="/">
        <h1>Food Villa</h1>
      </Link>
      <div className="nav-items">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About Us</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
          <Link to="/cart">
            <li>Cart</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
