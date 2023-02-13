const { Add ,Subtract, Multiply, Divide } = require("./basicmath");

test("should test add", () => {
  expect((4+4)).toBe(8);
});

test("should test subtract", () => {
  expect((6-2)).toBe(4);
});

test("should test multiply", () => {
  expect((4 * 4)).toBe(16);
});

test("should test divide", () => {
  expect((6 / 3)).toBe(2);
});
