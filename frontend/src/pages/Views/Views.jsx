import { useEffect, useState } from "react";
import "./Views.css";
import BackArrow from "../../components/Backarrow/Backarrow";

const Views = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "/images/views/viewsImg01.jpg",
    "/images/views/viewsImg02.jpg",
    "/images/views/viewsImg03.jpg",
    "/images/views/viewsImg04.jpg",
    "/images/views/viewsImg05.jpg",
    "/images/views/viewsImg06.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="views-wrapper">
      <BackArrow />
      <h2>views</h2>
      <img
        src={images[currentImageIndex]}
        alt={`View ${currentImageIndex + 1}`}
        className="views-image"
      />
    </div>
  );
};

export default Views;
