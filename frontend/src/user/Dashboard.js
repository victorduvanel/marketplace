import DashboardNav from "../components/DashboardNav";
import ConnectNav from "../components/ConnectNav";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <div className="container-fluid bg-dark p-5 text-center">
        <ConnectNav />
      </div>

      <div className="container-fluid p4 mt-3">
        <DashboardNav />
      </div>

      <div className="container-fluid mt-3">
        <div className="row">
          <div className="col-md-10">
            <h2>Vos achats</h2>
          </div>
          <div className="col-md-2">
            <Link to="/" className="btn btn-primary">Chercher des articles</Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
