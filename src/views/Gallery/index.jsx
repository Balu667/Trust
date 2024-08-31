import Breadscrumb from "../../components/Breadscrumb";
import "./Gallery.scss";
import image2 from "../../assets/image2.jpeg";
import image3 from "../../assets/image3.jpeg";
import image4 from "../../assets/image4.jpeg";
import image5 from "../../assets/image5.jpeg";
import image6 from "../../assets/image6.jpeg";
import image7 from "../../assets/image7.jpeg";
import image9 from "../../assets/image9.jpeg";
import image10 from "../../assets/image10.jpeg";
import image11 from "../../assets/image11.jpeg";

const Gallery = () => {
  return (
    <div>
      <Breadscrumb pageName={"Gallery"} />
      <section className="gallery-section">
        <div className="gallery-image-container">
          <img src={image3} alt="image1" />
          <img src={image4} alt="image1" />
          <img src={image5} alt="image1" />
          <img src={image6} alt="image1" />
          <img src={image7} alt="image1" />
          <img src={image9} alt="image1" />
          <img src={image10} alt="image1" />
          <img src={image11} alt="image1" />
          <img src={image2} alt="image1" />
        </div>
      </section>
    </div>
  );
};

export default Gallery;
