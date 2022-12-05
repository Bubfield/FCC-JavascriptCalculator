const allClear = (setInner, setOuter, setFirstN, setSecN, setOpSt, setResu) => {
  setInner("0");
  setOuter("0");
  setFirstN("");
  setSecN("");
  setOpSt("");
  setResu(false);
};

const clearState = (num, setResu, setSecN) => {
  setResu(false);
  setSecN(num);
};

const clearStateTwo = (num, setResu, setFirstN, setInner, setOuter) => {
  setResu(false);
  setFirstN(num);
  setInner(num);
  setOuter("");
};

export { allClear, clearState, clearStateTwo };
