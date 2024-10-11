import logo from "../logo.svg";
import "./Siteone.scss";

function Siteone() {
  const renderImage = (count) => {
    return Array.from({ length: count }).map((_, index) => (
      <img key={index} src={logo} alt={`Logo ${index + 1}`} />
    ));
  };

  const renderText = (count) => {
    return Array.from({ length: count }).map((_, index) => (
      <p>Slika {index + 1}</p>
    ));
  };

  return (
    <div className="container">
      <div className="gallery">
        <div className="gallery__item">
          <div className="gallery_image">{renderImage(5)}</div>
          <div className="gallery_text">{renderText(5)}</div>
        </div>
      </div>
    </div>
  );
}

export default Siteone;
