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
      <input
        type="text"
        name="name"
        onChange={handleSetFilter}
        value={filteredName}
      />
      <input
        type="text"
        name="username"
        onChange={handleSetFilter}
        value={filteredUsername}
      />
      <input
        type="text"
        name="email"
        onChange={handleSetFilter}
        value={filteredEmail}
      />
      <input
        type="text"
        name="phone"
        onChange={handleSetFilter}
        value={filteredPhone}
      />
    </Search>
  );
};
