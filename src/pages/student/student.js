import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
export default function Card({ data, index, id, handledelete }) {
  const nav = useNavigate();

  return (
    <tr>
      <td>{index + 1}</td>
      <td>{data.name}</td>
      <td>{data.department}</td>
      <td>{data.year}</td>
      <td>{data.teacher}</td>
      <td>
        <Button color="info" onClick={() => nav("/profile/" + id)}>
          View
        </Button>
        <Button
          color="danger"
          onClick={() => {
            handledelete(id);
          }}
        >
          delete
        </Button>
      </td>
    </tr>
  );
}
