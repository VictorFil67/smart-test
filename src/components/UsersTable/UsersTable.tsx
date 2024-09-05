import React from "react";
import { useSelector } from "react-redux";
import { selectUsers } from "../../store/users/selectors";
import { Table } from "./UsersTable.Styled";

export const UsersTable = () => {
  const { users } = useSelector(selectUsers);
  const { filteredName, filteredUsername, filteredEmail, filteredPhone } =
    useSelector(selectUsers);

  const getFilteredUsers = () => {
    return users.filter(
      (user) =>
        user.name.toLowerCase().includes(filteredName.toLowerCase()) &&
        user.username.toLowerCase().includes(filteredUsername.toLowerCase()) &&
        user.email.toLowerCase().includes(filteredEmail.toLowerCase()) &&
        user.phone.toLowerCase().includes(filteredPhone.toLowerCase())
    );
  };

  return (
    <Table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {getFilteredUsers()?.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            {/* <td></td> */}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
