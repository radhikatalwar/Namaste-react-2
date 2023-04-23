import { useEffect, useState } from "react";

const useOnline = () => {
  const [isOnline, setIsOnline] = useState();

  const handleOnline = () => {
    setIsOnline(true);
  };

  const handleOffline = () => {
    setIsOnline(true);
  };

  useEffect(() => {
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      // There might be more than one eventlistener on same event so to remove
      // the specific one, we need to pass the same function
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return isOnline; // true or false
};

export default useOnline;
