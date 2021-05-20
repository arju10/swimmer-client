import React from "react";
import DashboardLink from "../DashboardLink/DashboardLink";
import Navbar from "../../Home/Navbar/Navbar";
const BookingList = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="row">
        <div className="col-md-4">
          <DashboardLink></DashboardLink>
        </div>
        <div className="col-md-8">Booking List</div>
      </div>
    </div>
  );
};

export default BookingList;
