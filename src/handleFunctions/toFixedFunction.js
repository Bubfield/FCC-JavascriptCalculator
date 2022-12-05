const toFixedFunction = (num) => {
  let numberVersionNum = Number(num);
  let stringVersionNum = numberVersionNum.toFixed(4);
  let indexOfDecimal = String(num).indexOf(".");

  const strSlice = (numOne, numTwo) => {
    return (
      stringVersionNum.slice(
        indexOfDecimal + numOne,
        indexOfDecimal + numTwo
      ) === "0"
    );
  };

  const nVMtoFixed = (num) => {
    return numberVersionNum.toFixed(num);
  };

  if (indexOfDecimal === -1) {
    return num;
  } else {
    if (strSlice(1, 2)) {
      return nVMtoFixed(0);
    } else if (strSlice(2, 3)) {
      return nVMtoFixed(1);
    } else if (strSlice(3, 4)) {
      return nVMtoFixed(2);
    } else {
      return nVMtoFixed(4);
    }
  }
};

export default toFixedFunction;
