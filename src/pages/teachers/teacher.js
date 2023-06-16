import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import Students from "./studentlist";

export default function Card({ data, index, id, handledelete }) {
  const nav = useNavigate();

  return (
    <tr>
      <td>{index + 1}</td>
      <td>{data.name}</td>
      <td>{data.designation}</td>
      <td>{data.department}</td>
      <td>
        <Button color="info" onClick={() => nav("/students/" + id)}>
          students list
        </Button>
      </td>
      <td>
        <Button color="info" onClick={() => nav("/tprofile/" + id)}>
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
