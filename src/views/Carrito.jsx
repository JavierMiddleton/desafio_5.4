import { Button, ListGroup } from "react-bootstrap";
import { PhotoContext } from "../context/PhotoContext";
import { useContext } from "react";

const Carrito = () => {
  const { carro, setCarro, pizzaList, setPizzaList } = useContext(PhotoContext);

  // Handle functions for increasing or decreasing qty key from pizzaList object

  const handleDecreaseQty = (index) => {
    setPizzaList((prevPizzaList) => {
      const updatedPizzaList = [...prevPizzaList];

      if (updatedPizzaList[index].qty > 0) {
        updatedPizzaList[index] = {
          ...updatedPizzaList[index],
          qty: updatedPizzaList[index].qty - 1,
        };
      }

      return updatedPizzaList;
    });
  };

  const handleIncreaseQty = (index) => {
    setPizzaList((prevPizzaList) => {
      const updatedPizzaList = [...prevPizzaList];

      updatedPizzaList[index] = {
        ...updatedPizzaList[index],
        qty: updatedPizzaList[index].qty + 1,
      };

      return updatedPizzaList;
    });
  };

  // Full rendering, not dynamic uwuwuw lolamento

  return (
    <>
      <div className="homeBanner">
        <h1>¡Pizzería Mamma Mia!</h1>
        <h5>¡Tenemos las mejores pizzas que podrás encontrar!</h5>{" "}
      </div>
      <ListGroup className="carritoList">
        <ListGroup.Item className="carroGroup">
          <Button
            variant="danger"
            onClick={() => {
              handleDecreaseQty(0);
              setCarro(carro - 5950);
            }}
          >
            -1
          </Button>
          <div>{pizzaList[0].qty}</div>
          <Button
            variant="primary"
            onClick={() => {
              handleIncreaseQty(0);
              setCarro(carro + 5950);
            }}
          >
            +1
          </Button>{" "}
          Pizza Napolitana - ${pizzaList[0].qty * 5950}
        </ListGroup.Item>
        <ListGroup.Item className="carroGroup">
          <Button
            variant="danger"
            onClick={() => {
              handleDecreaseQty(1);
              setCarro(carro - 7250);
            }}
          >
            -1
          </Button>
          <div>{pizzaList[1].qty}</div>
          <Button
            variant="primary"
            onClick={() => {
              handleIncreaseQty(1);
              setCarro(carro + 7250);
            }}
          >
            +1
          </Button>{" "}
          Pizza Española - ${(pizzaList[1].qty * 7250).toLocaleString()}
        </ListGroup.Item>
        <ListGroup.Item className="carroGroup">
          <Button
            variant="danger"
            onClick={() => {
              handleDecreaseQty(2);
              setCarro(carro - 5990);
            }}
          >
            -1
          </Button>
          <div>{pizzaList[2].qty}</div>
          <Button
            variant="primary"
            onClick={() => {
              handleIncreaseQty(2);
              setCarro(carro + 5990);
            }}
          >
            +1
          </Button>{" "}
          Pizza Salame - ${(pizzaList[2].qty * 5990).toLocaleString()}
        </ListGroup.Item>
        <ListGroup.Item className="carroGroup">
          <Button
            variant="danger"
            onClick={() => {
              handleDecreaseQty(3);
              setCarro(carro - 9590);
            }}
          >
            -1
          </Button>
          <div>{pizzaList[3].qty}</div>
          <Button
            variant="primary"
            onClick={() => {
              handleIncreaseQty(3);
              setCarro(carro + 9590);
            }}
          >
            +1
          </Button>{" "}
          Pizza Cuatro estaciones - $
          {(pizzaList[3].qty * 9590).toLocaleString()}
        </ListGroup.Item>
        <ListGroup.Item className="carroGroup">
          <Button
            variant="danger"
            onClick={() => {
              handleDecreaseQty(4);
              setCarro(carro - 6450);
            }}
          >
            -1
          </Button>
          <div>{pizzaList[4].qty}</div>
          <Button
            variant="primary"
            onClick={() => {
              handleIncreaseQty(4);
              setCarro(carro + 6450);
            }}
          >
            +1
          </Button>{" "}
          Pizza Bacon - ${(pizzaList[4].qty * 6450).toLocaleString()}
        </ListGroup.Item>
        <ListGroup.Item className="carroGroup">
          <Button
            variant="danger"
            onClick={() => {
              handleDecreaseQty(5);
              setCarro(carro - 8500);
            }}
          >
            -1
          </Button>
          <div>{pizzaList[5].qty}</div>
          <Button
            variant="primary"
            onClick={() => {
              handleIncreaseQty(5);
              setCarro(carro + 8500);
            }}
          >
            +1
          </Button>{" "}
          Pizza Pollo picante - ${(pizzaList[5].qty * 8500).toLocaleString()}
        </ListGroup.Item>
        <ListGroup.Item>
          {" "}
          <span style={{ fontWeight: "bold" }}>Total: </span> 🛒$
          {carro.toLocaleString()}
        </ListGroup.Item>
      </ListGroup>
    </>
  );
};
export default Carrito;
