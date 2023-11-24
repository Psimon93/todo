import { useState } from "react";
import RenderAll from "./RenderAll";
import RenderActive from "./RenderActive";
import RenderCompleted from "./RenderCompleted";

export default function RenderLogic({ setTaskList, taskList }) {
  const [buttonX, setButtonX] = useState("All");
  return (
    <div>
      <button onClick={() => setButtonX("All")}>All</button>
      <button onClick={() => setButtonX("Active")}>Active</button>
      <button onClick={() => setButtonX("Completed")}>Completed</button>

      {buttonX === "All" && (
        <RenderAll taskList={taskList} setTaskList={setTaskList} />
      )}
      {buttonX === "Active" && (
        <RenderActive taskList={taskList} setTaskList={setTaskList} />
      )}
      {buttonX === "Completed" && (
        <RenderCompleted taskList={taskList} setTaskList={setTaskList} />
      )}
    </div>
  );
}
