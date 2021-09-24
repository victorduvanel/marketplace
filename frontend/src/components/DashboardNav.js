import { Link } from "react-router-dom";

const DashboardNav = () => {
  const active = window.location.pathname;
  // console.log(active);
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link
          className={`nav-link link-success ${active === "/dashboard" && "active"}`}
          to="/dashboard"
        >
          Vos achats
        </Link>
      </li>
      <li className="nav-item">
        <Link
          className={`nav-link link-success ${active === "/dashboard/seller" && "active"}`}
          to="/dashboard/seller"
        >
          Vendre
        </Link>
      </li>
    </ul>
  );
};

export default DashboardNav;
