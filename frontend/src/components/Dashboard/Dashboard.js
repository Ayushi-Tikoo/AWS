import React from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="sidebar">
      <Link to="/home" className="active">
        Home
      </Link>
      <Link to="/customers">Customers</Link>
      <Link to="/customers/add">AddCustomers</Link>
    </div>
  );
};
export default Dashboard;
