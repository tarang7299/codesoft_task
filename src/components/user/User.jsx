import React from "react";
import { useState, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { withRouter } from "react-router";

function User() {
  const [users, setUsers] = useState([]);

  const axiosCalling = () => {
    const axios = require("axios");
    axios.get("https://reqres.in/api/users?page=2").then((apiUserData) => {
      console.log("Users ::", apiUserData.data.data);
      setUsers(apiUserData.data.data);
    });
  };

  useEffect(() => {
    axiosCalling();
  }, []);

  console.log("outside ", users);

  const columns = [
    { field: "id", headerName: "ID", width: 130 },
    {
      field: "first_name",
      headerName: "First name",
      width: 150,
      editable: true,
    },
    {
      field: "last_name",
      headerName: "Last name",
      width: 150,
      editable: true,
    },
    {
      field: "email",
      headerName: "Email",
      type: "number",
      width: 150,
      editable: true,
    },
  ];

  return (
    <div className="user col-8">
      <h2>User Detail</h2>

      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={users}
          columns={columns}
          pageSize={3}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </div>
  );
}

export default withRouter(User);
