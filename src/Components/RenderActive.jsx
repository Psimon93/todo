import Task from "./Task";
import { useContext } from "react";
import { ListContext } from "../App";

export default function RenderActive() {
  const { taskList } = useContext(ListContext);
  const activeList = taskList.filter((i) => i.completed == false);

  return (
    <ul>
      {activeList.map((i) => (
        <Task {...i} key={i.id} />
      ))}
    </ul>
  );
}
