import React, { useEffect } from "react";
import axios from "axios";

function Users() {
  const token = localStorage.getItem("token");
  useEffect(() => {
    axios
      .get("http://localhost:5006/api/users", {
        headers: {
          authorization: token,
        },
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(token));
  }, []);
  return (
    <div>
      <h1>User List</h1>
    </div>
  );
}
export default Users;
