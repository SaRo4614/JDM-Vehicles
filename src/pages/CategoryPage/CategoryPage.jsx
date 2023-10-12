import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemCard from "../../components/CardItems/ItemCard";

const Category = () => {
  const [cars, setCars] = useState([]);

  let { categoryId } = useParams();

  useEffect(() => {
    setTimeout(() => {
      fetch('/vehicles.json')
      .then(response => response.json())
      .then(info => setCars(info));
    }, 500);
  }, []);

  let filteredCars = cars.filter((car) => {
    return car.type === categoryId;
  });

  return (
    <div className="cards">
      {filteredCars.map((car) => {
        return (
          <div style={{ margin: 10 }} key={car.id}>
            <ItemCard car={car} />
          </div>
        );
      })}
    </div>
  );
};

export default Category;