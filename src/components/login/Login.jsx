import React, { useState } from "react";
import "./login.css";
import { useHistory } from "react-router";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { withRouter } from "react-router";
function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();

  return (
    <div className="login">
      <div style={{ paddingTop: "15px" }}>
        <TextField
          onChange={(e) => setUserName(e.target.value)}
          required
          id="standard-required"
          label="Email"
        />
      </div>
      <div style={{ paddingTop: "5px" }}>
        <TextField
          onChange={(e) => setPassword(e.target.value)}
          id="standard-password-input"
          label="Password"
          type="password"
        />
      </div>
      <div style={{ paddingTop: "5px" }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            console.log("submitted", userName, password);
            if (userName === "admin@admin.com" && password === "1234") {
              console.log("you have logged in sucessfully");
              localStorage.setItem("token", "abc123@pq");
              history.push("/dashboard");
            } else {
              console.log("please try gain");
            }
          }}
        >
          Submit
        </Button>
      </div>
    </div>
  );
}

export default withRouter(Login);
