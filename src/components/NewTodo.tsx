import React, { useRef } from "react";

interface props {
  addTodo: (text: string) => void;
}

const NewTodo: React.FC<props> = (props) => {
  const refInputText = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const val = refInputText.current!.value;
    props.addTodo(val);
  };
  return (
    <div>
      <form action="" onClick={handleSubmit}>
        <div>
          <input type="text" id="todo-text" ref={refInputText} />
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default NewTodo;
