import { useContext } from "react";
import { ListContext } from "../App";
import Button from "react-bootstrap/Button";

export default function DeleteAllButton() {
  const { setTaskList } = useContext(ListContext);
  function deleteAll() {
    setTaskList((c) => {
      return c.filter((i) => i.completed == false);
    });
  }
  return (
    <Button variant="outline-danger" onClick={() => deleteAll()}>
      Delete completed
    </Button>
  );
}
