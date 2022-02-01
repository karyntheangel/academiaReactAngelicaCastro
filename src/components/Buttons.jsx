import { useState } from "react";
const Buttons = () => {
  //const [countState, setCountState] = useState();
  const [state, setState] = useState({
    count:0,
    disabled: true
  });
  const operationHandler = (operation) => {
    operation === 'increase' && setState(prev =>({count:prev.count +1, disabled:false}));
    operation === 'set0' && setState({count:0, disabled: true});
    operation === 'decrease' && setState(prev => ({count:prev.count -1, disabled: !(prev.count-1) }));
  };

  return (
    <div className="btns">
      <div className="outputCount">Contador se encuentra en {state.count}</div>
      <button
        disabled={state.disabled}
        className="countBtn"
        onClick={() => operationHandler("decrease")}
      >
        Decrease
      </button>
      <button className="countBtn" onClick={() => operationHandler("set0")}>
        Reset
      </button>
      <button className="countBtn" onClick={() => operationHandler("increase")}>
        Increase
      </button>
    </div>
  );
};

export default Buttons;
