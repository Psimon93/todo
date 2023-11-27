import { useState } from "react";
import RenderAll from "./RenderAll";
import RenderActive from "./RenderActive";
import RenderCompleted from "./RenderCompleted";

export default function RenderLogic({ setTaskList, taskList }) {
  const [button, setButton] = useState("All");
  return (
    <div>
      <button onClick={() => setButton("All")}>All</button>
      <button onClick={() => setButton("Active")}>Active</button>
      <button onClick={() => setButton("Completed")}>Completed</button>

      {button === "All" && (
        <RenderAll taskList={taskList} setTaskList={setTaskList} />
      )}
      {button === "Active" && (
        <RenderActive taskList={taskList} setTaskList={setTaskList} />
      )}
      {button === "Completed" && (
        <RenderCompleted taskList={taskList} setTaskList={setTaskList} />
      )}
    </div>
  );
}
