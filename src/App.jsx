import "./App.css";
import { createContext, useState, useEffect } from "react";
import { TitleClass } from "./Components/TitleClass";
import Form from "./Components/Form";
import DeleteAllButton from "./Components/DeleteAllButton";
import RenderLogic from "./Components/RenderLogic";
import "bootstrap/dist/css/bootstrap.min.css";

export const ListContext = createContext();

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
    <ListContext.Provider value={{ taskList, setTaskList }}>
      <TitleClass title="Task List" />
      <Form />
      <RenderLogic />
      {taskList.length == 0 && <h2>No tasks !</h2>}
      <DeleteAllButton />
    </ListContext.Provider>
  );
}

export default App;
