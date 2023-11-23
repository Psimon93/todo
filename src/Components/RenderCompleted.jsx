import Task from "./Task";
export default function RenderCompleted({ taskList, toggleBox, deleteTask }) {
  const completedList = taskList.filter((i) => i.completed == true);
  return (
    <ul>
      {completedList.map((i) => (
        <Task {...i} key={i.id} toggleBox={toggleBox} deleteTask={deleteTask} />
      ))}
    </ul>
  );
}
