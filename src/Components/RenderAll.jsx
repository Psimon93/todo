import Task from "./Task";
export default function RenderAll({ taskList, setTaskList }) {
  return (
    <ul>
      {taskList.map((i) => (
        <Task {...i} key={i.id} setTaskList={setTaskList} />
      ))}
    </ul>
  );
}
