import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./modules/components/about";
import PageNotFound from "./modules/components/pageNotFound";
import ContactComponent from "./modules/components/contact";
import OurApp from "./modules";
import BodyComponent from "./modules/components/body";
import Cart from "./modules/components/cart";
import RestaurantMenu from "./modules/components/restaurantsDetail";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <OurApp />,
    errorElement: <PageNotFound />,
    children: [
      { path: "/", element: <BodyComponent /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <ContactComponent /> },
      { path: "/cart", element: <Cart /> },
      { path: "/restaurant/:id", element: <RestaurantMenu /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
