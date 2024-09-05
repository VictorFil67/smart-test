import React from "react";
import { useSelector } from "react-redux";
import { selectUsers } from "../../store/users/selectors";

export const UsersTable = () => {
  const { users } = useSelector(selectUsers);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Phone</th>
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
  );
};
