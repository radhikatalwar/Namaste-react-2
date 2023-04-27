import { useEffect, useState, useContext } from "react";
import "../styles/body.css";
import { data } from "../data/data";
import { Link } from "react-router-dom";
import UserContext from "../utils/userContext";
import useOnline from "../hooks/useOnline";

// Optional Chaining -> ?.
const Card = ({ info }) => {
  return (
    <div
      // className="card"
      className="w-[200px] border-2 border-black my-2 p-2 m-3 shadow-lg hover:bg-pink-100"
    >
      <img src={info.img} alt="card" />
      <h1 className="font-bold xl">{info.name}</h1>
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
  const { user, setUser } = useContext(UserContext);

  console.log(useState()[1], typeof useState()[0]);
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

  const isOnline = useOnline();

  if (isOnline) {
    return <h1> 😅 Please Check Your Internet Connection</h1>;
  }

  // Early Return
  if (!list) return null;

  return (
    <>
      <div
        // className="search-container"
        className="p-2"
      >
        <input
          type="text"
          placeholder="Search"
          // className="search"
          className="border-2 border-black p-2 mr-2"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
        <button
          // className="search-btn"
          className=" bg-green-800 text-white p-2 rounded-xl font-bold"
          onClick={() => {
            filterData();
          }}
        >
          Search
        </button>
        <input
          type="text"
          className="border-2 border-black p-2 mx-2"
          value={user.name}
          onChange={(e) => {
            setUser({
              ...user,
              name: e.target.value,
            });
          }}
        />
        <input
          type="text"
          className="border-2 border-black p-2 mx-2"
          value={user.email}
          onChange={(e) => {
            setUser({
              ...user,
              email: e.target.value,
            });
          }}
        />
      </div>
      <div className="flex flex-wrap">
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
