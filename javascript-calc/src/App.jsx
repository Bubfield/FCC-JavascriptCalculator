import { useState } from "react";

function App() {
  const [innerInput, setInnerInput] = useState("0");
  const [outerInput, setOuterInput] = useState("0");
  const [firstNum, setFirstNum] = useState("");
  const [secondNum, setSecondNum] = useState("");
  const [operatorState, setOperatorState] = useState("");
  const [result, setResult] = useState(false);

  const allClear = () => {
    setInnerInput("0");
    setOuterInput("0");
    setFirstNum("");
    setSecondNum("");
    setOperatorState("");
    setResult(false);
  };

  const clearState = (num) => {
    setResult(false);
    setSecondNum(num);
  };

  const turnIntoNegativeNum = () => {
    const minusSignRegExp = /[-]/g;
    let operators = /[-x+/]/g;
    let minusIndex = outerInput.indexOf("-");
    let indexBeforeContent = outerInput.slice(minusIndex - 1, minusIndex);
    let operatorTest = operators.test(indexBeforeContent);
    let minusTest = minusSignRegExp.test(outerInput);

    if (minusTest && operatorTest) {
      setSecondNum((prevInput) => "-" + prevInput);
    }
  };

  const handleClick = (e) => {
    let number = e.target.textContent;

    turnIntoNegativeNum();

    if (!operatorState) {
      setFirstNum((prevInput) => prevInput + number);
    } else {
      if (secondNum === "0" && number === "0") {
        return;
      } else if (secondNum === "0" && number !== "0") {
        setInnerInput(number);
        setSecondNum(number);
      } else {
        setSecondNum((prevInput) => prevInput + number);
      }
    }

    if (result) {
      clearState(number);
    }
    setInnerInput(number);
    if (outerInput === "0") {
      setOuterInput(number);
    } else if (secondNum !== "0") {
      setOuterInput((prevInput) => prevInput + number);
    } else {
      setOuterInput(firstNum + operatorState + number);
    }
  };

  const handleDecimal = (e) => {
    const decimal = e.target.textContent;

    if (!operatorState) {
      if (/[.]/.test(firstNum)) {
        return;
      }
      setFirstNum((prevInput) => prevInput + decimal);
      setInnerInput(".");
      setOuterInput((prevInput) => prevInput + decimal);
    } else {
      if (/[.]/.test(secondNum)) {
        return;
      } else {
        setSecondNum((prevInput) => prevInput + decimal);
        setInnerInput(".");
        setOuterInput((prevInput) => prevInput + decimal);
      }
    }
  };

  const handleOperation = (e) => {
    let operator = e.target.textContent;
    let operators = /[x+/]/g;

    if (result) {
      setResult(false);
      setOuterInput(firstNum);
    } else if (secondNum) {
      handleEqualsOp();
    }
    let beforeMinusIndex = outerInput.indexOf(operator - 1);

    if (
      operator === "-" &&
      operators.test(outerInput.slice(beforeMinusIndex))
    ) {
      setInnerInput(operator);
      setOuterInput((prevInput) => prevInput + operator);
    } else if (operator === "-" && outerInput.slice(beforeMinusIndex) === "-") {
      setInnerInput(operator);
      setOuterInput((prevInput) => prevInput + operator);
      setSecondNum((prevInput) => prevInput + "-");
    } else {
      setOperatorState(operator);
      setInnerInput(operator);
      setOuterInput((prevInput) => prevInput + operator);
    }
  };

  const toFixedFunction = (num) => {
    return num % 1 !== 0 ? Number(num).toFixed(2) : num;
  };

  const add = (a, b) => {
    let sum = a + b;
    return toFixedFunction(sum);
  };

  const subtract = (a, b) => {
    let difference = a - b;
    return toFixedFunction(difference);
  };

  const multiply = (a, b) => {
    let product = a * b;
    return toFixedFunction(product);
  };

  const divide = (a, b) => {
    let quotient = a / b;
    return toFixedFunction(quotient);
  };

  const setStuffOp = (resul) => {
    setResult(true);
    setFirstNum(resul);
    setSecondNum("");
    setOperatorState("");
  };

  const setStuffEq = (resul) => {
    setResult(true);
    setFirstNum(resul);
    setSecondNum("");
    setInnerInput(resul);
    setOuterInput((prevInput) => prevInput + "=" + resul);
    setOperatorState("");
  };

  const handleEquals = () => {
    if (operatorState === "+") {
      let sum = add(Number(firstNum), Number(secondNum));
      setStuffEq(sum);
    } else if (operatorState === "-") {
      let difference = subtract(Number(firstNum), Number(secondNum));
      setStuffEq(difference);
    } else if (operatorState === "x") {
      let product = multiply(Number(firstNum), Number(secondNum));
      setStuffEq(product);
    } else if (operatorState === "/") {
      let quotient = divide(Number(firstNum), Number(secondNum));
      setStuffEq(quotient);
    } else {
      return;
    }
  };

  const handleEqualsOp = () => {
    if (operatorState === "+") {
      let sum = add(Number(firstNum), Number(secondNum));
      setStuffOp(sum);
    } else if (operatorState === "-") {
      let difference = subtract(Number(firstNum), Number(secondNum));
      setStuffOp(difference);
    } else if (operatorState === "x") {
      let product = multiply(Number(firstNum), Number(secondNum));
      setStuffOp(product);
    } else if (operatorState === "/") {
      let quotient = divide(Number(firstNum), Number(secondNum));
      setStuffOp(quotient);
    } else {
      return;
    }
  };

  return (
    <div className="App">
      <div className="main-footer-container">
        <div className="calculator-container">
          <div className="number-display">
            <div className="outer-input" id="display">
              {outerInput}
            </div>
            <div className="inner-input">{innerInput}</div>
          </div>
          <div className="first-row-btns">
            <button type="button" onClick={allClear} id="clear">
              AC
            </button>
            <button type="button" onClick={handleOperation} id="divide">
              /
            </button>
            <button type="button" onClick={handleOperation} id="multiply">
              x
            </button>
          </div>
          <div className="second-and-third-row-btns">
            <button type="button" id="seven" onClick={handleClick}>
              7
            </button>
            <button type="button" id="eight" onClick={handleClick}>
              8
            </button>
            <button type="button" id="nine" onClick={handleClick}>
              9
            </button>
            <button type="button" onClick={handleOperation} id="subtract">
              -
            </button>
            <button type="button" id="four" onClick={handleClick}>
              4
            </button>
            <button type="button" id="five" onClick={handleClick}>
              5
            </button>
            <button type="button" id="six" onClick={handleClick}>
              6
            </button>
            <button type="button" onClick={handleOperation} id="add">
              +
            </button>
          </div>
          <div className="fourth-and-fifth-row-btns">
            <button type="button" id="one" onClick={handleClick}>
              1
            </button>
            <button type="button" id="two" onClick={handleClick}>
              2
            </button>
            <button type="button" id="three" onClick={handleClick}>
              3
            </button>
            <button
              type="button"
              className="equal-button"
              id="equals"
              onClick={handleEquals}
            >
              =
            </button>
            <button
              type="button"
              className="zero-button"
              id="zero"
              onClick={handleClick}
            >
              0
            </button>
            <button type="button" onClick={handleDecimal} id="decimal">
              .
            </button>
          </div>
        </div>
        <footer>
          Designed and coded by{" "}
          <a
            href="https://www.freecodecamp.org/no-stack-dub-sack"
            target="_blank"
            rel="noreferrer"
          >
            Peter Weinberg
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
