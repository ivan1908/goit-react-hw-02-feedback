import { Component } from 'react';
import { FeedBackOptions } from "./FeedBackOptions/FeedBackOptions";
import { Notification } from "./Notification/Notification";
import { Section}  from "./Section/Section";
import { Statistics } from "./Statistics/Statistics";

export class App extends Component  {
  state = {
		Good: 0,
		Neutral: 0,
		Bad: 0
  };
  
 countTotalFeedback = () => {
    const { Good, Neutral, Bad } = this.state;
    return Good + Neutral + Bad;
  };

  countPositiveFeedbackPercentage = () => {
    const result = this.countTotalFeedback();
		const { Good } = this.state;
		const percentage = (Good * 100) / result;
		return Math.round(percentage);
	};
  
	onLeaveFeedback = option => {
		this.setState(state => ({
			[option]: state[option] + 1,
		}));
	};

  render() {
    const { Good, Neutral, Bad } = this.state;
    const Total = this.countTotalFeedback();
    const PositivePercentage = this.countPositiveFeedbackPercentage();
    const options = Object.keys(this.state);

    return (
      <>
        <Section title="Please leave feedback">
          <FeedBackOptions options={options} onLeaveFeedback={this.onLeaveFeedback} />
        </Section>
        <Section title="Statistics">
        {Total === 0 ? (
          <Notification message="No feedback given"/>
        ) : (
            <Statistics
              good={Good}
              neutral={Neutral}
              bad={Bad}
              total={Total}
              positivePercentage={PositivePercentage}
            />
          )}
        </Section>
      </>
    )
  }
};