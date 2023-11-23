export default function Task({ id, completed, title, toggleBox, deleteTask }) {
  return (
    <li style={{ listStyleType: "none" }}>
      <label style={completed ? { textDecoration: "line-Through" } : {}}>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleBox(id, e.target.checked)}
        />
        {title}
      </label>
      <button onClick={() => deleteTask(id)}> 🔥 </button>
    </li>
  );
}
