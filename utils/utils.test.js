const expect = require("expect");
const utils = require("./utlis");

it("should add two numbers", () => {
  let res = utils.add(5, 22);
  expect(res).toBe(27);
});

it("should return square value", () => {
  let res = utils.square(5);
  if (res !== 25) {
    throw new Error(`Expected 25 but result is ${res}`);
  }
});

it("should have equal to number", () => {
  expect(27).toBe(27);
  expect(typeof 27).toBe("number");
});

it("should have not equal to number", () => {
  expect(27).not.toBe(57);
});

it("should have equal to object", () => {
  expect({ name: "Yousuf" }).toEqual({ name: "Yousuf" });
});

it("should have not equal to object", () => {
  expect({ name: "Yosuf" }).not.toEqual({ name: "Yousuf" });
});

it("should have include array value", () => {
  expect([2, 4, 6]).toEqual(expect.arrayContaining([4]));
});

it("should have exculde array value", () => {
  expect([2, 4, 6]).toEqual(expect.not.arrayContaining([7]));
});

it("should have include object value", () => {
  expect({
    name: "Yousuf",
    age: 24,
    city: "karachi",
    country: "Pakistan"
  }).toMatchObject({
    age: 24,
    country: "Pakistan"
  });
});

it("should have exclude object value", () => {
  expect({
    name: "Yousuf",
    age: 24,
    city: "karachi"
  }).not.toMatchObject({
    age: 21,
    country: "Pakistan"
  });
});
