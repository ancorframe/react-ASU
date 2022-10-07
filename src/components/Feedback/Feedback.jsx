import React from 'react';
import { FeedbackOptions } from './FeedbackOptions';
import { FeedbackStatistics } from './FeedbackStatistics';
import { Title } from './Feedback.styled';

export class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage() {
    return Math.round(
      this.countTotalFeedback() &&
        (this.state.good / this.countTotalFeedback()) * 100
    );
  }

  onHandleGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };
  onHandleNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };
  onHandleBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  render() {
    return (
      <div>
        <Title>Please leave feedback</Title>
        <FeedbackOptions
          onHandleGood={this.onHandleGood}
          onHandleNeutral={this.onHandleNeutral}
          onHandleBad={this.onHandleBad}
        />
        <Title>Statistics</Title>
        {this.countTotalFeedback() ? (
          <FeedbackStatistics
            state={this.state}
            TotalFeedback={this.countTotalFeedback()}
            PositiveFeedbackPercentage={this.countPositiveFeedbackPercentage()}
          />
        ) : (
          <p>There is no feedback</p>
        )}
      </div>
    );
  }
}
