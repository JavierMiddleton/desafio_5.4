import { useContext } from "react";
import { PhotoContext } from "../context/PhotoContext";
import MorePizzaComp from "../components/MorePizzaComp";

const MorePizzaView = () => {
  const { photos } = useContext(PhotoContext);

  return (
    <div className="App">
      {photos.map((photo) => {
        return <MorePizzaComp key={photo.id} photo={photo} />;
      })}
    </div>
  );
};

export default MorePizzaView;
