import "./App.css";
import { useState } from "react";
import Form from "./Components/Form";
import RenderAll from "./Components/RenderAll";
import RenderActive from "./Components/RenderActive";
import RenderCompleted from "./Components/RenderCompleted";

function App() {
  const [taskList, setTaskList] = useState([]);
  const [button, setButton] = useState("All");

  function submitTask(value) {
    setTaskList((c) => [
      ...c,
      { id: crypto.randomUUID(), title: value, completed: false },
    ]);
  }

  function toggleBox(id, checked) {
    setTaskList((c) => {
      return c.map((i) => {
        if (i.id == id) {
          return { ...i, completed: checked };
        }
        return i;
      });
    });
  }

  function deleteTask(id) {
    setTaskList((c) => {
      return c.filter((i) => i.id !== id);
    });
  }

  return (
    <>
      <h1>Todo List</h1>
      <button onClick={() => setButton("All")}>All</button>
      <button onClick={() => setButton("Active")}>Active</button>
      <button onClick={() => setButton("Completed")}>Completed</button>
      <Form submitTask={submitTask} />
      {taskList.length == 0 && <h2>No tasks !</h2>}
      {button === "All" && (
        <RenderAll
          taskList={taskList}
          toggleBox={toggleBox}
          deleteTask={deleteTask}
        />
      )}
      {button === "Active" && (
        <RenderActive
          taskList={taskList}
          toggleBox={toggleBox}
          deleteTask={deleteTask}
        />
      )}
      {button === "Completed" && (
        <RenderCompleted
          taskList={taskList}
          toggleBox={toggleBox}
          deleteTask={deleteTask}
        />
      )}
    </>
  );
}

export default App;
