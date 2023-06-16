import { Container, Card, Table, Row, Col, Button } from "reactstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useContext } from "react";
import Context from "../../Context";
export default function Profile() {
  const context = useContext(Context);
  const nav = useNavigate();
  const { id } = useParams();
  const [formdata, setformdata] = useState([]);
  useEffect(() => {
    // if (id) {
    setformdata(context.getproductbyid(id));
    // }
  }, [id]);

  return (
    <Container className="style">
      <h4>Profile of {formdata.name}</h4>
      <Row>
        <Col className="bg-light border">
          <Button
            color="warning"
            style={{
              float: "left",
              marginTop: "20px",
              marginLeft: "20px"
            }}
            onClick={() => nav("/student")}
          >
            BACK
          </Button>
          <Card
            style={{
              width: "13rem",
              float: "right",
              marginTop: "20px",
              marginRight: "20px"
            }}
          >
            <img alt="Card" src="https://picsum.photos/300/200" />
          </Card>
          <Table>
            <tr>
              <th>Student Id</th>
              <td>{formdata.id}</td>
            </tr>
            <tr>
              <th>Fullname</th>
              <td>{formdata.name}</td>
            </tr>
            <tr>
              <th>Date of Birth</th>
              <td>{formdata.year}</td>
            </tr>
            <tr>
              <th>Gender</th>
              <td>{formdata.gender}</td>
            </tr>
            <tr>
              <th>Department</th>
              <td>{formdata.department}</td>
            </tr>
            <tr>
              <th>year</th>
              <td>{formdata.year}</td>
            </tr>
            <tr>
              <th>mentor</th>
              <td>{formdata.teacher}</td>
            </tr>
            <tr>
              <th>Address</th>
              <td>{formdata.address}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{formdata.email}</td>
            </tr>
            <tr>
              <th>phonenumber</th>
              <td>{formdata.phonenumber}</td>
            </tr>
          </Table>
          <Button color="danger" onClick={() => nav("/action/" + id)}>
            Edit
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
