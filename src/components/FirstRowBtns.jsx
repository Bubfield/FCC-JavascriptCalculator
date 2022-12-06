import React from "react";
import { allClear } from "../handleFunctions/clearFunctions";

const FirstRowBtns = ({ props }) => {
  const {
    setFirstNum,
    setSecondNum,
    setInnerInput,
    setOuterInput,
    setOperatorState,
    setResult,
    handleOperation,
  } = props;
  return (
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
  );
};

export default FirstRowBtns;
