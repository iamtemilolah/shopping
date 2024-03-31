import React from "react";

const Home = () => {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img
          src="/assets/download (1).jpg"
          className="card-img"
          alt="Background"
          height="350px"
        />
        <div className="card-img-overlay d-flex flex-column Justify-content-center">
          <div className="container">
            <h5 className="card-title display- fw-bolder mb-0">
              NEW SEASON ARRIVALS
            </h5>
            <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
          </div>
        </div>
      </div>
      <products />
    </div>
  );
};

export default Home;
