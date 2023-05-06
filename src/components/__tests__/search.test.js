import { fireEvent, render, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import { data } from "../../data/data";
import store from "../../store/store";
import BodyComponent from "../body";

//Dummy Fetch
global.fetch = jest.fn(() => {
  Promise.resolve({
    json: () => {
      return Promise.resolve(data);
    }, // Giving mock data
  });
});

test("Search Results on Home Page", async () => {
  // Load Body
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <BodyComponent />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(body.getByTestId("search-btn"))); // It will wait for button to get loaded first

  // console.log(body);
  const bodyComp = body.getByTestId("body-container");
  expect(bodyComp.children.length).toBe(4);
});

test("Search for string(Burger) in input", async () => {
  // Load Body
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <BodyComponent />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(body.getByTestId("search-btn"))); // It will wait for button to get loaded first

  // console.log(body);
  const input = body.getByTestId("search-input");
  const searchBtn = body.getByTestId("search-input");

  fireEvent.change(input, {
    target: {
      value: "Burger",
    },
  });

  fireEvent.click(searchBtn);

  const resList = body.getByTestId("res-list");
  expect(resList.children.length).toBe(9);
});
