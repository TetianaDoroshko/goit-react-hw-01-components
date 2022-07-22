import { PropTypes } from 'prop-types';
import {
  StatsContainer,
  StatsTitle,
  StatList,
  Item,
  ItemValue,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatsContainer>
      {title && <StatsTitle>{title}</StatsTitle>}
      <StatList>
        {stats.map(item => (
          <StatsItem key={item.id} statItem={item} />
        ))}
      </StatList>
    </StatsContainer>
  );
};

export const StatsItem = ({ statItem }) => {
  return (
    <Item key={statItem.id}>
      <ItemValue label={statItem.label}>{statItem.label}</ItemValue>
      <ItemValue percentage={statItem.percentage}>
        {statItem.percentage}%
      </ItemValue>
    </Item>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};

StatsItem.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};
