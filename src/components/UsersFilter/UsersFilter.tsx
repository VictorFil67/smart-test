import { ChangeEvent } from "react";
import { useAppDispatch } from "../../store/store";
import { useSelector } from "react-redux";
import { selectUsers } from "../../store/users/selectors";
import {
  setFilteredEmail,
  setFilteredName,
  setFilteredPhone,
  setFilteredUsername,
} from "../../store/users/slice";
import { Search } from "./UsersFilter.Styled";

export const UsersFilter = () => {
  const dispatch = useAppDispatch();
  const { filteredName, filteredUsername, filteredEmail, filteredPhone } =
    useSelector(selectUsers);

  // const handleSetFilter = (e) => {
  //   dispatch(setFilterAction(e.target.value));
  // };
  function handleSetFilter(e: ChangeEvent<HTMLInputElement>) {
    switch (e.target.name) {
      case "name":
        dispatch(setFilteredName(e.target.value));
        break;
      case "username":
        dispatch(setFilteredUsername(e.target.value));
        break;
      case "email":
        dispatch(setFilteredEmail(e.target.value));
        break;
      case "phone":
        dispatch(setFilteredPhone(e.target.value));
        break;
      default:
        break;
    }
  }

  return (
    <Search>
      <label>
        Name
        <input
          type="text"
          name="name"
          placeholder="Enter the name"
          onChange={handleSetFilter}
          value={filteredName}
        />
      </label>
      <label>
        Username
        <input
          type="text"
          name="username"
          placeholder="Enter the username"
          onChange={handleSetFilter}
          value={filteredUsername}
        />
      </label>
      <label>
        Email
        <input
          type="text"
          name="email"
          placeholder="Enter the email"
          onChange={handleSetFilter}
          value={filteredEmail}
        />
      </label>
      <label>
        Phone
        <input
          type="text"
          name="phone"
          placeholder="Enter the phone"
          onChange={handleSetFilter}
          value={filteredPhone}
        />
      </label>
    </Search>
  );
};
