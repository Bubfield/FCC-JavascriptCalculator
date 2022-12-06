import React from "react";

const NumberDisplay = ({ outerInput, innerInput }) => {
  return (
    <div className="number-display">
      <div className="outer-input" id="display">
        {outerInput}
      </div>
      <div className="inner-input">{innerInput}</div>
    </div>
  );
};

export default NumberDisplay;
