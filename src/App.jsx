import "./App.css";
import { useState } from "react";

function App() {
  const [taskList, setTaskList] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setTaskList((c) => [
      ...c,
      { id: crypto.randomUUID(), title: newTask, completed: false },
    ]);
    setNewTask("");
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
      <form onSubmit={handleSubmit}>
        <label htmlFor="newTask">New task</label>
        <input
          type="text"
          id="newTask"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button>Add</button>
      </form>
      {taskList.length == 0 && <h2>No tasks !</h2>}
      {/* ////// */}
      <ul>
        {taskList.map((i) => (
          <li key={i.id}>
            <label>
              <input
                type="checkbox"
                checked={i.completed}
                onChange={(e) => toggleBox(i.id, e.target.checked)}
              />
              {i.title}
            </label>
            <button onClick={() => deleteTask(i.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
