import { useState } from "react";
export default function Form({ setTaskList }) {
  const [newTask, setNewTask] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newTask.length === 0) return;
    setTaskList((c) => [
      ...c,
      { id: crypto.randomUUID(), title: newTask, completed: false },
    ]);
    setNewTask("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="newTask">New task: </label>
      <input
        type="text"
        id="newTask"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
