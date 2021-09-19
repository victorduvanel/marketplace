import { useState } from "react";
import DashboardNav from "../components/DashboardNav";
import ConnectNav from "../components/ConnectNav";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { HomeOutlined } from "@ant-design/icons";
import { createConnectAccount } from "../actions/stripe";
import { toast } from "react-toastify";

const DashboardSeller = () => {
  const { auth } = useSelector((state) => ({ ...state }));
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    try {
      let res = await createConnectAccount(auth.token);
      console.log(res); // get login link
      window.location.href = res.data;
    } catch (err) {
      console.log(err);
      toast.error("Stripe connect failed, Try again.");
      setLoading(false);
    }
  };

  const connected = () => (
    <div className="container-fluid mt-3">
      <div className="row">
        <div className="col-md-10">
          <h2>Vos articles</h2>
        </div>
        <div className="col-md-2">
          <Link to="/products/newproduct" className="btn btn-primary">
            + Ajouter
          </Link>
        </div>
      </div>
    </div>
  );

  const notConnected = () => (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 offset-md-3 text-center">
          <HomeOutlined className="h1" />
          <h4>Connectez-vous avec Stripe pour pouvoir publier des articles</h4>
          <p className="lead">yourmarketplace.ch est un partenaire Stripe</p>
          <button
            disabled={loading}
            onClick={handleClick}
            className="btn btn-primary mb-3"
          >
            {loading ? 'Chargement..' : 'Devenir vendeur'}
          </button>
          <p className="text-muted">
            <small>
              Vous allez être redirigé vers Stripe pour compléter votre compte
            </small>
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="container-fluid bg-secondary p-5 text-center">
        <ConnectNav />
      </div>

      <div className="container-fluid p4 mt-3">
        <DashboardNav />
      </div>

      {auth &&
      auth.user &&
      auth.user.stripe_seller &&
      auth.user.stripe_seller.charges_enabled
        ? connected()
        : notConnected()}

      {/* <pre>{JSON.stringify(auth, null, 4)}</pre> */}
    </>
  );
};
export default DashboardSeller;
