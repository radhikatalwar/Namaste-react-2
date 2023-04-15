import { useEffect, useState } from "react";
import "../styles/body.css";
import { data } from "../data/data";
import { Link } from "react-router-dom";

// Optional Chaining -> ?.
const Card = ({ info }) => {
  return (
    <div className="card">
      <img src={info.img} alt="card" />
      <h1>{info.name}</h1>
      <h2>{info.cusine.join(" , ")}</h2>
      <h4>{info.stars} stars</h4>
    </div>
  );
};

// No key < Index Key << Unique Key ( Best Practice )
const BodyComponent = () => {
  // It is local variable
  // const searchTxt = "";

  // It is a local state variable
  const [searchValue, setSearchValue] = useState(""); // To create State Variable
  const [list, setList] = useState(data);

  const filterData = () => {
    const filteredData = list.filter((item) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setList(filteredData);
  };

  useEffect(() => {
    getRestaurnts();
  }, []);

  async function getRestaurnts() {
    const data = await fetch(
      "API CALL"
      // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=7762448069999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    // Add data in state variable
  }

  // Early Return
  if (!list) return null;

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search"
          className="search"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            filterData();
          }}
        >
          Search
        </button>
      </div>
      <div className="body">
        {list.map((info, index) => {
          return (
            <Link to={`/restaurant/${index}`} key={info.stars}>
              <Card info={info} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default BodyComponent;
