import { useState } from "react";
import { clearState, clearStateTwo } from "./handleFunctions/clearFunctions";
import { handleEqualsOP } from "./handleFunctions/handleEquals";
import NumberDisplay from "./components/NumberDisplay";
import FirstRowBtns from "./components/FirstRowBtns";
import Footer from "./components/Footer";
import SecondThirdRowBtns from "./components/SecondThirdRowBtns";
import FourthFifthRowBtns from "./components/FourthFifthRowBtns";

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
      console.log("1");
      setResult(false);
      setOuterInput(firstNum);
    } else if (secondNum) {
      console.log("2");
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
      console.log("3");
      setInOuSecnd();
    } else if (operator === "-" && outerInput.slice(beforeMinusIndex) === "-") {
      console.log("4");
      setInOuSecnd();
    } else if (innerInput === "0" && outerInput === "0" && operator === "-") {
      console.log("5");
      setInOuFirst();
    } else if (innerInput === "0" && outerInput === "0" && operator !== "-") {
      console.log("6");
      return;
    } else if (operators.test(outerInput.slice(-1))) {
      console.log("7");
      setInnerInput(operator);
      setOuterInput(outerInput.slice(0, -1) + operator);
      setOperatorState(operator);
    } else if (
      outerInput.slice(-1) === "-" &&
      operator !== "-" &&
      !operators.test(outerInput.slice(-2))
    ) {
      console.log("8");
      setInnerInput(operator);
      setOuterInput(outerInput.slice(0, -1) + operator);
      setOperatorState(operator);
    } else if (
      outerInput.slice(-1) === "-" &&
      operator !== "-" &&
      operators.test(outerInput.slice(-2))
    ) {
      console.log("9");
    } else {
      console.log("10");
      setOperatorState(operator);
      setInOu();
    }
  };

  return (
    <div className="App">
      <div className="main-footer-container">
        <div className="calculator-container">
          <NumberDisplay outerInput={outerInput} innerInput={innerInput} />
          <FirstRowBtns
            props={{
              setFirstNum,
              setInnerInput,
              setOuterInput,
              setSecondNum,
              setOperatorState,
              setResult,
              handleOperation,
            }}
          />
          <SecondThirdRowBtns props={{ handleClick, handleOperation }} />
          <FourthFifthRowBtns
            props={{
              handleClick,
              firstNum,
              secondNum,
              operatorState,
              setResult,
              setFirstNum,
              setSecondNum,
              setInnerInput,
              setOuterInput,
              setOperatorState,
              outerInput,
            }}
          />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
