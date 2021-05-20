import React from "react";
import "./Instractor.css";
import instractor_1 from "../../../images/instractor_1 (1).jpg";
import instractor_2 from "../../../images/instractor_1 (2).jpg";
import instractor_3 from "../../../images/instractor_1 (3).jpg";

const Instractor = () => {
  return (
    <div class="container mt-5">
      <h3 class="text-center">Instractor</h3>
      <div class="row mt-40">
        <div class="col-md-4 col-sm-6">
          <div class="box1">
            <img src={instractor_1} alt="" />
            <h3 class="title">Williamson</h3>
            <ul class="icon">
              <li>
                <a href="#">
                  <i class="fa fa-search"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-link"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-4 col-sm-6">
          <div class="box1">
            <img src={instractor_2} alt="" class="img-thumbn" />
            <h3 class="title">Kristiana</h3>
            <ul class="icon">
              <li>
                <a href="#">
                  <i class="fa fa-search"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-link"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-4 col-sm-6">
          <div class="box1">
            <img src={instractor_3} alt="" />
            <h3 class="title">Monalisa</h3>
            <ul class="icon">
              <li>
                <a href="#">
                  <i class="fa fa-search"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-link"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instractor;
