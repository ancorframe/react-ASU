import { StatisticItem } from "./Feedback.styled";

export const FeedbackStatistics = ({
  state,
  TotalFeedback,
  PositiveFeedbackPercentage,
}) => {
  return (
    <ul>
      <StatisticItem>
        <p>Good: {state.good}</p>
      </StatisticItem>
      <StatisticItem>
        <p>Neutral: {state.neutral}</p>
      </StatisticItem>
      <StatisticItem>
        <p>Bad: {state.bad}</p>
      </StatisticItem>
      <StatisticItem>
        <p>Total: {TotalFeedback}</p>
      </StatisticItem>
      <StatisticItem>
        <p>Posiitve feedback: {PositiveFeedbackPercentage}%</p>
      </StatisticItem>
    </ul>
  );
};
