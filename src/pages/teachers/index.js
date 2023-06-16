// import { useEffect, useState } from "react";
import { Table, Container, Button } from "reactstrap";
import Card from "./teacher";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import Context from "../../Context";
export default function Teacher() {
  const context = useContext(Context);
  const nav = useNavigate();

  const handledelete = (id) => {
    context.deleteProduct(id);
  };

  return (
    <Container>
      <h1>teachers list</h1>
      <Button color="warning" onClick={() => nav("/taction")}>
        Add new faculty
      </Button>
      <Table>
        <thead>
          <tr>
            <th>S.no</th>
            <th>Full Name</th>
            <th>Designation</th>
            <th>department</th>
            <th>students list</th>
            <th>profile</th>
          </tr>
        </thead>
        <tbody>
          {context.data.map((item, index) => {
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
