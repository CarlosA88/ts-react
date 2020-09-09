import React, { useState } from "react";

interface props {
  handleSubmit: () => void;
  counter: number;
}
const Counter: React.FC<props> = (props) => {
    
  return (
    <div>
      <button type="submit" onClick={props.handleSubmit}>
        {props.counter}
      </button>
    </div>
  );
};

export default Counter;
