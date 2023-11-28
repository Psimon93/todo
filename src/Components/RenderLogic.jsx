import RenderAll from "./RenderAll";
import RenderActive from "./RenderActive";
import RenderCompleted from "./RenderCompleted";
import { Route, Routes, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default function RenderLogic() {
  return (
    <>
      <Link to="/">
        <Button variant="info" size="sm">
          All
        </Button>
      </Link>
      <Link to="/Active">
        <Button variant="outline-primary" size="sm">
          Active
        </Button>
      </Link>
      <Link to="/Completed">
        <Button variant="success" size="sm">
          Completed
        </Button>
      </Link>

      <Routes>
        <Route path="/" element={<RenderAll />} />
        <Route path="/Active" element={<RenderActive />} />
        <Route path="/Completed" element={<RenderCompleted />} />
      </Routes>
    </>
  );
}
