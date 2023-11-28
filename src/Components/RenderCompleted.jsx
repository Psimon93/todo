import Task from "./Task";
import { useContext } from "react";
import { ListContext } from "../App";

export default function RenderCompleted() {
  const { taskList } = useContext(ListContext);
  const completedList = taskList.filter((i) => i.completed == true);
  return (
    <ul>
      {completedList.map((i) => (
        <Task {...i} key={i.id} />
      ))}
    </ul>
  );
}
