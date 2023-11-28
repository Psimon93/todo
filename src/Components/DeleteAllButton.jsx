import { useContext } from "react";
import { ListContext } from "../App";

export default function DeleteAllButton() {
  const { setTaskList } = useContext(ListContext);
  function deleteAll() {
    setTaskList((c) => {
      return c.filter((i) => i.completed == false);
    });
  }
  return <button onClick={() => deleteAll()}>Delete completed</button>;
}
