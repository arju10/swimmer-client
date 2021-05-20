import React, { useState, useEffect } from "react";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";
import Navbar from "../../../Home/Navbar/Navbar";
import Sidebar from "../../../Sidebar/Sidebar";
const ManageInventory = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://still-mountain-61093.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <Navbar />
      <Sidebar />

      <table class="table table-striped">
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Instractor</th>
            <th>Age</th>
            <th>Price</th>
            <th>Class Number</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {services.map((item) => (
            <tr key={item.id}>
              <td>{item.courseName}</td>
              <td>{item.instractor}</td>
              <td>{item.age}</td>
              <td>{item.price}</td>
              <td>{item.classDuration}</td>
              <td>
              <button style={{ border: "none", background: "none" }}>
                <DeleteForeverIcon  className = "text-danger"></DeleteForeverIcon>
              </button>
              &nbsp;
              <button style={{ border: "none", background: "none" }} >
                <EditIcon className="primary text-primary"></EditIcon>
              </button>
              </td>
              <td />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageInventory;
