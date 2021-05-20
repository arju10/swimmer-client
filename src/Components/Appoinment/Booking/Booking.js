import React from "react";
import DashboardLink from "../../Dashboard/DashboardLink/DashboardLink";
import Navbar from "../../Home/Navbar/Navbar";

const Booking = ({}) => {
  return (
    <div className="container">
      <Navbar />
      <div className="row">
        <div className="col-md-4">
          <DashboardLink></DashboardLink>
        </div>
        <div className="col-md-8">
          <h1>Your latest booking</h1>
        </div>
      </div>
    </div>
  );
};

export default Booking;
