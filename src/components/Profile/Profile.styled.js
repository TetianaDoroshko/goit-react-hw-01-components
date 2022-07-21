import styled from 'styled-components';

export const ProfileContainer = styled.div`
  width: 220px;
  //   height: 300px;
  margin: 50px;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`;

export const ProfileDescription = styled.div`
  padding: 25px;
  text-align: center;
`;
export const UserImg = styled.img`
  //   display: block;
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;
export const UserName = styled.p`
  margin: 20px auto 10px;
  font-size: 18px;
  font-weight: 700;
  color: #303030;
`;
export const UserInfo = styled.p`
  margin-top: 10px;

  font-size: 14px;
  font-weight: 400;
  color: #999999;
`;

export const Stats = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  background-color: #e8edfaaa;
  font-size: 12px;
  line-height: 20px;
`;

export const Item = styled.li`
  padding: 10px 8px;
  width: 33.3333%;
  border: 1px solid #cdd8f3;
  text-align: center;
`;
export const ItemLabel = styled.span`
  display: block;
  color: #999999;
`;
export const ItemQuantity = styled.span`
  display: block;
  font-weight: 600;
`;
