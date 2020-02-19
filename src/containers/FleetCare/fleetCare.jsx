import React, { Component, Fragment } from 'react';
import RevealProcedures from './components/RevealProcedures';
import SpeedCorrection from './components/SpeedCorrection';
import {
    topicToggle,
    fleetCareToggle
} from '../../actions/appAction';

export default class FleetCare extends Component {
    constructor(props) {
        super(props);

        this.topicSelectInput = this.topicSelectInput.bind(this);
        this.fleetCareSelectInput = this.fleetCareSelectInput.bind(this);   
    }

    topicSelectInput(e) {
        const { dispatch } = this.props;
        const { value } = e.target;
        dispatch(topicToggle(value));
    }

    fleetCareSelectInput(e) {
        const { dispatch } = this.props;
        const { value } = e.target;
        dispatch(fleetCareToggle(value));
    }

    render() {
        const { fleetcare } = this.props;

        return (
            <div className="App">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-s-12 col-lg-4">
                            <div className="card border-dark bg-light mb-3">
                                <div className="card-header"><b>Quick Reference Guide</b></div>
                                <div className="card-body">
                                    <select onChange={this.topicSelectInput} id="FleetCaremain">
                                        <option value="">Choose Topic</option>
                                        <option value="1">Day 2 Day</option>
                                        <option value="2">Mobile</option>
                                        <option value="3">SalesForce</option>
                                        <option value="4">LogBook</option>
                                        <option value="5" selected>FleetCare/Reveal</option>
                                    </select>
                                    <br/>
                                    <br/>
                                    {fleetcare === 'FC1' ? (
                                        <Fragment>
                                            <button value='' onClick={this.fleetCareSelectInput} className="btn btn-outline-danger">Back</button>
                                            <RevealProcedures />
                                        </Fragment>
                                    ) : fleetcare === 'FC2' ? (
                                        <Fragment>
                                            <button value='' onClick={this.fleetCareSelectInput} className="btn btn-outline-danger">Back</button>
                                            <SpeedCorrection />
                                        </Fragment>
                                    ) : (
                                        <div className="col-s-12">
                                            <button value='FC1' onClick={this.fleetCareSelectInput} className="btn btn-outline-primary">Reveal Procedures</button>
                                            <button value='FC2' onClick={this.fleetCareSelectInput} className="btn btn-outline-primary">Posted Speed Correction</button>
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