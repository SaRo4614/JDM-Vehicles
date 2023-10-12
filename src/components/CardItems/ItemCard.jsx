import './CardItems.css';
import '../Navbar/NavBar.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


const ItemCard = ({ car }) => {
  const { img, name } = car;

  return (
    <Card sx={{ maxWidth: 345 }} className='card'>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={"/"+img}
          alt="Card"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" className='name'>
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ItemCard;