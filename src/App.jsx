import React, { Component } from 'react';
import Day2Day from './containers/Day2Day';
import Mobile from './containers/Mobile';
import SalesForce from './containers/SalesForce';
import LogBook from './containers/LogBook';
import FleetCare from './containers/FleetCare';
import {
  topicToggle
} from './actions/appAction';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.topicSelectInput = this.topicSelectInput.bind(this);

  }

  topicSelectInput(e) {
    const { dispatch } = this.props;
    const { value } = e.target;
    dispatch(topicToggle(value));
  }

  render() {
    const { topic } = this.props;

    if(topic === '1') {
      return (
        <Day2Day />
      );
    } else if(topic === '2') {
        return (
          <Mobile />
        );
    } else if(topic === '3'){
        return (
          <SalesForce />
        );
    } else if(topic === '4'){
        return (
          <LogBook />
        );
    } else if(topic === '5'){
        return (
          <FleetCare />
        )
    }
    else
    return (
      <div className="App">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-s-12 col-lg-4">
              <div className="card border-dark bg-light mb-3">
                <div className="card-header"><b>Quick Reference Guide</b></div>
                <div className="card-body">
                  <select onChange={this.topicSelectInput}>
                    <option value="" selected>Choose Topic</option>
                    <option value="1">Day 2 Day</option>
                    <option value="2">Mobile</option>
                    <option value="3">SalesForce</option>
                    <option value="4">LogBook</option>
                    <option value="5">FleetCare/Reveal</option>
                  </select>
                  <br/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
