import { PropTypes } from 'prop-types';
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

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number),
};

StatsItem.propTypes = {
  label: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};
