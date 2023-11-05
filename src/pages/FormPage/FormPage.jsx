//CSS
import "./Form.css";
//HOOKS
import { useContext, useState } from "react";
//CONTEXT
import { CartContext } from "../../context/CartContext";
//COMPONENTS
import AlertSuccess from "../../components/AlertSuccess/AlertSuccess";
//FIREBASE
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
//MUI
import { TextField } from "@mui/material";

const initialState = {
  name: "",
  email: "",
  phone: "",
};

const FormPage = () => {
  const [values, setValues] = useState(initialState);
  const [purchaseID, setPurchaseID] = useState("");

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const docRef = await addDoc(collection(db, "salesCollection"), {
      values,
    });
    setValues(initialState);
    setPurchaseID(docRef.id);
    console.log(values);
  };

  const { empyCart } = useContext(CartContext);

  const handleEmpyCart = () => {
    empyCart();
  };

  return (
    <div>
      <h1
        style={{
          color: "black",
          textAlign: "center",
          paddingTop: 20,
          textTransform: "uppercase",
        }}
      >
        Complete the Form:
      </h1>
      <form className="form" onSubmit={handleOnSubmit}>
        <TextField
          placeholder="Name"
          style={{ margin: 10, width: 400 }}
          name="name"
          value={values.name}
          onChange={handleOnChange}
          type="text"
          required
        />
        <TextField
          placeholder="Email"
          style={{ margin: 10, width: 400 }}
          name="email"
          value={values.email}
          onChange={handleOnChange}
          type="mail"
          required
        />
        <TextField
          placeholder="Phone"
          style={{ margin: 10, width: 400 }}
          name="phone"
          value={values.phone}
          onChange={handleOnChange}
          type="number"
          required
        />
        <button className="btn-form" onClick={handleEmpyCart}>
          Checkout
        </button>
      </form>
      {purchaseID && <AlertSuccess purchaseID={purchaseID} />}
    </div>
  );
};

export default FormPage;
