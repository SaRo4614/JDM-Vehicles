//CSS
import "./Detail.css";
//MIU
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
//COMPONENTS
import ItemCount from "../ItemCount/ItemCount";
//HOOKS
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";

const Detail = ({ car }) => {
  const { img, name, description, price } = car;

  const { addToCart } = useContext(CartContext);

  const [amount, setAmount] = useState(1);

  const handleSubtract = () => {
    amount > 1 && setAmount(amount - 1);
  };

  const handleAdd = () => {
    setAmount(amount + 1);
  };

  return (
    <Card sx={{ maxWidth: 500 }} className="card">
      <CardActionArea>
        <CardMedia component="img" height="200" image={img} alt="Card" />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className="name"
          >
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            className="price"
          >
            ${price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <ItemCount
        amount={amount}
        handleAdd={handleAdd}
        handleSubtract={handleSubtract}
        addToCart={() => {
          addToCart(car, amount);
        }}
      />
    </Card>
  );
};

export default Detail;
