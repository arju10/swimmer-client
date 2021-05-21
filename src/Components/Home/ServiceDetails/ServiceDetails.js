import React from "react";
import { Link } from "react-router-dom";

import BookingForm from "../../Appoinment/BookingForm/BookingForm";
import "./ServiceDetails.css";
const ServiceDetails = ({ service }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div class="col-lg-4 col-md-6 col-12 mb-md--110 mt-5 shadow">
      <div class="single-class picton-border border border-primary border-5 ps-5 pb-5 pt-5 align-item-center text-wrap ">
        <div class="class-icon">
          <img src={service.imageURL} alt="class" />
        </div>
        <div class="class-content">
          <h3>
            Swim class for {service.courseName} ({service.age}yr.)
          </h3>
          <p>
            <small>Course Fee : ${service.price}</small>
          </p>
          <h6>Instructor {service.instractor}</h6>
          <h6>Duration :{service.classDuration}Class</h6>

          <div class="class-button">
            <Link class="read-more btn">
              <button className="btn btn-primary" onClick={openModal}>
                Book Now
              </button>
            </Link>
            <BookingForm
              modalIsOpen={modalIsOpen}
              closeModal={closeModal}
              bookingOn={service.courseName}
              bookingPrice={service.price}
            ></BookingForm>
          </div>
        </div>
      </div>
    </div>

  );
};

export default ServiceDetails;
