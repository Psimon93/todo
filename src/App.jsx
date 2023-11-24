import "./App.css";
import { useState, useEffect } from "react";
import Form from "./Components/Form";
import RenderAll from "./Components/RenderAll";
import RenderActive from "./Components/RenderActive";
import RenderCompleted from "./Components/RenderCompleted";
import DeleteAllButton from "./Components/DeleteAllButton";

function App() {
  const [taskList, setTaskList] = useState(() => {
    const localValue = localStorage.getItem("Tasks");
    if (localValue == null) return [];
    return JSON.parse(localValue);
  });
  const [button, setButton] = useState("All");

  useEffect(() => {
    localStorage.setItem("Tasks", JSON.stringify(taskList));
  }, [taskList]);

  return (
    <>
      <h1>Todo List</h1>
      <button onClick={() => setButton("All")}>All</button>
      <button onClick={() => setButton("Active")}>Active</button>
      <button onClick={() => setButton("Completed")}>Completed</button>
      <Form setTaskList={setTaskList} />
      {taskList.length == 0 && <h2>No tasks !</h2>}
      {button === "All" && (
        <RenderAll taskList={taskList} setTaskList={setTaskList} />
      )}
      {button === "Active" && (
        <RenderActive taskList={taskList} setTaskList={setTaskList} />
      )}
      {button === "Completed" && (
        <RenderCompleted taskList={taskList} setTaskList={setTaskList} />
      )}
      <DeleteAllButton setTaskList={setTaskList} />
    </>
  );
}

export default App;
