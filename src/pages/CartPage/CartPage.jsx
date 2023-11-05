//CSS
import "./Cart.css";
//HOOKS
import { useContext } from "react";
//CONTEXT
import { CartContext } from "../../context/CartContext";
//ROUTERDOM
import { Link } from "react-router-dom";
//MIU
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";

const CartPage = () => {
  const { cart, totalPrice, empyCart } = useContext(CartContext);

  const handleVaciar = () => {
    empyCart();
  };

  return (
    <div className="cart">
      <div className="cards-cart">
        {cart.map((car) => {
          return (
            <Card sx={{}} className="cart-card" key={car.id}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image={car.img}
                  alt="Card"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    className="name"
                  >
                    {car.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardContent className="units">
                <p className="units-amount">Units: {car.amount}</p> ||
                <p>Subtotal: ${car.price * car.amount}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
      {cart.length > 0 ? (
        <div className="checkout">
          <h2>Total: ${totalPrice()}</h2>
          <button className="empty-cart-checkout" onClick={handleVaciar}>
            Empty Cart
            <Grid item xs={8}>
              <DeleteForeverOutlinedIcon />
            </Grid>
          </button>
          <Link to="/form" className="go-checkout">
            Go to Checkout
          </Link>
        </div>
      ) : (
        <h1>Your cart is empty.</h1>
      )}
    </div>
  );
};

export default CartPage;
