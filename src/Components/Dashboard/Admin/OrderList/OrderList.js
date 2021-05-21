import React, { useState, useEffect } from "react";
import Navbar from "../../../Home/Navbar/Navbar";
import Sidebar from "../../../Sidebar/Sidebar";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";
const OrderList = () => {
  const [ordersList, setOrdersList] = useState([]);
  useEffect(() => {
    fetch(`https://morning-brook-97610.herokuapp.com/bookings`)
      .then((res) => res.json())
      .then((data) => setOrdersList(data));
  }, []);
  return (
    <div class="container">
      <Navbar />
      <Sidebar />
      <h1>All Booking List</h1>

      <table class="table table-striped">
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {ordersList.map((item) => (
            <tr key={item.id}>
              <td>{item.stName}</td>
              <td>{item.stAge}</td>
              <td>{item.email}</td>
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

export default OrderList;
