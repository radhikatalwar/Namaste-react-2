import React, { useEffect, useState } from "react";

const Profile = (props) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(2);

  useEffect(() => {
    // API CALLS
    // console.log("useEffect, Component Did Mount");
  }, []);

  useEffect(() => {
    console.log("count change");
    const timer = setInterval(() => {
      console.log("INTERVAL");
    }, 1000);
    return () => {
      // Clean up function
      clearInterval(timer);
      console.log("Clean up function");
    };
  }, [count]);

  useEffect(() => {
    console.log("count2 change");
  }, [count2]);

  return (
    <div>
      <h1>Profile</h1>
      <h2>Name : {props.name}</h2>
      <h3>Count : {count}</h3>
      <h3>Count : {count2}</h3>
      <button
        onClick={() => {
          setCount(1);
          setCount2(3);
        }}
      >
        Set to 1 & 3
      </button>
    </div>
  );
};

export default Profile;
