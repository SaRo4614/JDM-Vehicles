import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Detail from "../../components/Detail/Detail";

const DetailPage = () => {
  let { id } = useParams();

  const [car, setCar] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      fetch('/vehicles.json')
      .then(response => response.json())
      .then(info => setCar(info.filter(car => car.id == id)[0]));
    }, 500);
  }, [id]);

  return (
    <div key={car.id} style={{ display: "flex", justifyContent: "center", margin: 20 }}>
          {car.id ? <Detail car={car} /> : null}
    </div>
  );
};

export default DetailPage;