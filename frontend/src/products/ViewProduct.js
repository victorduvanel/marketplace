import React, { useState, useEffect } from "react";
import { read } from "../actions/products";
import { useSelector } from "react-redux";

const ViewProduct = ({ match, history }) => {
  const [product, setProduct] = useState({});
  const [image, setImage] = useState("");

  const { auth } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    loadSellerProduct();
  }, []);
  const loadSellerProduct = async () => {
    let res = await read(match.params.productId);
    // console.log(res);
    setProduct(res.data);
    setImage(`${process.env.REACT_APP_API}/product/image/${res.data._id}`);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (!auth) history.push("/login");
    console.log(
      "get session id from stripe to show a button > checkout with stripe"
    );
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
            <p className="alert alert-dark mt-3">{product.price}</p>
            <i> Posté par {product.postedBy && product.postedBy.name}</i>
            <br />
            <button
              onClick={handleClick}
              className="btn btn-clock btn-lg btn-dark mt-3"
            >
              {auth && auth.token
                ? "Acheter maintenant"
                : "Connectez-vous pour acheter"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default ViewProduct;
