import styled from 'styled-components';

export const Table = styled.table`
  font-size: 12px;
  line-height: 2.5;
  width: 500px;
  text-align: center;
  border-collapse: collapse;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`;

export const TableHeader = styled.thead`
  background-color: #2eb9d1;
  color: white;
  font-weight: 400;
  text-transform: uppercase;
`;

export const TableHeaderCell = styled.th`
  width: 33.3333%;
  padding: 8px;
  font-weight: 500;
  border: 1px solid #ddddf9;
`;

export const TableBody = styled.tbody`
  color: #757575;
  background-color: white;
  & > tr:nth-child(even) {
    background-color: #eeeef9;
  }
`;

export const TableRow = styled.tr`
  & :nth-child(1) {
    padding-left: 60px;
    text-align: start;
  }
`;
export const TableData = styled.td`
  border-right: 1px solid #ddddf9;
`;
