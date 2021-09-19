import { currencyFormatter } from "../../actions/stripe";
import { useHistory, Link } from "react-router-dom";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const SmallCard = ({ p, handleProductDelete = (f) => f }) => {
  const history = useHistory();
  return (
    <>
      <div className="card mb-3">
        <div className="row no-gutters">
          <div className="col-md-4">
            {p.image && p.image.contentType ? (
              <img
                src={`${process.env.REACT_APP_API}/product/image/${p._id}`}
                alt="default product image"
                className="card-image img img-fluid"
              />
            ) : (
              <img
                src="https://via.placeholder.com/900x500.png?text=image+du+produit"
                alt="default product image"
                className="card-image img img-fluid"
              />
            )}
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h3 className="card-title">
                {p.title}{" "}
                <span className="float-right text-primary">
                  {currencyFormatter({
                    amount: p.price,
                    currency: "chf",
                  })}
                </span>
              </h3>
              <p className="alert alert-info">{`${p.description.substring(
                1,
                200
              )}...`}</p>
              <p className="card-text">
                Nombre d'article disponible : {p.quantity}
              </p>

              <div className="d-flex justify-content-between h4">
                <button
                  onClick={() => history.push(`/product/${p._id}`)}
                  className="btn btn-primary"
                >
                  Acheter
                </button>
                <Link to={`/product/edit/${p._id}`}>
                  <EditOutlined className="" text-warning />
                </Link>
                <DeleteOutlined
                  onClick={() => handleProductDelete(p._id)}
                  className="text-danger"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SmallCard;
