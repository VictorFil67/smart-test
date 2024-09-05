import React, { useEffect } from "react";
// import logo from "./logo.svg";
import "./App.css";
import { useAppDispatch } from "./store/store";
import { getUsersThunk } from "./store/users/operations";
import { useSelector } from "react-redux";
import { selectUsers } from "./store/users/selectors";

function App() {
  const dispatch = useAppDispatch();
  const { users } = useSelector(selectUsers);
  console.log(users);

  useEffect(() => {
    dispatch(getUsersThunk())
      .unwrap()
      .then(() => console.log("Success!"))
      .catch((error) => console.log(error));
  }, [dispatch]);

  return (
    <div className="App">
      {" "}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Spent</th>
            <th>Medicine</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
