import styled from 'styled-components';

export const List = styled.ul`
  width: 220px;
  list-style: none;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  padding: 5px 10px;
  background-color: #ffffff;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

  & :last-child {
    margin-bottom: 0px;
  }
`;

export const Status = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${props => (props.status ? 'green' : 'red')};
`;
export const Avatar = styled.img`
  width: ${props => props.width}px;
  height: ${props => props.width}px;
  border-radius: 5px;
  margin: 0 10px;
`;
export const UserName = styled.p`
  font-size: 20px;
  font-weight: 500;
`;
