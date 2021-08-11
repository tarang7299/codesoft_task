import React from "react";
import "./sidebar.css";
import { PermIdentity } from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <Link to="/user">
          <li className="sidebarList">
            <PermIdentity />
            Users
          </li>
        </Link>
      </ul>
    </div>
  );
}
