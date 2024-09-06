import styled from "styled-components";

export const Search = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  & label {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  & input {
    padding: 10px;
    border-radius: 20px;
    border: 1px solid rgba(29, 30, 33, 0.2);
    outline: transparent;
    &:focus-within {
      /* padding: 5px;
    border-radius: 15px; */
      border: 1px solid #a3b3ab;
    }
  }
`;
