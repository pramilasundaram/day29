import { Container, Card, Table, Row, Col, Button } from "reactstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useContext } from "react";
import Context from "../../Context";
export default function Tprofile() {
  const context = useContext(Context);
  const nav = useNavigate();
  const { id } = useParams();
  const [formdata, setformdata] = useState([]);
  useEffect(() => {
    // if (id) {
    //  fetch("https://64288469ebb1476fcc3a0e87.mockapi.io/product/" + id)
    //   .then((response) => response.json())
    //   .then((json) => setformdata(json));
    setformdata(context.getProductbyid(id));
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
            onClick={() => nav("/teacher")}
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
              <th>Teacher Id</th>
              <td>{formdata.id}</td>
            </tr>
            <tr>
              <th>Fullname</th>
              <td>{formdata.name}</td>
            </tr>
            <tr>
              <th>Date of Birth</th>
              <td>{formdata.dob}</td>
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
              <th>Designation</th>
              <td>{formdata.designation}</td>
            </tr>
            <tr>
              <th>qualification</th>
              <td>{formdata.qualification}</td>
            </tr>
            <tr>
              <th>experience</th>
              <td>{formdata.experience}</td>
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
          <Button color="danger" onClick={() => nav("/taction/" + id)}>
            Edit
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
