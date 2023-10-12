import '../Navbar/NavBar.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const Detail = ({ car }) => {
  const { img, name, description } = car;

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
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className='add-to-cart'>
        <Button size="small" color="primary" className='button'>
          ADD TO CART
        </Button>
      </CardActions>
    </Card>
  );
}

export default Detail;