import Task from "./Task";
export default function RenderActive({ taskList, toggleBox, deleteTask }) {
  const activeList = taskList.filter((i) => i.completed == false);
  return (
    <ul>
      {activeList.map((i) => (
        <Task {...i} key={i.id} toggleBox={toggleBox} deleteTask={deleteTask} />
      ))}
    </ul>
  );
}
