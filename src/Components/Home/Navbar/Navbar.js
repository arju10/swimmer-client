import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.png";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light ">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/home">
            <img src={logo} alt="" />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-auto">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/home">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Courses
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Instractor
                </a>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/login">
                  Register
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/dashboard">
                  Dashboard
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/admin">
                  Admin
                </Link>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Contract
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
