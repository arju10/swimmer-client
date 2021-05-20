import React, { useState, useEffect, useContext } from "react";
import ServiceDetails from "../ServiceDetails/ServiceDetails";
import serviceIconOne from "../../../images/service_icon_1.png";
import serviceIconTwo from "../../../images/service_icon_2.png";
import serviceIconThree from "../../../images/service_icon_3.png";

const Services = () => {
  // const serviceData = [
  //   {
  //     SwimmClass: "MINI",
  //     InstractorName: "Adom Jonson",
  //     instractorImage : '',
  //     TotalClass: "15",
  //     learnType: "Group Lesson",
  //     price: "95",
  //     photo: serviceIconOne,
  //     background: "#f6f6f6",
  //     Age: "2/3-4",
  //   },
  //   {
  //     SwimmClass: "TODDLER",
  //     InstractorName: "Adom Jonson",
  //     TotalClass: "10",
  //     learnType: "Group Lesson",
  //     price: "75",
  //     photo: serviceIconTwo,
  //     background: "#f6f6f6",
  //     Age: "3/4-5",
  //   },
  //   {
  //     SwimmClass: "ADULT",
  //     InstractorName: "Adom Jonson",
  //     TotalClass: "10",
  //     learnType: "Group Lesson",
  //     price: "70",
  //     photo: serviceIconThree,
  //     background: "#f6f6f6",
  //     Age: "5/6-12",
  //   },
  // ];

  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://still-mountain-61093.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="container">
      <h3 className="text-center pt-5">Courses</h3>
      <div className="row">
        {services.map((service) => (
          <ServiceDetails service={service}></ServiceDetails>
        ))}
      </div>
    </div>
  );
};

export default Services;
