import {
  ProfileContainer,
  ProfileDescription,
  UserImg,
  UserName,
  UserInfo,
  Stats,
  Item,
  ItemLabel,
  ItemQuantity,
} from './Profile.styled';
import { FormatInt } from 'utils/FormatIntteger';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileContainer>
      <ProfileDescription>
        <UserImg src={avatar} alt="User avatar" />
        <UserName>{username}</UserName>
        <UserInfo>@{tag}</UserInfo>
        <UserInfo>{location}</UserInfo>
      </ProfileDescription>
      <Stats>
        <StatsItem label="Followers" quantity={stats.followers} />
        <StatsItem label="Views" quantity={stats.views} />
        <StatsItem label="Likes" quantity={stats.likes} />
      </Stats>
    </ProfileContainer>
  );
};

const StatsItem = ({ label, quantity }) => {
  return (
    <Item>
      <ItemLabel>{label}</ItemLabel>
      <ItemQuantity>{FormatInt(quantity)}</ItemQuantity>
    </Item>
  );
};
