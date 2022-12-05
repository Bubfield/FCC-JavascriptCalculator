import toFixedFunction from "./toFixedFunction";

const add = (a, b) => {
  let sum = String(a + b);
  return toFixedFunction(sum);
};

const subtract = (a, b) => {
  let difference = String(a - b);
  return toFixedFunction(difference);
};

const multiply = (a, b) => {
  let product = String(a * b);
  return toFixedFunction(product);
};

const divide = (a, b) => {
  let quotient = String(a / b);
  return toFixedFunction(quotient);
};

export { add, subtract, multiply, divide };
