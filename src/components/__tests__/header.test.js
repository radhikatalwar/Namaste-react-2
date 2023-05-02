import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../store/store";
import HeaderComponent from "../header";
import { StaticRouter } from "react-router-dom/server";

test("Heading Should load on Rendering header", () => {
  // Load header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <HeaderComponent />
      </Provider>
    </StaticRouter>
  );
  // Check heading

  const heading = header.getByTestId("heading");
  expect(heading.innerHTML).toBe("Food Villa");
});

test("Online status should be green", () => {
  // Load header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <HeaderComponent />
      </Provider>
    </StaticRouter>
  );
  // Check heading

  const onlineStatus = header.getByTestId("online-status");
  expect(onlineStatus.innerHTML).toBe("✅");
});

test("Cart Items should be 0", () => {
  // Load header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <HeaderComponent />
      </Provider>
    </StaticRouter>
  );
  // Check heading

  const cart = header.getByTestId("cart");
  expect(cart.innerHTML).toBe("Cart 0");
});
