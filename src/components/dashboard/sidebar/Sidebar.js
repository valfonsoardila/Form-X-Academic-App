import React, { useState } from "react";
import { resources } from "../../../assets/resources";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import "./Sidebar.css";

const Sidebar = () => {
  const [hover, setHover] = useState(false);
  const changeHover = () => {
    setHover(!hover);
  };
  return (
    <div
      className="container-sidebar"
      onMouseEnter={changeHover}
      onMouseLeave={changeHover}
    >
      <div className="sidebar-logo" style={{ height: hover ? "0%" : "15%" }}>
        <img src={resources.logo} alt="logo" />
        <h1 style={{ display: hover ? "none" : "block" }}>Dashboard</h1>
      </div>
      <div className="profile">
        <img src={resources.user} alt="profile" />
        <h1>Admin</h1>
      </div>
      <div className="sidebar-menu">
        <div className="sidebar-title">
          <span>Menu</span>
        </div>
        <div className="sidebar-menu-item"></div>
        <div className="sidebar-menu-item"></div>
        <div className="sidebar-menu-item">
          <FontAwesomeIcon icon={faCog} />
          <span style={{ display: hover ? "flex" : "none" }}>Ajustes</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
