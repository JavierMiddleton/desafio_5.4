import { useContext } from "react";
import { PhotoContext } from "../context/PhotoContext";
import CardComp from "./CardComp";

const Gallery = () => {
  const { photos } = useContext(PhotoContext);
  return (
    <div className="gallery">
      {photos.map((photo) => {
        return <CardComp key={photo.id} photo={photo} />;
      })}
    </div>
  );
};
export default Gallery;
