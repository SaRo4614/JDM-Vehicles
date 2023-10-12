import './CardItems.css';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ItemCard from './ItemCard';

const CardItems = () => {

  const [cars, setCars] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      fetch('/vehicles.json')
      .then(response => response.json())
      .then(info => setCars(info));
    }, 500);
  }, []);
  
  return (
    <div className='cards'>
      {cars.map((car) => {
        return (
         <div key={car.id} >
          <Link to={`/detail/${car.id}`} className='card'>
           <ItemCard car={car} />
          </Link>
         </div>
        );
      })}
    </div>
  );
};

export default CardItems;
