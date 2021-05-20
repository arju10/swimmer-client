import React from "react";

const Testimonial = ({ review }) => {
  return (
    <div class="col-lg-4 col-md-6 col-12 mb-md--110 mt-5 ">
      <div class="border-gray border ps-2 border-2 rounded shadow-lg p-3 mb-5 bg-gray rounded">
        <h4>{review.name}</h4>
        <p>
          <small>{review.description}</small>
        </p>
      </div>
    </div>
  );
};

export default Testimonial;
