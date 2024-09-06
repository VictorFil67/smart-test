import styled from "styled-components";

export const Table = styled.table`
  border-collapse: collapse;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.16667;
  color: 1d1e21;
  border-radius: 8px;
  padding: 20px;
  width: 100%;
  border: none;
  & th {
    font-size: 16px;
    color: rgba(35, 36, 37, 0.5);
    padding: 10px;
    text-align: left;
    border: 1px solid rgba(29, 30, 33, 0.2);
  }
  & td {
    border: 1px solid rgba(29, 30, 33, 0.2);
    padding: 10px;
    white-space: nowrap;
  }
  & th {
  }
  & tr:hover {
    background-color: #f1f1f1;
  }
  /* & button {
    border: 1px solid rgba(89, 177, 122, 0.5);
    border-radius: 30px;
    padding: 8px 18px;
    width: 74px;
    height: 34px;
    background-color: transparent;
    color: var(--green);
    font-weight: 500;
    font-size: 16px;
    line-height: 1.125;
    text-align: center;
    text-decoration: none;
  }
  & button:hover {
    background-color: var(--green);
    color: var(--white);
  }
  @media screen and (min-width: 768px) {
    width: 704px;
    max-width: 100%;
    height: 512px;
  }
  @media screen and (min-width: 1440px) {
    width: 576px;
  } */
`;
