import React, { Component, Fragment } from 'react';
import Credits from './components/Credits';
import EquipmentOrderGuide from './components/EquipmentOrderGuide';
import {
    topicToggle,
    salesForceToggle
} from '../../actions/appAction';

export default class SalesForce extends Component {
    constructor(props) {
        super(props);

        this.topicSelectInput = this.topicSelectInput.bind(this);
        this.salesForceSelectInput = this.salesForceSelectInput.bind(this);        
    }

    topicSelectInput(e) {
        const { dispatch } = this.props;
        const { value } = e.target;
        dispatch(topicToggle(value));
    }

    salesForceSelectInput(e) {
        const { dispatch } = this.props;
        const { value } = e.target;
        dispatch(salesForceToggle(value));
    }

    render() {
        const { salesforce } = this.props;

        return (
            <div className="App">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-s-12 col-lg-4">
                            <div className="card border-dark bg-light mb-3">
                                <div className="card-header"><b>Quick Reference Guide</b></div>
                                <div className="card-body">
                                    <select onChange={this.topicSelectInput} name="" id="salesforcemain">
                                        <option value="">Choose Topic</option>
                                        <option value="1">Day 2 Day</option>
                                        <option value="2">Mobile</option>
                                        <option value="3" selected>SalesForce</option>
                                        <option value="4">LogBook</option>
                                        <option value="5">FleetCare/Reveal</option>
                                    </select>
                                    <br/>
                                    <br/>
                                    {salesforce === 'SF1' ? (
                                        <Fragment>
                                            <button value='' onClick={this.salesForceSelectInput} className="btn btn-outline-danger">Back</button>
                                            <Credits />
                                        </Fragment>
                                    ) : salesforce === 'SF2' ? (
                                        <Fragment>
                                            <button value='' onClick={this.salesForceSelectInput} className="btn btn-outline-danger">Back</button>
                                            <EquipmentOrderGuide />
                                        </Fragment>
                                    ) : (
                                        <div className="col-s-12">
                                            <button value='SF1' onClick={this.salesForceSelectInput} className="btn btn-outline-primary">Credits</button>
                                            <button value='SF2' onClick={this.salesForceSelectInput} className="btn btn-outline-primary">Equipment Order Guide</button>
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