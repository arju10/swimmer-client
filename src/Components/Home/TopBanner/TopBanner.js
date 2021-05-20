import React from "react";
import topBannerFirt from "../../../images/top_banner_1.jpg";
import topBannerSecond from "../../../images/top_banner_2.jpg";
import topBannerThird from "../../../images/top_banner_3.jpg";

const TopBanner = () => {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        class="carousel slide header__container "
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={topBannerFirt} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Swimming</h5>
              <h1>A HEALTHY ACTIVITY FOR YOUR KIDS</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis,
                fugiat!
              </p>
              
            </div>
          </div>
          <div class="carousel-item">
            <img src={topBannerSecond} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Swimming</h5>
              <h1>A HEALTHY ACTIVITY FOR YOUR KIDS</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis,
                fugiat!
              </p>
              
            </div>
          </div>
          <div class="carousel-item">
            <img src={topBannerThird} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Swimming</h5>
              <h1>A HEALTHY ACTIVITY FOR YOUR KIDS</h1>
              <p >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis,
                fugiat!
              </p>
              
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default TopBanner;
