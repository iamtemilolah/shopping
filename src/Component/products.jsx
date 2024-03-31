import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let componentMounted = true; // Define componentMounted inside useEffect

    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
      }
    };

    getProducts();

    return () => {
      componentMounted = false;
    };
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          {/* Replace 'skeleton' with 'Skeleton' */}
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };

  const FilterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => setFilter(data)}
          >
            All
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => FilterProduct("men's clothing")}
          >
            Men's Clothing
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => FilterProduct("women's clothing")}
          >
            Women's Clothing
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => FilterProduct("jewelry")}
          >
            Jewelry
          </button>{" "}
          {/* Corrected spelling of 'jewelry' */}
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => FilterProduct("electronics")}
          >
            Electronic
          </button>
        </div>
        {filter.map((product) => (
          <div className="col-md-3 md-3 mb-4" key={product.id}>
            <div className="card h-100 text-center p-4">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.title}
                height="250px"
              />
              <div className="card-body">
                <h5 className="card-title mb-0">
                  {product.title.substring(0, 12)}
                </h5>
                <p className="card-text lead fw-bold4fc">${product.price}</p>
                <NavLink
                  to={`/products/${product.id}`}
                  className="btn btn-outline-dark"
                >
                  {" "}
                  {/* Fix interpolation syntax */}
                  Buy Now
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  };

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {" "}
          {/* Corrected typo in justify-content */}
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};

export default Products;
