export default function DeleteAllButton({ setTaskList }) {
  function deleteAll() {
    setTaskList((c) => {
      return c.filter((i) => i.completed == false);
    });
  }
  return <button onClick={() => deleteAll()}>Delete completed</button>;
}
