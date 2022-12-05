import { useState } from "react";
import handleDecimal from "./handleFunctions/handleDecimal";
import {
  allClear,
  clearState,
  clearStateTwo,
} from "./handleFunctions/clearFunctions";
import { handleEquals, handleEqualsOP } from "./handleFunctions/handleEquals";

function App() {
  const [innerInput, setInnerInput] = useState("0");
  const [outerInput, setOuterInput] = useState("0");
  const [firstNum, setFirstNum] = useState("");
  const [secondNum, setSecondNum] = useState("");
  const [operatorState, setOperatorState] = useState("");
  const [result, setResult] = useState(false);

  const handleClick = (e) => {
    let number = e.target.textContent;
    setInnerInput(number);

    if (!operatorState) {
      if (firstNum === "0" && number === "0") {
        return;
      } else {
        setFirstNum((prevInput) => prevInput + number);
      }
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

    if (result && !operatorState) {
      clearStateTwo(
        number,
        setResult,
        setFirstNum,
        setInnerInput,
        setOuterInput
      );
    } else if (result && operatorState && outerInput.indexOf("=") !== -1) {
      clearState(number, setResult, setSecondNum);
    }

    if (outerInput === "0") {
      setOuterInput(number);
    } else if (secondNum !== "0") {
      setOuterInput((prevInput) => prevInput + number);
    } else {
      setOuterInput(firstNum + operatorState + number);
    }
  };

  const handleOperation = (e) => {
    let operator = e.target.textContent;
    let operators = /[x+/]/g;

    const setInOu = () => {
      setInnerInput(operator);
      setOuterInput((prevInput) => prevInput + operator);
    };

    const setInOuFirst = () => {
      setInnerInput(operator);
      setOuterInput(operator);
      setFirstNum(operator);
    };

    const setInOuSecnd = () => {
      setInnerInput(operator);
      setOuterInput((prevInput) => prevInput + operator);
      setSecondNum((prevInput) => prevInput + operator);
    };

    if (result && outerInput.indexOf("=") !== -1) {
      setResult(false);
      setOuterInput(firstNum);
    } else if (secondNum) {
      handleEqualsOP(
        firstNum,
        secondNum,
        operatorState,
        setResult,
        setFirstNum,
        setSecondNum,
        setOperatorState
      );
    }
    let beforeMinusIndex = outerInput.indexOf(operator - 1);

    if (
      operator === "-" &&
      operators.test(outerInput.slice(beforeMinusIndex))
    ) {
      setInOuSecnd();
    } else if (operator === "-" && outerInput.slice(beforeMinusIndex) === "-") {
      setInOuSecnd();
    } else if (innerInput === "0" && outerInput === "0" && operator === "-") {
      setInOuFirst();
    } else if (innerInput === "0" && outerInput === "0" && operator !== "-") {
      return;
    } else {
      setOperatorState(operator);
      setInOu();
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
            <button
              type="button"
              onClick={() =>
                allClear(
                  setInnerInput,
                  setOuterInput,
                  setFirstNum,
                  setSecondNum,
                  setOperatorState,
                  setResult
                )
              }
              id="clear"
            >
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
              onClick={() =>
                handleEquals(
                  firstNum,
                  secondNum,
                  operatorState,
                  setResult,
                  setFirstNum,
                  setSecondNum,
                  setOperatorState,
                  setInnerInput,
                  setOuterInput
                )
              }
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
            <button
              type="button"
              onClick={(e) =>
                handleDecimal(
                  e,
                  setInnerInput,
                  setOuterInput,
                  operatorState,
                  firstNum,
                  secondNum,
                  setFirstNum,
                  setSecondNum,
                  outerInput,
                  setResult
                )
              }
              id="decimal"
            >
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
