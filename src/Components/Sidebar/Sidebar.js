import React, { useContext, useEffect, useState } from "react";
import { Link,NavLink } from "react-router-dom";

import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';

const Sidebar = () => {
  return (
    <div>
      <Link to="/dashboard" class="btn btn-primary">
        <button type="button" class="btn btn-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-app-indicator"
            viewBox="0 0 16 16"
          >
            <path d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1H5.5z" />
            <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
          </svg>
          &nbsp;
          Dashboard
        </button>
      </Link>
      <Link to="/admin/orderList" class="btn btn-primary">
        <button type="button" class="btn btn-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
          &nbsp;
          Booking List
        </button>
      </Link>
      <Link to="/dashboard/addService" class="btn btn-primary">
        <button type="button" class="btn btn-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-bag-plus"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
            />
            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
          </svg>
          &nbsp;
          Add Service
        </button>
      </Link>
      <Link to="/admin/makeAdmin" class="btn btn-primary">
        <button type="button" class="btn btn-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-people-fill"
            viewBox="0 0 16 16"
          >
            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
            <path
              fill-rule="evenodd"
              d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"
            />
            <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
          </svg>
          &nbsp;
          Make Admin
        </button>
      </Link>

      <Link to="/admin/manageService" class="btn btn-primary">
        <button type="button" class="btn btn-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-kanban-fill"
            viewBox="0 0 16 16"
          >
            <path d="M2.5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2h-11zm5 2h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm-5 1a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3zm9-1h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z" />
          </svg>
          &nbsp;
          Manage Service
        </button>
      </Link>
    </div>

    // <div
    //   style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}
    // >
    //   <CDBSidebar textColor="#fff" backgroundColor="#0148bc">
    //     <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
    //       <a
    //         href="/"
    //         className="text-decoration-none"
    //         style={{ color: 'inherit' }}
    //       >
    //         Sidebar
    //       </a>
    //     </CDBSidebarHeader>

    //     <CDBSidebarContent className="sidebar-content">
    //       <CDBSidebarMenu>
    //         <NavLink exact to="/dashboard" activeClassName="activeClicked">
    //           <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
    //         </NavLink>
    //         <NavLink exact to="/admin/orderList" activeClassName="activeClicked">
    //           <CDBSidebarMenuItem icon="table">Booking List</CDBSidebarMenuItem>
    //         </NavLink>
    //         <NavLink exact to="/dashboard/addService" activeClassName="activeClicked">
    //           <CDBSidebarMenuItem icon="user">Add Service</CDBSidebarMenuItem>
    //         </NavLink>
    //         <NavLink exact to="/admin/makeAdmin" activeClassName="activeClicked">
    //           <CDBSidebarMenuItem icon="user ">
    //             Make Admin
    //           </CDBSidebarMenuItem>
    //         </NavLink>

    //         <NavLink
    //           exact
    //           to="/admin/manageService"
    //           target="_blank"
    //           activeClassName="activeClicked"
    //         >
    //           <CDBSidebarMenuItem icon="exclamation-circle">
    //            Manage Service
    //           </CDBSidebarMenuItem>
    //         </NavLink>
    //       </CDBSidebarMenu>
    //     </CDBSidebarContent>

    //     <CDBSidebarFooter style={{ textAlign: 'center' }}>
    //       <div
    //         style={{
    //           padding: '20px 5px',
    //         }}
    //       >
    //         Sidebar Footer
    //       </div>
    //     </CDBSidebarFooter>
    //   </CDBSidebar>
    // </div>
  );
};

export default Sidebar;
