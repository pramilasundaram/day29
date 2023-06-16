import Context from "./Context";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
export default function Provider(props) {
  const [sdata, setSdata] = useState([]);
  const [data, setData] = useState([]);

  let studentcount = sdata.length;
  let teachercount = data.length;
  useEffect(() => {
    fetch("https://64288469ebb1476fcc3a0e87.mockapi.io/students")
      .then((response) => response.json())
      .then((json) => setSdata(json));
  }, []);
  useEffect(() => {
    fetch("https://64288469ebb1476fcc3a0e87.mockapi.io/product")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);
  const createproduct = (product) => {
    setSdata([...sdata, { ...product, id: uuidv4() }]);
    studentcount++;
  };
  const createProduct = (product) => {
    setData([...data, { ...product, id: uuidv4() }]);
    teachercount++;
  };

  const deleteproduct = (id) => {
    setSdata(sdata.filter((value) => value.id !== id));
    studentcount--;
  };
  const deleteProduct = (id) => {
    setData(data.filter((value) => value.id !== id));
    teachercount--;
  };

  const getproductbyid = (id) => {
    let index = sdata.findIndex((value) => value.id === id);
    return sdata[index];
  };
  const getProductbyid = (id) => {
    let index = data.findIndex((value) => value.id === id);
    return data[index];
  };

  const updateproduct = (product) => {
    let index = sdata.findIndex((value) => value.id === product.id);
    let temproduct = sdata;
    temproduct[index] = product;
    setSdata([...temproduct]);
  };
  const updateProduct = (product) => {
    let ind = data.findIndex((value) => value.id === product.id);
    let temprod = data;
    temprod[ind] = product;
    setData([...temprod]);
  };
  return (
    <Context.Provider
      value={{
        sdata,
        data,
        createproduct,
        createProduct,
        deleteproduct,
        deleteProduct,
        getproductbyid,
        getProductbyid,
        updateproduct,
        updateProduct,
        studentcount,
        teachercount
      }}
    >
      {props.children}
    </Context.Provider>
  );
}
