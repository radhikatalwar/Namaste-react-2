import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageNotFound from "./modules/components/pageNotFound";
import ContactComponent from "./modules/components/contact";
import OurApp from "./modules";
import BodyComponent from "./modules/components/body";
import Cart from "./modules/components/cart";
import RestaurantMenu from "./modules/components/restaurantsDetail";
import Profile from "./modules/components/profile";

const Instamart = lazy(() => import("./modules/components/instaMart"));
const About = lazy(() => import("./modules/components/about"));

// Upon Demand Loading -> upon render -> react suspend loading
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <OurApp />,
    errorElement: <PageNotFound />,
    children: [
      { path: "/", element: <BodyComponent /> },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading..</h1>}>
            <About />
          </Suspense>
        ),
        children: [{ path: "profile", element: <Profile /> }], // parentPath/{path}
      },
      { path: "/contact", element: <ContactComponent /> },
      { path: "/cart", element: <Cart /> },
      { path: "/restaurant/:id", element: <RestaurantMenu /> },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<h1>Loading..</h1>}>
            <Instamart />
          </Suspense>
        ),
      },
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
