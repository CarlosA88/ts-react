import React from "react";
interface INum {
  message: number;
}

const Display = (props: INum) => {
  return <div>{props.message}</div>;
};

export default Display;
