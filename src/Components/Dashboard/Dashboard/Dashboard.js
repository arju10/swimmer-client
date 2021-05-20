import React from "react";

import Navbar from "../../Home/Navbar/Navbar";

import DashboardLink from "../DashboardLink/DashboardLink";

const Dashboard = () => {
  return (
    <div className="container">
      <Navbar />
      <DashboardLink />
    </div>
  );
};

export default Dashboard;
