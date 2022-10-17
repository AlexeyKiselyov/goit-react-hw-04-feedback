import { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from '../components/Section/Section';
import { Notification } from './Notification/Notification';
// ===========================

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = {
    good,
    neutral,
    bad,
  };

  const handleButton = e => {
    console.log(e.target.name);
    const { name } = e.target;
    switch (name) {
      case "good":
        setGood(pGood => pGood + 1);
        break;
      case "neutral":
        setNeutral(pNeutral => pNeutral + 1);
        break;
      case "bad":
        setBad(pBad => pBad + 1);
        break;

      default:
        return null;  
    }    
  };

  const countTotalFeedback = () => {
    return neutral + good + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const percent = Math.round((good * 100) / countTotalFeedback());
    if (Number.isNaN(percent)) return 0;
    return percent;
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} handleButton={handleButton} />
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
};