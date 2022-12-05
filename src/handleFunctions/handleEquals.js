import { add, subtract, multiply, divide } from "./mathOperations";

const handleEquals = (
  firstN,
  secondN,
  opSt,
  setResult,
  setFirstNum,
  setSecondNum,
  setOperatorState,
  setInnerInput,
  setOuterInput
) => {
  let numFirstNum = Number(firstN);
  let numSecondNum = Number(secondN);

  const resultAndOperation = (oper) => {
    return oper(numFirstNum, numSecondNum);
  };

  const setStuffShort = (oper) => {
    let result = resultAndOperation(oper);
    setResult(true);
    setFirstNum(result);
    setSecondNum("");
    setOperatorState("");
    setInnerInput(result);
    setOuterInput((prevInput) => prevInput + "=" + result);
  };

  if (opSt === "+") {
    setStuffShort(add);
  } else if (opSt === "-") {
    setStuffShort(subtract);
  } else if (opSt === "x") {
    setStuffShort(multiply);
  } else if (opSt === "/") {
    setStuffShort(divide);
  } else {
    return;
  }
};

const handleEqualsOP = (
  firstNum,
  secondNum,
  opSt,
  setResult,
  setFirstNum,
  setSecondNum,
  setOperatorState
) => {
  let numFirstNum = Number(firstNum);
  let numSecondNum = Number(secondNum);

  const resultAndOperation = (oper) => {
    return oper(numFirstNum, numSecondNum);
  };

  const setStuffShort = (oper) => {
    let result = resultAndOperation(oper);
    setResult(true);
    setFirstNum(result);
    setSecondNum("");
    setOperatorState("");
  };

  if (opSt === "+") {
    setStuffShort(add);
  } else if (opSt === "-") {
    setStuffShort(subtract);
  } else if (opSt === "x") {
    setStuffShort(multiply);
  } else if (opSt === "/") {
    setStuffShort(divide);
  } else {
    return;
  }
};

export { handleEquals, handleEqualsOP };
