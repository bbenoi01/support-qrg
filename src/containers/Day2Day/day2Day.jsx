import React, { Component, Fragment } from 'react';
import ShortKeys from './components/ShortKeys';
import ServicePricing from './components/ServicePricing';
import InventoryItems from './components/InventoryItems';
import PhoneNumbers from './components/PhoneNumbers';
import Outbound from './components/Outbound';
import Notes from './components/Notes';
// import ERP from './components/ERP';
import {
    day2DayToggle,
    topicToggle
} from '../../actions/appAction';

export default class Day2Day extends Component {

    topicSelectInput = (e) => {
        const { dispatch } = this.props;
        const { value } = e.target;
        dispatch(topicToggle(value));
    }

    day2daySelectInput = (e) => {
        const { dispatch }= this.props;
        const { value } = e.target;
        dispatch(day2DayToggle(value))
    }


    render() {
        const { day2day } = this.props;

        return (
            <div className="App">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-s-12 col-lg-4">
                            <div className="card border-dark bg-light mb-3">
                                <div className="card-header"><b>Quick Reference Guide</b></div>
                                <div className="card-body">
                                    <select onChange={this.topicSelectInput} id="day2daymain">
                                        <option value="">Choose Topic</option>
                                        <option value="1" selected>Day 2 Day</option>
                                        <option value="2">Mobile</option>
                                        <option value="3">SalesForce</option>
                                        <option value="4">LogBook</option>
                                        <option value="5">FleetCare/Reveal</option>
                                    </select>
                                    <br/>
                                    <br/>
                                    {day2day === 'D2D1' ? (
                                        <Fragment>
                                            <button value='' onClick={this.day2daySelectInput} className="btn btn-outline-danger">Back</button>
                                            <ShortKeys />
                                        </Fragment>
                                    ) : day2day === 'D2D2' ? (
                                        <Fragment>
                                            <button value='' onClick={this.day2daySelectInput} className="btn btn-outline-danger">Back</button>
                                            <ServicePricing />
                                        </Fragment>
                                    ): day2day === 'D2D3' ? (
                                        <Fragment>
                                            <button value='' onClick={this.day2daySelectInput} className="btn btn-outline-danger">Back</button>
                                            <InventoryItems />
                                        </Fragment>
                                    ) : day2day === 'D2D4' ? (
                                        <Fragment>
                                            <button value='' onClick={this.day2daySelectInput} className="btn btn-outline-danger">Back</button>
                                            <PhoneNumbers />
                                        </Fragment>
                                    ) : day2day === 'D2D5' ? (
                                        <Fragment>
                                            <button value='' onClick={this.day2daySelectInput} className="btn btn-outline-danger">Back</button>
                                            <Outbound />
                                        </Fragment>
                                    ) : day2day === 'D2D6' ? (
                                        <Fragment>
                                            <button value='' onClick={this.day2daySelectInput} className="btn btn-outline-danger">Back</button>
                                            <Notes />
                                        </Fragment>
                                    ) /*: day2day === 'D2D7' ? (
                                        <Fragment>
                                            <button value='' onClick={this.day2daySelectInput} className="btn btn-outline-danger">Back</button>
                                            <ERP />
                                        </Fragment>
                                    ) */: (
                                        <div className="col-s-12">
                                            <button value='D2D1' onClick={this.day2daySelectInput} className="btn btn-outline-primary">Short Keys</button>
                                            <button value='D2D2' onClick={this.day2daySelectInput} className="btn btn-outline-primary">Service Pricing</button>
                                            <button value='D2D3' onClick={this.day2daySelectInput} className="btn btn-outline-primary">Inventory Items</button>
                                            <button value='D2D4' onClick={this.day2daySelectInput} className="btn btn-outline-primary">Phone Numbers</button>
                                            <button value='D2D5' onClick={this.day2daySelectInput} className="btn btn-outline-primary">Verbatims/Disclosures</button>
                                            <button value='D2D6' onClick={this.day2daySelectInput} className="btn btn-outline-primary">Notes</button>
                                            {/* <button value='D2D7' onClick={this.day2daySelectInput} className="btn btn-outline-primary">1ERP</button> */}
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
