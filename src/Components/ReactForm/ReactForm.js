import React, { useState } from "react";
import { useForm } from "react-hook-form";
const ReactForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const reviewData = {
      name: data.name,
      email: data.email,
      description: data.description,
    };
    const url = `https://morning-brook-97610.herokuapp.com/addreview`;
    console.log(reviewData);
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviewData),
    }).then((res) => console.log("server side", res));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" {...register("name")} placeholder="Your Name" />
      <br />
      <br />

      <input type="email" {...register("email")} placeholder="Email" />
      <br />
      <br />

      <input
        type="text"
        {...register("description")}
        placeholder="Description"
      />
      <br />
      <br />

      {errors.exampleRequired && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
};

export default ReactForm;
