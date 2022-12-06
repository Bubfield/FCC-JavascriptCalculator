import React from "react";

const SecondThirdRowBtns = ({ props }) => {
  const { handleClick, handleOperation } = props;
  return (
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
  );
};

export default SecondThirdRowBtns;
