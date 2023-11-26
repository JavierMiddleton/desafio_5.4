import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { PhotoContext } from "../context/PhotoContext";

const CardComp = ({ photo }) => {
  const { setCarro, pizzaList, setPizzaList } = useContext(PhotoContext);

  const navigate = useNavigate();

  useEffect(() => {
    console.log("Updated pizzaList:", pizzaList);
  }, [pizzaList]);

  return (
    <Card style={{ width: "25rem" }} className="card">
      <Card.Img style={{ borderRadius: "5%" }} variant="top" src={photo.img} />
      <Card.Body>
        <Card.Title className="cardTitle">{photo.name}</Card.Title>
        <hr className="hr" />
        <Card.Text>
          <p style={{ fontWeight: "bold" }}>Ingredientes:</p>
          <ListGroup className="cardList">
            {photo.ingredients.map((ingrediente, index) => (
              <ListGroup.Item key={index}>
                {/*Method for mayus in each word from ingredient*/}
                🍕 {ingrediente.charAt(0).toUpperCase() + ingrediente.slice(1)}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card.Text>
        <hr className="hr" />
        <h1 className="cardPrice">${photo.price.toLocaleString()}</h1>
        <div className="cardButtons">
          <Button variant="info" onClick={() => navigate(`/${photo.name}`)}>
            Ver más 👀
          </Button>{" "}
          <Button
            variant="danger"
            onClick={() => {
              setPizzaList((prevPizzaList) => {
                const pizzaIndex = prevPizzaList.findIndex(
                  (pizza) => pizza.name === photo.name
                );

                if (pizzaIndex !== -1) {
                  const updatedPizzaList = [...prevPizzaList];
                  updatedPizzaList[pizzaIndex] = {
                    ...updatedPizzaList[pizzaIndex],
                    qty: updatedPizzaList[pizzaIndex].qty + 1,
                  };
                  return updatedPizzaList;
                }

                //Retorna la lista sin cambios si no encuentra la pizza!
                return prevPizzaList;
              });

              setCarro((prevCarro) => prevCarro + photo.price);
            }}
          >
            Añadir 🛒
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardComp;
