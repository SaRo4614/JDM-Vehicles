//HOKS
import { useState, useEffect } from "react";
//ROUTER DOM
import { useParams } from "react-router-dom";
//FIREBASE
import Detail from "../../components/Detail/Detail";
//FIREBASE
import { db } from "../../firebase/firebaseConfig";
import {
  collection,
  query,
  getDocs,
  where,
  documentId,
} from "firebase/firestore";
//COMPONENTS
import LinearIndeterminate from "../../components/Progress/Progress";

const DetailPage = () => {
  let { id } = useParams();

  const [car, setCar] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getVehicles = async () => {
      const q = query(
        collection(db, "vehicles"),
        where(documentId(), "==", id)
      );
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setCar(docs);
    };
    getVehicles();
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [id]);

  return (
    <>
      {isLoading ? (
        <div className="Spinner">
          <LinearIndeterminate />
        </div>
      ) : (
        <div className="card">
          {car.map((car) => {
            return (
              <div key={car.id}>
                <Detail car={car} />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default DetailPage;
