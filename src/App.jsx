import "./App.css";
import { useState, useEffect } from "react";
import { TitleClass } from "./Components/TitleClass";
import Form from "./Components/Form";
import DeleteAllButton from "./Components/DeleteAllButton";
import RenderLogic from "./Components/RenderLogic";

function App() {
  const [taskList, setTaskList] = useState(() => {
    const localValue = localStorage.getItem("Tasks");
    if (localValue == null) return [];
    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("Tasks", JSON.stringify(taskList));
  }, [taskList]);

  return (
    <>
      <TitleClass title="Task List" />
      <Form setTaskList={setTaskList} />
      <RenderLogic taskList={taskList} setTaskList={setTaskList} />
      {taskList.length == 0 && <h2>No tasks !</h2>}
      <DeleteAllButton setTaskList={setTaskList} />
    </>
  );
}

export default App;
