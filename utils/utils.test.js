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
  expect(typeof 27).toBe('number');
});

it("should have not equal to number", () => {
    expect(27).not.toBe(57);
  });

it("should have equal to objec", () => {
    expect({name:'Yosuf'}).toEqual({name:'Yosuf'});
  });