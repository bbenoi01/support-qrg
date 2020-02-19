import React, { Component, Fragment } from 'react';
import Configs from './components/Configs';
import Recap from './components/Recap';
import Matrix from './components/Matrix';
import {
    topicToggle,
    logBookToggle
} from '../../actions/appAction';

export default class LogBook extends Component {
    constructor(props) {
        super(props);

        this.topicSelectInput = this.topicSelectInput.bind(this);
        this.logBookSelectInput = this.logBookSelectInput.bind(this);
    }

    topicSelectInput(e) {
        const { dispatch } = this.props;
        const { value } = e.target;
        dispatch(topicToggle(value));
    }

    logBookSelectInput(e) {
        const { dispatch } = this.props;
        const { value } = e.target;
        dispatch(logBookToggle(value));
    }

    render() {
        const { logbook } = this.props;

        return (
            <div className="App">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-s-12 col-lg-4">
                            <div className="card border-dark bg-light mb-3">
                                <div className="card-header"><b>Quick Reference Guide</b></div>
                                <div className="card-body">
                                    <select onChange={this.topicSelectInput} id="LogBookmain">
                                        <option value="">Choose Topic</option>
                                        <option value="1">Day 2 Day</option>
                                        <option value="2">Mobile</option>
                                        <option value="3">SalesForce</option>
                                        <option value="4" selected>LogBook</option>
                                        <option value="5">FleetCare/Reveal</option>
                                    </select>
                                    <br/>
                                    <br/>
                                    {logbook === 'LB1' ? (
                                        <Fragment>
                                            <button value='' onClick={this.logBookSelectInput} className="btn btn-outline-danger">Back</button>
                                            <Configs />
                                        </Fragment>
                                    ) : logbook === 'LB2' ? (
                                        <Fragment>
                                            <button value='' onClick={this.logBookSelectInput} className="btn btn-outline-danger">Back</button>
                                            <Recap />
                                        </Fragment>
                                    ) : logbook === 'LB3' ? (
                                        <Fragment>
                                            <button value='' onClick={this.logBookSelectInput} className="btn btn-outline-danger">Back</button>
                                            <Matrix />
                                        </Fragment>
                                    ) : (
                                        <div className="col-s-12">
                                            <button value='LB1' onClick={this.logBookSelectInput} className="btn btn-outline-primary">Configs</button>
                                            <button value='LB2' onClick={this.logBookSelectInput} className="btn btn-outline-primary">Rolling Recap</button>
                                            <button value='LB3' onClick={this.logBookSelectInput} className="btn btn-outline-primary">LogBook Matrix</button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
