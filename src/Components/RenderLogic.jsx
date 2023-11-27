import RenderAll from "./RenderAll";
import RenderActive from "./RenderActive";
import RenderCompleted from "./RenderCompleted";
import { Route, Routes, Link } from "react-router-dom";

export default function RenderLogic({ setTaskList, taskList }) {
  return (
    <>
      <Link to="/">
        <button>All</button>
      </Link>

      <Link to="/Active">
        <button>Active</button>
      </Link>

      <Link to="/Completed">
        <button>Completed</button>
      </Link>

      <Routes>
        <Route
          path="/"
          element={<RenderAll taskList={taskList} setTaskList={setTaskList} />}
        />
        <Route
          path="/Active"
          element={
            <RenderActive taskList={taskList} setTaskList={setTaskList} />
          }
        />
        <Route
          path="/Completed"
          element={
            <RenderCompleted taskList={taskList} setTaskList={setTaskList} />
          }
        />
      </Routes>
    </>
  );
}
