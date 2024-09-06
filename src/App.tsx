import React, { useEffect } from "react";
import "./App.css";
import { useAppDispatch } from "./store/store";
import { getUsersThunk } from "./store/users/operations";
import { UsersTable } from "./components/UsersTable/UsersTable";
import { UsersFilter } from "./components/UsersFilter/UsersFilter";

function App() {
  const dispatch = useAppDispatch();

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
