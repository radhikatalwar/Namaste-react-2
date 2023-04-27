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
        <h1 class="font-bold text-xl">Hello ,RADHIKA TALWAR</h1>
        <h2 class="font-bold text-2xl">Hello ,RADHIKA TALWAR</h2>
        <h2 class="font-bold text-3xl text-red-900">Hello ,RADHIKA TALWAR</h2>
        <>{console.log("About / render")}</>
        <h1>About Us Page</h1>
        <Outlet />
        <Profile name="Component" />
        <ProfileClass name="First Class" />
        {/* <ProfileClass name="Second Class" /> */}
      </div>
    );
  }
}

export default About;
export { AboutComponent };
