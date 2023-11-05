import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { CartContext } from "../../context/CartContext";
import React, { useContext } from "react";

const CartWidget = () => {
  const { amountCart } = useContext(CartContext);
  return (
    <div>
      <ShoppingCartIcon />
      <span>{amountCart()}</span>
    </div>
  );
};

export default CartWidget;
