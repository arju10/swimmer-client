import React, { useState, useEffect, useContext } from "react";
import ServiceDetails from "../ServiceDetails/ServiceDetails";
import serviceIconOne from "../../../images/service_icon_1.png";
import serviceIconTwo from "../../../images/service_icon_2.png";
import serviceIconThree from "../../../images/service_icon_3.png";

const Services = () => {
  

  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://morning-brook-97610.herokuapp.com/services")
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
