import React from "react";

const Carousel = () => {
  return (
    <div>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://openthemagazine.com/wp-content/uploads/2019/04/Hanuman1.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item active">
            <img
              src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1222169770.1702512000&semt=sph"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item active">
            <img
              src="https://img.freepik.com/premium-photo/lake-pier-with-mountains-background_1033303-296.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1699660800&semt=ais"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>

        {/* Prev Button ................... */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>

        {/* Next Butto ................. */}
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
