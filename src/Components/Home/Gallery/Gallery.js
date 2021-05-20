import React from "react";
import "./Gallery.css";
import project_1 from "../../../images/project_1.jpg";
import project_2 from "../../../images/project_2.jpg";
import project_3 from "../../../images/project_3.jpg";
import project_4 from "../../../images/project_4.jpg";

const Gallery = () => {
  return (
    <div className="container">
      <h1 className="text-center pt-5">Projects</h1>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col shadow-lg p-3 mb-5 bg-white rounded">
          <div class="card h-100">
            <img src={project_1} />
            <div class="card-body">
              <h5 class="card-title">Mini</h5>
              <p class="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur blanditiis aliquid veritatis temporibus dolore! Fuga
                nihil blanditiis sit necessitatibus quia.
              </p>
            </div>
          </div>
        </div>
        <div class="col shadow-lg p-3 mb-5 bg-white rounded">
          <div class="card h-100">
            <img src={project_2} />
            <div class="card-body">
              <h5 class="card-title">Adult</h5>
              <p class="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
                id tempore expedita quisquam laborum tenetur sunt officia
                voluptatum est maxime!
              </p>
            </div>
          </div>
        </div>
        <div class="col shadow-lg p-3 mb-5 bg-white rounded">
          <div class="card h-100">
            <img src={project_3} />
            <div class="card-body">
              <h5 class="card-title">Toddler</h5>
              <p class="card-text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius a
                tempore accusamus facere quas rem at nihil doloribus? Illum,
                nesciunt.
              </p>
            </div>
          </div>
        </div>
        <div class="col shadow-lg p-3 mb-5 bg-white rounded">
          <div class="card h-100">
            <img src={project_4} />
            <div class="card-body">
              <h5 class="card-title">Pro Adult</h5>
              <p class="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
                assumenda praesentium laboriosam soluta officia facere voluptas
                error laborum et repellendus!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
