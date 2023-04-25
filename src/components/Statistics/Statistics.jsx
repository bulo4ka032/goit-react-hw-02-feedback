import React from 'react';
import PropTypes from 'prop-types';
import { StatList, StatItem, Indicator } from './Statistics.styled';

export const Statistics = ({ good = 0, neutral = 0, bad = 0, total = 0, positivePercentage = 0 }) => (
    <StatList>
      <StatItem><Indicator prop={'good'}></Indicator> Good: {good}</StatItem>
      <StatItem><Indicator prop={'neutral'}></Indicator>Neutral: {neutral}</StatItem>
      <StatItem><Indicator prop={'bad'}></Indicator>Bad: {bad}</StatItem>
      <StatItem>&#128064; Total: {total}</StatItem>
      <StatItem>&#127752; PositiveFeedback: {positivePercentage}%</StatItem>
    </StatList> 
);

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
