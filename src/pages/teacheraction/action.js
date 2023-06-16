import {
  Container,
  Button,
  Form,
  FormGroup,
  Label,
  Col,
  Input
} from "reactstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useContext } from "react";
import Context from "../../Context";
export default function Taction() {
  const context = useContext(Context);
  const nav = useNavigate();
  const { id } = useParams();

  let initialvalue = {
    name: "",
    image: "",
    department: "",
    experience: "",
    dob: "",
    gender: "",
    students: [],
    phonenumber: "",
    email: "",
    qualification: "",
    designation: "",
    address: ""
  };
  const [formdata, setformdata] = useState(initialvalue);
  const handlechange = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    if (id) {
      setformdata(context.getProductbyid(id));
    }
  }, [id]);
  const handlesubmit = () => {
    if (id) {
      context.updateProduct(formdata);
      setformdata(initialvalue);
    } else {
      context.createProduct(formdata);
      setformdata(initialvalue);
    }
  };

  return (
    <Container>
      {id ? <h1>Update</h1> : <h1>Create</h1>}
      <Button color="warning" onClick={() => nav("/teacher")}>
        BACK
      </Button>
      <Form>
        <FormGroup row>
          <Label for="name" sm={2}>
            Fullname
          </Label>
          <Col sm={10}>
            <Input
              id="name"
              name="name"
              placeholder="Enter the name"
              type="text"
              onChange={handlechange}
              value={formdata.name}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="dob" sm={2}>
            Date of birth
          </Label>
          <Col sm={10}>
            <Input
              id="dob"
              name="dob"
              placeholder="Enter the dob"
              type="text"
              onChange={handlechange}
              value={formdata.dob}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="gender" sm={2}>
            gender
          </Label>
          <Col sm={10}>
            <Input
              id="gender"
              name="gender"
              placeholder="Enter the gender"
              type="text"
              onChange={handlechange}
              value={formdata.gender}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="image" sm={2}>
            image
          </Label>
          <Col sm={10}>
            <Input
              id="image"
              name="image"
              placeholder="Enter the  image"
              type="text"
              onChange={handlechange}
              value={formdata.image}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="email" sm={2}>
            Email
          </Label>
          <Col sm={10}>
            <Input
              id="email"
              name="email"
              placeholder="Enter the product email"
              type="email"
              onChange={handlechange}
              value={formdata.email}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="department" sm={2}>
            Department
          </Label>
          <Col sm={10}>
            <Input
              id="department"
              name="department"
              placeholder="Enter the department"
              type="text"
              onChange={handlechange}
              value={formdata.department}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="designation" sm={2}>
            Designation
          </Label>
          <Col sm={10}>
            <Input
              id="designation"
              name="designation"
              placeholder="Enter the designation"
              type="text"
              onChange={handlechange}
              value={formdata.designation}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="qualification" sm={2}>
            qualification
          </Label>
          <Col sm={10}>
            <Input
              id="qualification"
              name="qualification"
              placeholder="Enter the qualification"
              type="text"
              onChange={handlechange}
              value={formdata.qualification}
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="experience" sm={2}>
            experiences
          </Label>
          <Col sm={10}>
            <Input
              id="experience"
              name="experience"
              placeholder="Enter the experience"
              type="text"
              onChange={handlechange}
              value={formdata.experience}
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="address" sm={2}>
            address
          </Label>
          <Col sm={10}>
            <Input
              id="address"
              name="address"
              placeholder="Enter the address"
              type="text"
              onChange={handlechange}
              value={formdata.address}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="phonenumber" sm={2}>
            phone
          </Label>
          <Col sm={10}>
            <Input
              id="phonenumber"
              name="phonenumber"
              placeholder="Enter the phonenumber number"
              type="text"
              onChange={handlechange}
              value={formdata.phonenumber}
            />
          </Col>
        </FormGroup>
      </Form>
      <Button color="info" onClick={handlesubmit}>
        submit
      </Button>
    </Container>
  );
}
