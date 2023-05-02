import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../store/store";
import { StaticRouter } from "react-router-dom/server";
import { Card } from "../body";

const mockData = {
  img: "https://localhost/dummy.png",
  name: "Burger king",
  cusine: ["Burger", "American"],
  stars: "4.1",
};

test("Card Image Rendering", () => {
  // Load cart
  const cart = render(
    <StaticRouter>
      <Provider store={store}>
        <Card info={mockData} />
      </Provider>
    </StaticRouter>
  );
  // Check image

  const image = cart.getByTestId("image");
  expect(image.src).toBe("https://localhost/dummy.png");
});
