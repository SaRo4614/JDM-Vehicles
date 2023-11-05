//HOOKS
import { useEffect, useState } from "react";
//ROUTER DOM
import { useParams, Link } from "react-router-dom";
//COMPONENTS
import ItemCard from "../../components/ItemListContainer/ItemCard";
import LinearIndeterminate from "../../components/Progress/Progress";
//FIREBASE
import { db } from "../../firebase/firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";

const Category = () => {
  const [cars, setCars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  let { type } = useParams();

  useEffect(() => {
    const getVehicles = async () => {
      const q = query(collection(db, "vehicles"), where("type", "==", type));
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
  }, [type]);

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
              <div style={{ margin: 10 }} key={car.id}>
                <Link to={`/detail/${car.id}`} className="card">
                  <ItemCard car={car} key={car.id} />
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Category;
