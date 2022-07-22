import styled from 'styled-components';
import { getRandomHexColor } from 'utils/getRandomColor';

export const StatsContainer = styled.section`
  width: 280px;
  margin-bottom: 50px;
  background-color: #ffffff;
`;

export const StatsTitle = styled.h2`
  padding: 25px 10px;
  font-size: 18px;
  font-weight: 500;
  text-transform: uppercase;
  color: #707070;

  text-align: center;
`;

export const StatList = styled.ul`
  display: flex;
  list-style: none;
`;

export const Item = styled.li`
  width: 20%;
  color: #ffffff;
  padding: 5px;
  text-align: center;
  background-color: ${getRandomHexColor};
`;

export const ItemValue = styled.span`
  display: block;
  font-size: ${props => (props.label ? '12px' : '16px')};
  line-height: 1.6;
`;
