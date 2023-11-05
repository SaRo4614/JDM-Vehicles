//CSS
import "./CardItems.css";
//HOOKS
import { useState, useEffect } from "react";
//ROUTER DOM
import { Link } from "react-router-dom";
//COMPONENTS
import ItemCard from "./ItemCard";
//FIREBASE
import { db } from "../../firebase/firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";

import LinearIndeterminate from "../../components/Progress/Progress";

const ItemListContainer = () => {
  const [cars, setCars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getVehicles = async () => {
      const q = query(collection(db, "vehicles"));
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setCars(docs);
    };
    getVehicles();
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="Spinner">
          <LinearIndeterminate />
        </div>
      ) : (
        <div className="cards">
          {cars.map((car) => {
            return (
              <div key={car.id}>
                <Link to={`/detail/${car.id}`} className="card">
                  <ItemCard car={car} />
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default ItemListContainer;
