import React from "react";

import { useForm } from "react-hook-form";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const BookingForm = ({ modalIsOpen, closeModal, bookingOn, bookingPrice }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
 
    data.service = bookingOn;

    const bookingData = {
      email: data.email,
      stName: data.stName,
      stAge: data.stAge,
    };

    const url = `https://morning-brook-97610.herokuapp.com/addBooking`;
    console.log(bookingData);
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingData),
    }).then((res) => console.log("server side", res));
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2>Course Name : {bookingOn}</h2>
        <p>Price : {bookingPrice}</p>
        <button onClick={closeModal}>close</button>

        <br />
        <br />

        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            {...register("stName")}
            placeholder="Student Name"
          />
          <br />
          <br />
          <input type="text" {...register("stAge")} placeholder="Student Age" />
          <br />
          <br />
          <input type="email" {...register("email")} placeholder="Email" />
          <br />
          <br />
          {errors.exampleRequired && <span>This field is required</span>}
          <input type="submit" value="Send" />
          <br />
          <br />
        </form>
      </Modal>
    </div>
  );
};

export default BookingForm;
