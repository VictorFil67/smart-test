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
`;
