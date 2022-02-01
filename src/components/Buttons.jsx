import { useState } from "react";
const Buttons = () => {
  const [countState, setCountState] = useState(0);
  //const [visible, setVisible] = useState(true);
  const operationHandler = (operation) => {
    if (operation === "increase") {
      setCountState((prev) => prev + 1);
    }

    if (operation === "set0") {
      setCountState(0);
    }
    if (operation === "decrease") {
      setCountState(countState - 1);
    }
  };

  return (
    <div className="btns">
      <div className="outputCount">Contador se encuentra en {countState}</div>
      <button
        disabled={!countState}
        className="countBtn"
        onClick={() => operationHandler("decrease")}
      >
        Substract
      </button>
      <button className="countBtn" onClick={() => operationHandler("set0")}>
        Reset
      </button>
      <button className="countBtn" onClick={() => operationHandler("increase")}>
        Add
      </button>
    </div>
  );
};

export default Buttons;
