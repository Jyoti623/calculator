import React, { useState } from "react";
import "./App.css";

function Calculator() {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Error");
    }
  };
  const backspace = () => {
    setResult(result.slice(0,-1));
  };
  const clear = () => {
    setResult("");
  };

  return (
    <div className="calculator">
      <form>
        <input type="text" value={result} readOnly />
      </form>
      <div className="keypad">
        
        <button className="highlight" onClick={backspace} id="backspace">
          Del
        </button>
        <button className="highlight" onClick={clear} id="clear">
          Clear
        </button>
        <button className="highlight" onClick={calculate} id="equals">
          =
        </button>
        <button name="7" onClick={handleClick}>
          7
        </button>
        <button name="8" onClick={handleClick}>
          8
        </button>
        <button name="9" onClick={handleClick}>
          9
        </button>
        
        <button name="(" onClick={handleClick}>
          (
        </button>
        <button name=")" onClick={handleClick}>
          )
        </button>
        <button name="4" onClick={handleClick}>
          4
        </button>
        <button name="5" onClick={handleClick}>
          5
        </button>
        <button name="6" onClick={handleClick}>
          6
        </button>
        <button name="*" onClick={handleClick}>
          *
        </button>
        <button name="/" onClick={handleClick}>
          /
        </button>
        <button name="1" onClick={handleClick}>
          1
        </button>
        <button name="2" onClick={handleClick}>
          2
        </button>
        <button name="3" onClick={handleClick}>
          3
        </button>
        <button name="+" onClick={handleClick}>
          +
        </button>
        <button name="-" onClick={handleClick}>
          -
        </button>     
        <button name="00" onClick={handleClick}>
          00
        </button>
        <button name="0" onClick={handleClick}>
          0
        </button><button name="." onClick={handleClick}>
          .
        </button>
        <button name="%" onClick={handleClick}>
          %
        </button>
        <button name="3.1415926535897" onClick={handleClick}>
          pi
        </button>
      </div>
    </div>
  );
}

export default Calculator;
