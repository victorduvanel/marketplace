import React, { useState, useEffect } from "react";
import { read } from "../actions/products";

const ViewProduct = ({ match }) => {
  const [product, setProduct] = useState({});
  const [image, setImage] = useState("");

  useEffect(() => {
    loadSellerProduct();
  }, []);
  const loadSellerProduct = async () => {
    let res = await read(match.params.productId);
    // console.log(res);
    setProduct(res.data);
    setImage(`${process.env.REACT_APP_API}/product/image/${res.data._id}`);
  };
  return (
    <>
      <div className="container-fluid bg-dark p-5 text-center">
        <h2 className="text-light">{product.title}</h2>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <br />
            <img
              src={image}
              alt={product.title}
              className="img img-fluid m-2"
            />
          </div>
          <div className="col-md-6">
            <br />
            <b>{product.description}</b>
            <p className="alert alert-info mt-3">{product.price}</p>
            <i> Posté par {product.postedBy && product.postedBy.name}</i>
            <br />
            <button className="btn btn-clock btn-lg btn-dark mt-3">
              Achter maintenant
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default ViewProduct;
