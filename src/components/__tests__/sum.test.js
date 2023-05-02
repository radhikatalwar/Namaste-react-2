import { sum } from "../sum";

test("Check your sum", () => {
  expect(sum(2, 3)).toBe(5);
  expect(sum(2, -5)).toBe(-3);
  expect(sum(4, 8)).not.toBe(13);
  expect(sum()).toBe("Please Check");
});
