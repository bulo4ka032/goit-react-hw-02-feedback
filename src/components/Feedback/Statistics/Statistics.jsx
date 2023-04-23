import React from 'react';
import { StatList, StatItem, Indicator } from './Statistics.styled';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
    <StatList>
      <StatItem><Indicator prop={'good'}></Indicator> Good: {good}</StatItem>
      <StatItem><Indicator prop={'neutral'}></Indicator>Neutral: {neutral}</StatItem>
      <StatItem><Indicator prop={'bad'}></Indicator>Bad: {bad}</StatItem>
      <StatItem>&#128064; Total: {total}</StatItem>
      <StatItem>&#127752; PositiveFeedback: {positivePercentage}%</StatItem>
    </StatList> 
);

