import { useContext } from "react";
import Context from "../../Context";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Table, Button } from "reactstrap";
export default function Students() {
  const context = useContext(Context);
  const nav = useNavigate();
  const { id } = useParams();
  const data = context.sdata.filter((value) => value.teacherid === id);
  console.log(data);
  return (
    <Container>
      <Button
        color="warning"
        style={{
          float: "left",
          marginTop: "20px",
          marginLeft: "20px"
        }}
        onClick={() => nav("/teacher")}
      >
        BACK
      </Button>
      <Table>
        <thead>
          <tr>
            <th>S.no</th>
            <th>Full Name</th>
            <th>Department</th>
            <th>year</th>
            <th>Date of birth</th>
            <th>Gender</th>
            <th>email</th>
            <th>adress</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.department}</td>
                <td>{item.year}</td>
                <td>{item.dob}</td>
                <td>{item.gender}</td>
                <td>{item.email}</td>
                <td>{item.address}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}
