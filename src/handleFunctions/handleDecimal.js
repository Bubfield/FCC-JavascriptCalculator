const handleDecimal = (
  e,
  setinner,
  setouter,
  opState,
  firstN,
  secondN,
  setFirstN,
  setSecN,
  outerInput,
  setResult
) => {
  const decimal = e.target.textContent;

  const testForDecimal = (num) => {
    return /[.]/.test(num);
  };

  const setNumFunc = (setNum) => {
    setNum((prevInput) => prevInput + decimal);
    setinner(".");
    setouter((prevInput) => prevInput + decimal);
  };

  const numTest = (num, setNum) => {
    if (testForDecimal(num)) {
      return;
    } else {
      setNumFunc(setNum);
    }
  };

  if (outerInput)
    if (!opState) {
      if (outerInput.indexOf("=") !== -1) {
        setFirstN("0.");
        setouter("0.");
        setinner("0.");
        setResult(false);
      } else {
        numTest(firstN, setFirstN);
      }
    } else {
      numTest(secondN, setSecN);
    }
};

export default handleDecimal;
