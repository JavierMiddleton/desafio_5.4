import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { PhotoContext } from "../context/PhotoContext";

const MorePizzaComp = ({ photo }) => {
  const { name } = useParams();
  const { setCarro, setPizzaList } = useContext(PhotoContext);

  // Verifica si el nombre en los parámetros de la URL coincide con el nombre de la pizza con useParams. Si no, no renderiza
  if (photo.name !== name) {
    return;
  }

  return (
    <Card className="cardMorePizza">
      <Card.Img
        style={{ borderRadius: "2%", objectFit: "cover" }}
        variant="top"
        src={photo.img}
      />
      <Card.Body style={{ width: "30%" }}>
        <Card.Title style={{ fontWeight: "bold" }} className="cardTitle">
          {photo.name}
        </Card.Title>
        <hr className="hr" />
        <Card.Text>
          <p>{photo.desc}</p>
          <p style={{ fontWeight: "bold" }}>Ingredientes:</p>
          <ListGroup className="cardList">
            {photo.ingredients.map((ingrediente, index) => (
              <ListGroup.Item key={index}>
                🍕 {ingrediente.charAt(0).toUpperCase() + ingrediente.slice(1)}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card.Text>
        <hr className="hr" />
        <h1 className="cardPrice">${photo.price.toLocaleString()}</h1>
        <div className="cardButtons">
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

export default MorePizzaComp;
