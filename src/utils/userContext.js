import { createContext } from "react";

const UserContext = createContext({
  user: { name: "Radhika Talwar", email: "radhika@yopmail.com" },
});

UserContext.displayName = "UserContext";

export default UserContext;
