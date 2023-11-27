import PropTypes from "prop-types";

export default function Task({ id, completed, title, setTaskList }) {
  function toggleBox(id, checked) {
    setTaskList((c) => {
      return c.map((i) => {
        if (i.id == id) {
          return { ...i, completed: checked };
        }
        return i;
      });
    });
  }
  function deleteTask(id) {
    setTaskList((c) => {
      return c.filter((i) => i.id !== id);
    });
  }

  return (
    <li style={{ listStyleType: "none" }}>
      <label style={completed ? { textDecoration: "line-Through" } : {}}>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleBox(id, e.target.checked)}
        />
        {"  " + title}
      </label>
      <button onClick={() => deleteTask(id)}> 🔥 </button>
    </li>
  );
}

Task.propTypes = {
  id: PropTypes.string,
  completed: PropTypes.bool,
  title: PropTypes.string,
};
