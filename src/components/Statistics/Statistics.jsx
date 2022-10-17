import PropTypes from 'prop-types';
import {StatisticParagraph,StatisticSpan} from './Statistics.styled';
// ======================
export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <StatisticParagraph>Good:<StatisticSpan>{good}</StatisticSpan></StatisticParagraph>
      <StatisticParagraph>Neutral:<StatisticSpan>{neutral}</StatisticSpan></StatisticParagraph>
      <StatisticParagraph>Bad:<StatisticSpan>{bad}</StatisticSpan></StatisticParagraph>
      <StatisticParagraph>Total:<StatisticSpan>{total()}</StatisticSpan></StatisticParagraph>
      <StatisticParagraph>Positive feedback:<StatisticSpan>{positivePercentage()}%</StatisticSpan></StatisticParagraph>
    </>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired, 
}

