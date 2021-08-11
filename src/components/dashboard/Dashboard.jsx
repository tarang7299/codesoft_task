import React from "react";
import "./dashboard.css";
import { withRouter } from "react-router";
// import Sidebar from "../sidebar/Sidebar";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="right">
        <h2>Content</h2>
      </div>
    </div>
  );
};
export default withRouter(Dashboard);
