import React from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions.jsx';
import { Statistics } from './Statistics/Statistics';
import { NotificationMessage } from './NotificationMessage/NotificationMessage.jsx';
import { FeedbackForm, FbTitle, StatTitle, FbWrapper } from './Feedback.styled.jsx';

export class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = key => {
    this.setState(prevState => ({
      [key]: prevState[key] + 1,
    }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    if (this.state.good === 0) return '0';
    return ((this.state.good / this.countTotalFeedback()) * 100).toFixed(1);
  };

  render() {
    const options = Object.keys(this.state);
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <FeedbackForm>
        <FbWrapper>
          <FbTitle>Please leave feedback</FbTitle>
          <FeedbackOptions options={options} handleClick={this.handleClick} />
        </FbWrapper>
        <FbWrapper>
        <StatTitle>Statistics</StatTitle>
        {!total ? (
          <NotificationMessage message="There is no feedback yet" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        )}</FbWrapper>
      </FeedbackForm>
    );
  }
}
