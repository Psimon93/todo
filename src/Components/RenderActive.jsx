import Task from "./Task";
export default function RenderActive({ taskList, setTaskList }) {
  const activeList = taskList.filter((i) => i.completed == false);
  return (
    <ul>
      {activeList.map((i) => (
        <Task {...i} key={i.id} setTaskList={setTaskList} />
      ))}
    </ul>
  );
}
