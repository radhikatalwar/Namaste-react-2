import { useState } from "react";
import { Outlet } from "react-router-dom";
import FooterComponent from "./components/footer";
import HeaderComponent from "./components/header";
import UserContext from "./utils/userContext";

// JSX can only have one parent
// We have React.fragment to it's solution

const App = () => {
  const [user, setUser] = useState({
    name: "Radhika",
    email: "radhika@yopmail.com",
  });

  // We have wrapped it all around , as It is provided to all the components inside it,
  // it will overwrite the given initial value

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <HeaderComponent />
      <Outlet />
      <FooterComponent />
    </UserContext.Provider>
  );
};

export default App;
