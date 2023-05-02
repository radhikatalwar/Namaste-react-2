import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageNotFound from "./components/pageNotFound";
import ContactComponent from "./components/contact";
import BodyComponent from "./components/body";
import RestaurantDetail from "./components/restaurantsDetail";
import Profile from "./components/profile";
import { Provider } from "react-redux";
import store from "./store/store";
import App from "./App";

const Instamart = lazy(() => import("./components/instaMart"));
const About = lazy(() => import("./components/about"));
const Cart = lazy(() => import("./components/cart"));

// Upon Demand Loading -> upon render -> react suspend loading
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <Provider store={store}>
        <App />
      </Provider>
    ),
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
      { path: "/restaurant/:id", element: <RestaurantDetail /> },
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
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
