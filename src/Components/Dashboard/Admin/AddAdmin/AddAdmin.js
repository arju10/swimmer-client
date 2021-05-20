import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Navbar from "../../../Home/Navbar/Navbar";
import Sidebar from "../../../Sidebar/Sidebar";
import AdminList from "../AdminList/AdminList";

const AddAdmin = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const reviewData = {
      email: data.email,
    };
    const url = `https://still-mountain-61093.herokuapp.com/addAdmin`;
    console.log(reviewData);
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviewData),
    }).then((res) => console.log("server side", res));
    alert("Successfully Admin Added !")
  };
  return (
    <div className="container">
      <Navbar />
      <div className="mt-3">
        <Sidebar />
      </div>

      <div className=" row  mt-3">
        <h4 className="mt-2 ms-3 text-secondary">Add Admin</h4>
        <div className="col-md-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="email"
              {...register("email")}
              placeholder="Email"
              className="form-control mt-2 ms-3"
              style={{ width: "350px" }}
              required={true}
            />
            {errors.exampleRequired && <span>This field is required</span>}

            <input type="submit" className="mt-2 ms-3 btn btn-primary"/>
          </form>
        </div>
      </div>

      <div className = "row">
        <h2 className  ="text-center mt-5 text-secondary">Admin List</h2>
      <div className="col-md-12">
        <AdminList/>
       </div>
      </div>
    </div>
  );
};

export default AddAdmin;
