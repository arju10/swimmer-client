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

    //     <div className = "col-lg-4 col-md-6 col-12">
    //     <div class="card" style={{width: "18rem"}}>
    //     <img src={service.photo}class="card-img-top" alt="..."/>
    //     <div class="card-body">
    //       <h5 class="card-title">Card title</h5>
    //       <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    //       <a href="#" class="btn btn-primary">Go somewhere</a>
    //     </div>
    //   </div>
    //   </div>
  );
};

export default ServiceDetails;
