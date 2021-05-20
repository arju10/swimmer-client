import React, { useState, useEffect } from "react";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";
const AdminList = () => {
  const [admins, setAdmin] = useState([]);
  useEffect(() => {
    const uri = `https://still-mountain-61093.herokuapp.com/admins`;
    fetch(uri)
      .then((res) => res.json())
      .then((data) => setAdmin(data));
  }, []);
  return (
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Email Address</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {admins.map((item) => (
          <tr key={item.id}>
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
  );
};

export default AdminList;
