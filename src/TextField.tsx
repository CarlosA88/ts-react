import React, { useState } from "react";
import messageHoc from "./Hoc";

interface IUserMessage {
  name: string;
  message: string;
}

const TextField = (props: IUserMessage): any => {
  return (
    <div>
      {props.name},{props.message}
    </div>
  );
};

export default messageHoc(TextField);
