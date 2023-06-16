import { Table, Container, Button } from "reactstrap";
import Card from "./student";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import Context from "../../Context";
export default function Student() {
  const context = useContext(Context);
  const nav = useNavigate();
  const handledelete = (id) => {
    context.deleteproduct(id);
  };

  return (
    <Container>
      <h1>students list</h1>
      <Button color="warning" onClick={() => nav("/action")}>
        Add new student
      </Button>
      <Table>
        <thead>
          <tr>
            <th>S.no</th>
            <th>Full Name</th>
            <th>department</th>
            <th>dob</th>
            <th>Teacher</th>
            <th>profile</th>
          </tr>
        </thead>
        <tbody>
          {context.sdata.map((item, index) => {
            return (
              <Card
                data={item}
                index={index}
                key={item.id}
                id={item.id}
                handledelete={handledelete}
              />
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}
