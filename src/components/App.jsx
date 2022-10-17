import React, { Component } from "react";
import { Statistics } from "./Statistics/Statistics";
import {FeedbackOptions} from './FeedbackOptions/FeedbackOptions';
import {Section} from '../components/Section/Section';
import { Notification } from "./Notification/Notification";
// ===========================

export class App extends Component{
  state = {
  good: 0,
  neutral: 0,
  bad: 0
  }

  handleButton = (e) => {
    const { name } = e.target;
    this.setState(prevState=>({
      [name]: prevState[name]+1
    }))
  }

  countTotalFeedback = () => { 
    const { good, neutral, bad } = this.state; 
    return (neutral + good + bad);
  }
  
  countPositiveFeedbackPercentage = () => {
    const percent = Math.round((this.state.good * 100) / this.countTotalFeedback());
    if (Number.isNaN(percent)) return 0;
    return percent;
  };
  
  render() {
    const { good, neutral, bad } = this.state;   
    
    return (
      <>
      <Section title="Please leave feedback" >
        <FeedbackOptions options={this.state} handleButton={this.handleButton}/>
      </Section>

      <Section title="Statistics">
        {this.countTotalFeedback()
        ?<Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback} positivePercentage={this.countPositiveFeedbackPercentage}/>
        :<Notification message="There is no feedback"/>
        }               
      </Section>      
      </>
    );  
      
  }
};








/* <h2>Please leave feedback</h2>
        <button type="button" name="good" onClick={this.handleButton}>Good</button>
        <button type="button" name="neutral" onClick={this.handleButton}>Neutral</button>
        <button type="button" name="bad" onClick={this.handleButton}>Bad</button> */
/*
 handleGoodIncrement = () => {
    this.setState({
      good: this.state.good + 1
    });
  }

  handleNeutralIncrement = () => {
    this.setState({
      neutral: this.state.neutral + 1
    });
  }

  handleBadIncrement = () => {
    this.setState({
      bad: this.state.bad + 1
    });
  }*/


  /* <h3>Statistics</h3>
        <p>Good:<span>{good}</span></p>
        <p>Neutral:<span>{neutral}</span></p>
        <p>Bad:<span>{bad}</span></p>
        <p>Total:<span>{this.countTotalFeedback()}</span></p>
        <p>Positive feedback:<span>{this.countPositiveFeedbackPercentage()}%</span></p> */