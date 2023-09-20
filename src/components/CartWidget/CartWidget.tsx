import React from "react";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const CartWidget = () => {
  return (
    <div>
      <Button color="inherit">
        <ShoppingCartIcon /> 
      </Button>
      0
    </div>
  );
};

export default CartWidget;
