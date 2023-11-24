import Task from "./Task";
export default function RenderCompleted({ taskList, setTaskList }) {
  const completedList = taskList.filter((i) => i.completed == true);
  return (
    <ul>
      {completedList.map((i) => (
        <Task {...i} key={i.id} setTaskList={setTaskList} />
      ))}
    </ul>
  );
}
