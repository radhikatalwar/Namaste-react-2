import React from "react";
import { Outlet } from "react-router-dom";
import Profile from "./profile";
import ProfileClass from "./profileClass";

const AboutComponent = () => {
  return (
    <div>
      <h1>About Us Page</h1>
      <Outlet />
      <Profile name="Component" />
      <ProfileClass name="Class" />
    </div>
  );
};

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("About / Constructor");
  }

  componentDidMount() {
    console.log("About / Component Did Mount");
  }

  render() {
    return (
      <div>
        <>{console.log("About / render")}</>
        <h1>About Us Page</h1>
        <Outlet />
        <Profile name="Component" />
        {/* <ProfileClass name="First Class" /> */}
        {/* <ProfileClass name="Second Class" /> */}
      </div>
    );
  }
}

export default About;
export { AboutComponent };
