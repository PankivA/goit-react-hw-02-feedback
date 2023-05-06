import React, { Component } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import Statistics from './Statistics/Statistics';

export class App extends Component {
    state = {
        Good: 0,
        Neutral: 0,
        Bad: 0,
    };

    feedbackButton = buttonValue => {
        this.setState(prevState => ({
            [buttonValue]: prevState[buttonValue] + 1,
        }));
    };

    countTotalFeedback = () => {
        const { Good, Neutral, Bad } = this.state;
        return Good + Neutral + Bad;
    };

    countPositiveFeedbackPercentage = () => {
        const total = this.countTotalFeedback();
        if (total > 0) {
            return Math.round((this.state.Good / total) * 100);
        } else {
            return 0;
        }
    };

    render() {
        const { Good, Neutral, Bad } = this.state;
        const totalFeedbacks = this.countTotalFeedback();
        const positivePercentage = this.countPositiveFeedbackPercentage();

        return (
            <>
                <Section title="Please leave feedback">
                    <FeedbackOptions
                        options={['Good', 'Neutral', 'Bad']}
                        feedbackButton={this.feedbackButton}
                    />
                </Section>

                <Section title="Statistics">
                    {totalFeedbacks > 0 ? (
                        <Statistics
                            good={Good}
                            neutral={Neutral}
                            bad={Bad}
                            total={totalFeedbacks}
                            positiveFeedback={positivePercentage}
                        />
                    ) : (
                        <Notification message="There is no feedback" />
                    )}
                </Section>
                </>
        );
    }
}
