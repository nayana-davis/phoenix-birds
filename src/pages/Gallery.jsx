import React from "react";
import "animate.css";
import img1 from "../assets/smile3.jpg";
import img2 from "../assets/smile3.jpg";
import img3 from "../assets/smile3.jpg";

const Gallery = () => {
  const images = [img1, img2, img3];

  return (
    <section className="gallery-page py-5">
      <div className="container">
        <h2 className="text-center text-warning fw-bold mb-5 animate__animated animate__fadeInDown">
          Gallery
        </h2>
        <div className="row g-4">
          {images.map((img, idx) => (
            <div key={idx} className="col-md-4">
              <div className="card shadow animate__animated animate__zoomIn">
                <img src={img} alt={`Event ${idx+1}`} className="card-img-top" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
