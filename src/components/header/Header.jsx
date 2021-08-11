import React from "react";
import { useHistory } from "react-router-dom";
import "./header.css";

export default function Header() {
  const history = useHistory();
  return (
    <div>
      <div className="header">
        <div className="headerLeft">Users</div>
        <div className="headerRight">
          <h6
            onClick={() => {
              history.push("/");
              localStorage.clear();
            }}
          >
            Logout
          </h6>
        </div>
      </div>
    </div>
  );
}
