import React, { Component, Fragment } from 'react';
import MobileApps from './components/MobileApps';
import {
    topicToggle,
    mobileToggle
} from '../../actions/appAction';

export default class Mobile extends Component {
    constructor(props) {
        super(props);

        this.topicSelectInput = this.topicSelectInput.bind(this);
        this.mobileSelectInput = this.mobileSelectInput.bind(this);


    }

    topicSelectInput(e) {
        const { dispatch } = this.props;
        const { value } = e.target;
        dispatch(topicToggle(value));
    }

    mobileSelectInput(e) {
        const { dispatch } = this.props;
        const { value } = e.target;
        dispatch(mobileToggle(value));
    }
    render() {
        const { mobile } = this.props;

        return (
            <div className="App">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-s-12 col-lg-4">
                            <div className="card border-dark bg-light mb-3">
                                <div className="card-header"><b>Quick Reference Guide</b></div>
                                <div className="card-body">
                                    <select onChange={this.topicSelectInput} id="mmain">
                                        <option value="">Choose Topic</option>
                                        <option value="1">Day 2 Day</option>
                                        <option value="2" selected>Mobile</option>
                                        <option value="3">SalesForce</option>
                                        <option value="4">LogBook</option>
                                        <option value="5">FleetCare/Reveal</option>
                                    </select>
                                    <br/>
                                    <br/>
                                    {mobile === 'M1' ? (
                                        <Fragment>
                                            <button value='' onClick={this.mobileSelectInput} className="btn btn-outline-danger">Back</button>
                                            <MobileApps />
                                        </Fragment>
                                    ) : (
                                        <div className="col-s-12">
                                            <button value='M1' onClick={this.mobileSelectInput} className="btn btn-outline-primary">Mobile Apps</button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}