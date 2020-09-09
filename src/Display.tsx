import React from "react";
interface props {
  message: number;
}

const Display: React.FC<props> = (props) => {
  return <div>{props.message}</div>;
};

export default Display;
