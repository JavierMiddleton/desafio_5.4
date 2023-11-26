import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import MorePizzaView from "./views/MorePizzaView";
import Home from "./views/Home";
import PhotoProvider from "./context/PhotoContext";
import Carrito from "./views/Carrito";

const App = () => {
  return (
    <div>
      <PhotoProvider>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:name" element={<MorePizzaView />} />
          <Route path="/carrito" element={<Carrito />} />
        </Routes>
      </PhotoProvider>
    </div>
  );
};
export default App;
