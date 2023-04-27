import React from "react";
import { useRouteError } from "react-router-dom";

const PageNotFound = () => {
  const { status, statusText } = useRouteError();
  return (
    <div>
      <h1>OOPS! Page Not Found !</h1>
      <h2>{status + " : " + statusText}</h2>
    </div>
  );
};

export default PageNotFound;
