import React from "react";
import Navbar from "../../Home/Navbar/Navbar";
import ReactForm from "../../ReactForm/ReactForm";
import DashboardLink from "../DashboardLink/DashboardLink";

const Review = () => {
  return (
    <div className="container">
      <Navbar />
      <h3>Review</h3>
      <div className="row">
        <div className="col-md-4">
          <DashboardLink></DashboardLink>
        </div>
        <div className="col-md-8">
          <ReactForm />
        </div>
      </div>
    </div>
  );
};

export default Review;
