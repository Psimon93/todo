import Task from "./Task";
export default function RenderAll({ taskList, toggleBox, deleteTask }) {
  return (
    <ul>
      {taskList.map((i) => (
        <Task {...i} key={i.id} toggleBox={toggleBox} deleteTask={deleteTask} />
      ))}
    </ul>
  );
}
