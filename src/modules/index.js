import { Outlet } from "react-router-dom";
import FooterComponent from "./components/footer";
import HeaderComponent from "./components/header";

// JSX can only have one parent
// We have React.fragment to it's solution

const OurApp = () => {
  return (
    <>
      <HeaderComponent />
      <Outlet />
      <FooterComponent />
    </>
  );
};

export default OurApp;
