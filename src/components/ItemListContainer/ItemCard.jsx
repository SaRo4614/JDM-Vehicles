//CSS
import "./CardItems.css";
import "../Navbar/NavBar.css";
//MUI
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import Typography from "@mui/material/Typography";

const ItemCard = ({ car }) => {
  const { img, name } = car;

  return (
    <Card sx={{ maxWidth: 500 }} className="card">
      <CardActionArea>
        <CardMedia component="img" height="200" image={img} alt="Card" />
        <CardContent>
          <Typography variant="h5" component="div" className="name">
            {name}
          </Typography>
        </CardContent>
        <CardContent className="icon-card">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ItemCard;
