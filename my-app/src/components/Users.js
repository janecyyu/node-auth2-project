import React, { useEffect } from "react";
import axios from "axios";

function Users() {
  useEffect(() => {
    axios
      .get("http://localhost:5006/api/users")
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h1>User List</h1>
    </div>
  );
}
export default Users;
