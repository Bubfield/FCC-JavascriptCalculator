import React from "react";
import handleDecimal from "../handleFunctions/handleDecimal";
import { handleEquals } from "../handleFunctions/handleEquals";

const FourthFifthRowBtns = ({ props }) => {
  const {
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
  } = props;
  return (
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
  );
};

export default FourthFifthRowBtns;
