import Task from "./Task";
import { useContext } from "react";
import { ListContext } from "../App";

export default function RenderAll() {
  const { taskList } = useContext(ListContext);

  return (
    <ul>
      {taskList.map((i) => (
        <Task {...i} key={i.id} />
      ))}
    </ul>
  );
}
