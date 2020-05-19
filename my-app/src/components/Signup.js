import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

function SignUp() {
  const [signUpData, setSignUpData] = useState({
    username: "",
    department: "",
    password: "",
  });
  const { push } = useHistory();
  const handleChanges = (event) => {
    setSignUpData({
      ...signUpData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5006/api/register", signUpData)
      .then((res) => {
        console.log("sign up successfully");
        window.localStorage.setItem("token", res.data.token);
        push("/users");
      })
      .catch((err) => console.log({ err }));
  };

  return (
    <div>
      <h1>Register</h1>
      <input
        id="username"
        name="username"
        type="text"
        placeholder="Username"
        value={signUpData.username}
        onChange={handleChanges}
      />
      <input
        id="password"
        name="password"
        type="password"
        placeholder="Password"
        value={signUpData.password}
        onChange={handleChanges}
      />
      <input
        id="department"
        name="department"
        type="department"
        placeholder="department"
        value={signUpData.department}
        onChange={handleChanges}
      />
      <button onClick={handleSubmit}>submit</button>
    </div>
  );
}
export default SignUp;
