import React, { useState } from "react";
import { useEffect } from "react";
import Testimonial from "../Testimonial/Testimonial";

const Testimonials = () => {
  const [reviews, setReview] = useState([]);

  useEffect(() => {
    fetch("https://still-mountain-61093.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReview(data);
      }, []);
  });
  return (
    <div className="container mt-5 ">
      <h3 className="text-center mt-5 ">Testimonial</h3>
      <div className="row">
        {reviews.map((review) => (
          <Testimonial review={review}></Testimonial>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
