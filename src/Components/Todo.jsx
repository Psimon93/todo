import RenderAll from "./RenderAll";
import { useState } from "react";

export default function Todo() {
  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function changeValue(e) {
    setInputValue(e.target.value);
  }
  function addTask() {
    setList((c) => [...c, { task: inputValue }]);
  }

  return (
    <div>
      <h1>My tasks</h1>
      <button>All</button>
      <button>Active</button>
      <button>Completed</button>
      <br />
      <input
        type="text"
        placeholder="Add new task"
        value={inputValue}
        onChange={changeValue}
      />
      <button onClick={addTask}>Add</button>
      <ul>
        <RenderAll tasks={list} />
      </ul>
    </div>
  );
}
