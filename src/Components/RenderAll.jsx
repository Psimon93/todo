import DeleteButton from "./DeleteButton";
export default function RenderAll({ tasks }) {
  return tasks.map((i) => (
    <li key={crypto.randomUUID()}>
      {i.task}
      <DeleteButton />
    </li>
  ));
}
