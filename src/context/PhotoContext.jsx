import { createContext, useEffect, useState } from "react";
import axios from "axios";

// Context creation
export const PhotoContext = createContext();

const PhotoProvider = ({ children }) => {
  const [photos, setPhotos] = useState([]);
  const [carro, setCarro] = useState(0);
  const [pizzaList, setPizzaList] = useState([
    { name: "Napolitana", qty: 0 },
    { name: "Española", qty: 0 },
    { name: "Salame", qty: 0 },
    { name: "Cuatro estaciones", qty: 0 },
    { name: "Bacon", qty: 0 },
    { name: "Pollo picante", qty: 0 },
  ]);

  useEffect(() => {
    const apiUrl = "/pizzas.json";

    // Axios inside useEffect to execute
    axios
      .get(apiUrl)
      .then((response) => {
        const datos = response.data;
        setPhotos(datos);
      })
      .catch((err) => {
        console.error("Error al obtener datos:", err);
      });
  }, []);

  return (
    <PhotoContext.Provider
      value={{ photos, carro, setCarro, pizzaList, setPizzaList }}
    >
      {children}
    </PhotoContext.Provider>
  );
};

export default PhotoProvider;
