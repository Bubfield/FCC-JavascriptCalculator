const setStuffOp = (resul, setResul, setFirstN, setSecondN, setOpSt) => {
  setResul(true);
  setFirstN(resul);
  setSecondN("");
  setOpSt("");
};

const setStuffEq = (resul, setInner, setOuter) => {
  setStuffOp(resul);
  setInner(resul);
  setOuter((prevInput) => prevInput + "=" + resul);
};

export { setStuffOp, setStuffEq };
