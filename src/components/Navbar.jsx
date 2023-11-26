import { Link } from "react-router-dom";
import { PhotoContext } from "../context/PhotoContext";
import { useContext } from "react";

const Navbar = () => {
  const { carro } = useContext(PhotoContext);

  return (
    <div className="navContainer">
      <nav className="navbar">
        <h1>🍕 Pizzería Mamma Mia</h1>
        <Link className="navLinks" to="/">
          Home
        </Link>
        <Link className="navLinks" to="/carrito">
          Carrito
        </Link>
      </nav>
      <div className="carritoNav">🛒${carro.toLocaleString()}</div>
    </div>
  );
};
export default Navbar;
