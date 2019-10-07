const utils = require("./utlis");

it("should add two numbers", () => {
  let res = utils.add(5, 22);
  if (res !== 27) {
    throw new Error(`Expected 27 but result is ${res}`);
  }
});

it("should return square value", () => {
  let res = utils.square(5);
  if (res !== 25) {
    throw new Error(`Expected 25 but result is ${res}`);
  }
});
