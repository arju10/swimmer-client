import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Navbar from "../../../Home/Navbar/Navbar";
import Sidebar from "../../../Sidebar/Sidebar";
const AddService = () => {
  const [imageURL, setImageURL] = useState(null);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const reviewData = {
      courseName: data.courseName,
      age: data.age,
      instractor: data.instractor,
      classDuration: data.classDuration,
      price: data.price,
      learnMethod: data.learnMethod,
      imageURL: imageURL,
    };
    const url = `https://still-mountain-61093.herokuapp.com/addservice`;
    console.log(reviewData);
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviewData),
    }).then((res) => console.log("server side", res));
  };

  const handleImageUpload = (event) => {
    console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set("key", "043d7e3e5b00a44be0a030d5ab031883");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        console.log(response);
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <Navbar />
      <Sidebar />
      <h2>Add Services</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          {...register("courseName")}
          placeholder="Course Name"
        />{" "}
        <br />
        <br />
        <input type="text" {...register("age")} placeholder="Age" /> <br />
        <br />
        <input
          type="text"
          {...register("instractor")}
          placeholder="Instractor Name"
        />{" "}
        <br />
        <br />
        <input
          type="text"
          {...register("classDuration")}
          placeholder="Class Duration"
        />{" "}
        <br />
        <br />
        <input type="text" {...register("price")} placeholder="Price" /> <br />
        <br />
        <input
          type="text"
          {...register("learnMethod")}
          placeholder="Learning Style"
        />
        <br />
        <br />
        <input type="file" name="imageUrl" onChange={handleImageUpload} />{" "}
        <br />
        <br />
        {errors.exampleRequired && <span>This field is required</span>}
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddService;
