import React, { createContext, useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import Home from "./Components/Home/Home/Home";
import Login from "./Components/Login/Login/Login";
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";
import Booking from "./Components/Appoinment/Booking/Booking";
import BookingList from "./Components/Dashboard/BookingList/BookingList";
import Review from "./Components/Dashboard/Review/Review";

import Admin from "./Components/Dashboard/Admin/Admin/Admin";
import AddService from "./Components/Dashboard/Admin/AddService/AddService";
import ManageInventory from "./Components/Dashboard/Admin/ManageInventory/ManageInventory";
import OrderList from "./Components/Dashboard/Admin/OrderList/OrderList";
import AddAdmin from "./Components/Dashboard/Admin/AddAdmin/AddAdmin";

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Login />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/dashboard/booking">
            <Booking />
          </Route>
          <Route path="/dashboard/bookinglist">
            <BookingList />
          </Route>
          <Route path="/dashboard/review">
            <Review />
          </Route>
          <Route exact path="/admin">
            <Admin />
          </Route>

          <Route path="/admin/makeAdmin">
            <AddAdmin />
          </Route>
          <Route path="/dashboard/addService">
            <AddService />
          </Route>
          <Route path="/admin/manageService">
            <ManageInventory />
          </Route>
          <Route path="/admin/orderList">
            <OrderList />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
