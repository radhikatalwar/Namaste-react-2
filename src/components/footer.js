import { useContext } from "react";
import "../styles/footer.css";
import UserContext from "../utils/userContext";

const FooterComponent = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h1 className="p-1 mx-1 text-center">
        This Website is created by {user.name} - ({user.email})
      </h1>
    </div>
  );
};

export default FooterComponent;
