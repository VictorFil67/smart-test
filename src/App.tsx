import React, { useEffect } from "react";
// import logo from "./logo.svg";
import "./App.css";
import { useAppDispatch } from "./store/store";
import { getUsersThunk } from "./store/users/operations";
// import { useSelector } from "react-redux";
// import { selectUsers } from "./store/users/selectors";
import { UsersTable } from "./components/UsersTable/UsersTable";
import { UsersFilter } from "./components/UsersFilter/UsersFilter";

function App() {
  const dispatch = useAppDispatch();
  // const { users } = useSelector(selectUsers);
  // console.log(users);

  useEffect(() => {
    dispatch(getUsersThunk())
      .unwrap()
      .then(() => console.log("Success!"))
      .catch((error) => console.log(error));
  }, [dispatch]);

  return (
    <div className="App">
      <UsersFilter />
      <UsersTable />
    </div>
  );
}

export default App;
