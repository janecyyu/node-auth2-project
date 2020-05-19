import React, { useEffect, useState } from "react";
import axios from "axios";

function Users() {
  const [users, setUsers] = useState([]);
  const token = localStorage.getItem("token");
  useEffect(() => {
    axios
      .get("http://localhost:5006/api/users", {
        headers: {
          authorization: token,
        },
      })
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(token));
  }, []);
  return (
    <div>
      <h1>User List</h1>
      <div>
        {users.map((u) => (
          <h3>{u.username}</h3>
        ))}
      </div>
    </div>
  );
}
export default Users;
