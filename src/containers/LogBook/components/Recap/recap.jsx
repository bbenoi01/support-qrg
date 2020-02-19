import React, { Component } from 'react';
import {
    rulesetToggle,
    updateDay1WorkHoursInput,
    updateDay1WorkMinInput,
    updateDay1WorkSecInput,
    updateDay1,
    updateDay2WorkHoursInput,
    updateDay2WorkMinInput,
    updateDay2WorkSecInput,
    updateDay2,
    updateDay3WorkHoursInput,
    updateDay3WorkMinInput,
    updateDay3WorkSecInput,
    updateDay3,
    updateDay4WorkHoursInput,
    updateDay4WorkMinInput,
    updateDay4WorkSecInput,
    updateDay4,
    updateDay5WorkHoursInput,
    updateDay5WorkMinInput,
    updateDay5WorkSecInput,
    updateDay5,
    updateDay6WorkHoursInput,
    updateDay6WorkMinInput,
    updateDay6WorkSecInput,
    updateDay6,
    updateDay7WorkHoursInput,
    updateDay7WorkMinInput,
    updateDay7WorkSecInput,
    updateDay7,
    updateDay8WorkHoursInput,
    updateDay8WorkMinInput,
    updateDay8WorkSecInput,
    updateDay8,
    driveTimeSubtract,
    // breakTimeAdd,
    resetButton
} from '../../../../actions/appAction';

export default class Recap extends Component {
    constructor(props) {
        super(props);

        this.rulesetSelectInput = this.rulesetSelectInput.bind(this);
        this.day1WorkHoursInput = this.day1WorkHoursInput.bind(this);
        this.day1WorkMinInput = this.day1WorkMinInput.bind(this);
        this.day1WorkSecInput = this.day1WorkSecInput.bind(this);
        this.updateDay1 = this.updateDay1.bind(this);
        this.day2WorkHoursInput = this.day2WorkHoursInput.bind(this);
        this.day2WorkMinInput = this.day2WorkMinInput.bind(this);
        this.day2WorkSecInput = this.day2WorkSecInput.bind(this);
        this.updateDay2 = this.updateDay2.bind(this);
        this.day3WorkHoursInput = this.day3WorkHoursInput.bind(this);
        this.day3WorkMinInput = this.day3WorkMinInput.bind(this);
        this.day3WorkSecInput = this.day3WorkSecInput.bind(this);
        this.updateDay3 = this.updateDay3.bind(this);
        this.day4WorkHoursInput = this.day4WorkHoursInput.bind(this);
        this.day4WorkMinInput = this.day4WorkMinInput.bind(this);
        this.day4WorkSecInput = this.day4WorkSecInput.bind(this);
        this.updateDay4 = this.updateDay4.bind(this);
        this.day5WorkHoursInput = this.day5WorkHoursInput.bind(this);
        this.day5WorkMinInput = this.day5WorkMinInput.bind(this);
        this.day5WorkSecInput = this.day5WorkSecInput.bind(this);
        this.updateDay5 = this.updateDay5.bind(this);
        this.day6WorkHoursInput = this.day6WorkHoursInput.bind(this);
        this.day6WorkMinInput = this.day6WorkMinInput.bind(this);
        this.day6WorkSecInput = this.day6WorkSecInput.bind(this);
        this.updateDay6 = this.updateDay6.bind(this);
        this.day7WorkHoursInput = this.day7WorkHoursInput.bind(this);
        this.day7WorkMinInput = this.day7WorkMinInput.bind(this);
        this.day7WorkSecInput = this.day7WorkSecInput.bind(this);
        this.updateDay7 = this.updateDay7.bind(this);
        this.day8WorkHoursInput = this.day8WorkHoursInput.bind(this);
        this.day8WorkMinInput = this.day8WorkMinInput.bind(this);
        this.day8WorkSecInput = this.day8WorkSecInput.bind(this);
        this.updateDay8 = this.updateDay8.bind(this);
        // this.breakButtonActivate = this.breakButtonActivate.bind(this);
        this.drivingButtonActivate = this.drivingButtonActivate.bind(this);
        this.resetButtonClick = this.resetButtonClick.bind(this);

    }

    rulesetSelectInput(e) {
        const { dispatch } = this.props;
        const { value } = e.target;
        dispatch(rulesetToggle(value));
    }

    day1WorkHoursInput(e) {
        const { dispatch } = this.props;
        const { value } = e.target;
        dispatch(updateDay1WorkHoursInput(value));
    }

    day1WorkMinInput(e) {
        const { dispatch } = this.props;
        const { value } = e.target;
        dispatch(updateDay1WorkMinInput(value));
    }

    day1WorkSecInput(e) {
        const { dispatch } = this.props;
        const { value } = e.target;
        dispatch(updateDay1WorkSecInput(value));
    }

    updateDay1(e) {
        const { dispatch, day1WorkHours, day1WorkMin, day1WorkSec } = this.props;
        dispatch(updateDay1(day1WorkHours, day1WorkMin, day1WorkSec));
    }

    day2WorkHoursInput(e) {
        const { dispatch } = this.props;
        const { value } = e.target;
        dispatch(updateDay2WorkHoursInput(value));
    }

    day2WorkMinInput(e) {
        const { dispatch } = this.props;
        const { value } = e.target;
        dispatch(updateDay2WorkMinInput(value));
    }

    day2WorkSecInput(e) {
        const { dispatch } = this.props;
        const { value } = e.target;
        dispatch(updateDay2WorkSecInput(value));
    }

    updateDay2(e) {
        const { dispatch, day2WorkHours, day2WorkMin, day2WorkSec } = this.props;
        dispatch(updateDay2(day2WorkHours, day2WorkMin, day2WorkSec));
    }

    day3WorkHoursInput(e) {
        const { dispatch } = this.props;
        const { value } = e.target;
        dispatch(updateDay3WorkHoursInput(value));
    }

    day3WorkMinInput(e) {
        const { dispatch } = this.props;
        const { value } = e.target;
        dispatch(updateDay3WorkMinInput(value));
    }

    day3WorkSecInput(e) {
        const { dispatch } = this.props;
        const { value } = e.target;
        dispatch(updateDay3WorkSecInput(value));
    }

    updateDay3(e) {
        const { dispatch, day3WorkHours, day3WorkMin, day3WorkSec } = this.props;
        dispatch(updateDay3(day3WorkHours, day3WorkMin, day3WorkSec));
    }

    day4WorkHoursInput(e) {
        const { dispatch } = this.props;
        const { value } = e.target;
        dispatch(updateDay4WorkHoursInput(value));
    }

    day4WorkMinInput(e) {
        const { dispatch } = this.props;
        const { value } = e.target;
        dispatch(updateDay4WorkMinInput(value));
    }

    day4WorkSecInput(e) {
        const { dispatch } = this.props;
        const { value } = e.target;
        dispatch(updateDay4WorkSecInput(value));
    }

    updateDay4(e) {
        const { dispatch, day4WorkHours, day4WorkMin, day4WorkSec } = this.props;
        dispatch(updateDay4(day4WorkHours, day4WorkMin, day4WorkSec));
    }

    day5WorkHoursInput(e) {
        const { dispatch } = this.props;
        const { value } = e.target;
        dispatch(updateDay5WorkHoursInput(value));
    }

    day5WorkMinInput(e) {
        const { dispatch } = this.props;
        const { value } = e.target;
        dispatch(updateDay5WorkMinInput(value));
    }

    day5WorkSecInput(e) {
        const { dispatch } = this.props;
        const { value } = e.target;
        dispatch(updateDay5WorkSecInput(value));
    }

    updateDay5(e) {
        const { dispatch, day5WorkHours, day5WorkMin, day5WorkSec } = this.props;
        dispatch(updateDay5(day5WorkHours, day5WorkMin, day5WorkSec));
    }

    day6WorkHoursInput(e) {
        const { dispatch } = this.props;
        const { value } = e.target;
        dispatch(updateDay6WorkHoursInput(value));
    }

    day6WorkMinInput(e) {
        const { dispatch } = this.props;
        const { value } = e.target;
        dispatch(updateDay6WorkMinInput(value));
    }

    day6WorkSecInput(e) {
        const { dispatch } = this.props;
        const { value } = e.target;
        dispatch(updateDay6WorkSecInput(value));
    }

    updateDay6(e) {
        const { dispatch, day6WorkHours, day6WorkMin, day6WorkSec } = this.props;
        dispatch(updateDay6(day6WorkHours, day6WorkMin, day6WorkSec));
    }

    day7WorkHoursInput(e) {
        const { dispatch } = this.props;
        const { value } = e.target;
        dispatch(updateDay7WorkHoursInput(value));
    }

    day7WorkMinInput(e) {
        const { dispatch } = this.props;
        const { value } = e.target;
        dispatch(updateDay7WorkMinInput(value));
    }

    day7WorkSecInput(e) {
        const { dispatch } = this.props;
        const { value } = e.target;
        dispatch(updateDay7WorkSecInput(value));
    }

    updateDay7(e) {
        const { dispatch, day7WorkHours, day7WorkMin, day7WorkSec } = this.props;
        dispatch(updateDay7(day7WorkHours, day7WorkMin, day7WorkSec));
    }

    day8WorkHoursInput(e) {
        const { dispatch } = this.props;
        const { value } = e.target;
        dispatch(updateDay8WorkHoursInput(value));
    }

    day8WorkMinInput(e) {
        const { dispatch } = this.props;
        const { value } = e.target;
        dispatch(updateDay8WorkMinInput(value));
    }

    day8WorkSecInput(e) {
        const { dispatch } = this.props;
        const { value } = e.target;
        dispatch(updateDay8WorkSecInput(value));
    }

    updateDay8(e) {
        const { dispatch, day8WorkHours, day8WorkMin, day8WorkSec } = this.props;
        dispatch(updateDay8(day8WorkHours, day8WorkMin, day8WorkSec));
    }

    drivingButtonActivate(e) {
        const { dispatch, recap } = this.props;
        const value = e.target.id;
        dispatch(driveTimeSubtract(recap, value));
    }

    // breakButtonActivate(e) {
    //     const { dispatch, recap } = this.props;
    //     const value = e.target.id;
    //     dispatch(breakTimeAdd(recap, value));
    // }

    resetButtonClick(e) {
        const { dispatch } = this.props;
        e.preventDefault();
        dispatch(resetButton());
        document.getElementById('recap').reset();
    }

    render() {
        const { ruleset, recapHH, recapMM, recapSS, day1, day2, day3, day4, day5, day6, day7, day8 } = this.props;
        if(day1 === '') {
            var clickColor1 = 'card-header bg-danger';
        } else {
            clickColor1 = 'card-header bg-success'
        };

        if(day2 === '') {
            var clickColor2 = 'card-header bg-danger';
        } else {
            clickColor2 = 'card-header bg-success'
        };

        if(day3 === '') {
            var clickColor3 = 'card-header bg-danger';
        } else {
            clickColor3 = 'card-header bg-success'
        };

        if(day4 === '') {
            var clickColor4 = 'card-header bg-danger';
        } else {
            clickColor4 = 'card-header bg-success'
        };

        if(day5 === '') {
            var clickColor5 = 'card-header bg-danger';
        } else {
            clickColor5 = 'card-header bg-success'
        };

        if(day6 === '') {
            var clickColor6 = 'card-header bg-danger';
        } else {
            clickColor6 = 'card-header bg-success'
        };

        if(day7 === '') {
            var clickColor7 = 'card-header bg-danger';
        } else {
            clickColor7 = 'card-header bg-success'
        };

        if(day8 === '') {
            var clickColor8 = 'card-header bg-danger';
        } else {
            clickColor8 = 'card-header bg-success'
        };

        if (ruleset === 'RS1') {
            return (
                <div className="card-body">
                    <div className="card">
                        <div className="card-body">
                            <select name="" id="" onChange={this.rulesetSelectInput}>
                                <option value="RS0">Select Ruleset</option>
                                <option value="RS1" selected>7 Day</option>
                                <option value="RS2">8 Day</option>
                            </select>
                            <br/>
                            <br/>
                            <div className="container">
                                <form action="" id="recap">
                                    <div className="form-row">
                                        <div className="col-sm-12">
                                            <div className="card">
                                                <div className={clickColor1}><a href="#/" className="text-white" onClick={this.updateDay1}>Day 1</a></div>
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col">
                                                            hh<input onChange={this.day1WorkHoursInput} className="form-control" type="text"/>
                                                        </div>
                                                        <div className="col">
                                                            mm<input onChange={this.day1WorkMinInput} className="form-control" type="text"/>
                                                        </div>
                                                        <div className="col">
                                                            ss<input onChange={this.day1WorkSecInput} className="form-control" type="text"/>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col">
                                                            <a href="#/" id={day1} onClick={this.drivingButtonActivate}>Certify</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12">
                                            <div className="card">
                                                <div className={clickColor2}><a href="#/" className="text-white" onClick={this.updateDay2}>Day 2</a></div>
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col">
                                                            hh<input onChange={this.day2WorkHoursInput} className="form-control" type="text"/>
                                                        </div>
                                                        <div className="col">
                                                            mm<input onChange={this.day2WorkMinInput} className="form-control" type="text"/>
                                                        </div>
                                                        <div className="col">
                                                            ss<input onChange={this.day2WorkSecInput} className="form-control" type="text"/>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col">
                                                            <a href="#/" id={day2} onClick={this.drivingButtonActivate}>Certify</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12">
                                            <div className="card">
                                                <div className={clickColor3}><a href="#/" className="text-white" onClick={this.updateDay3}>Day 3</a></div>
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col">
                                                            hh<input onChange={this.day3WorkHoursInput} className="form-control" type="text"/>
                                                        </div>
                                                        <div className="col">
                                                            mm<input onChange={this.day3WorkMinInput} className="form-control" type="text"/>
                                                        </div>
                                                        <div className="col">
                                                            ss<input onChange={this.day3WorkSecInput} className="form-control" type="text"/>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col">
                                                            <a href="#/" id={day3} onClick={this.drivingButtonActivate}>Certify</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12">
                                            <div className="card">
                                                <div className={clickColor4}><a href="#/" className="text-white" onClick={this.updateDay4}>Day 4</a></div>
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col">
                                                            hh<input onChange={this.day4WorkHoursInput} className="form-control" type="text"/>
                                                        </div>
                                                        <div className="col">
                                                            mm<input onChange={this.day4WorkMinInput} className="form-control" type="text"/>
                                                        </div>
                                                        <div className="col">
                                                            ss<input onChange={this.day4WorkSecInput} className="form-control" type="text"/>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col">
                                                            <a href="#/" id={day4} onClick={this.drivingButtonActivate}>Certify</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12">
                                            <div className="card">
                                                <div className={clickColor5}><a href="#/" className="text-white" onClick={this.updateDay5}>Day 5</a></div>
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col">
                                                            hh<input onChange={this.day5WorkHoursInput} className="form-control" type="text"/>
                                                        </div>
                                                        <div className="col">
                                                            mm<input onChange={this.day5WorkMinInput} className="form-control" type="text"/>
                                                        </div>
                                                        <div className="col">
                                                            ss<input onChange={this.day5WorkSecInput} className="form-control" type="text"/>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col">
                                                            <a href="#/" id={day5} onClick={this.drivingButtonActivate}>Certify</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12">
                                            <div className="card">
                                                <div className={clickColor6}><a href="#/" className="text-white" onClick={this.updateDay6}>Day 6</a></div>
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col">
                                                            hh<input onChange={this.day6WorkHoursInput} className="form-control" type="text"/>
                                                        </div>
                                                        <div className="col">
                                                            mm<input onChange={this.day6WorkMinInput} className="form-control" type="text"/>
                                                        </div>
                                                        <div className="col">
                                                            ss<input onChange={this.day6WorkSecInput} className="form-control" type="text"/>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col">
                                                            <a href="#/" id={day6} onClick={this.drivingButtonActivate}>Certify</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12">
                                            <div className="card">
                                                <div className={clickColor7}><a href="#/" className="text-white" onClick={this.updateDay7}>Day 7</a></div>
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col">
                                                            hh<input onChange={this.day7WorkHoursInput} className="form-control" type="text"/>
                                                        </div>
                                                        <div className="col">
                                                            mm<input onChange={this.day7WorkMinInput} className="form-control" type="text"/>
                                                        </div>
                                                        <div className="col">
                                                            ss<input onChange={this.day7WorkSecInput} className="form-control" type="text"/>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col">
                                                            <a href="#/" id={day7} onClick={this.drivingButtonActivate}>Certify</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-8">
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-sm-12">
                                                            <b>Starting Time:</b>
                                                        </div>
                                                        <div className="col-sm-12">
                                                            60
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-sm-12">
                                                            <b>Time Remaining:</b>
                                                        </div>
                                                    </div>    
                                                    <div className="row">
                                                        <div className="col">hh: {recapHH}</div>
                                                        <div className="col">mm: {recapMM}</div>
                                                        <div className="col">ss: {recapSS}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="card-body">
                                                <button value='' className="btn btn-outline-primary" onClick={this.resetButtonClick}>Reset</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else if (ruleset === 'RS2') {
            return (
                <div className="card-body">
                    <div className="card">
                        <div className="card-body">
                            <select name="" id="" onChange={this.rulesetSelectInput}>
                                <option value="RS0">Select Ruleset</option>
                                <option value="RS1">7 Day</option>
                                <option value="RS2" selected>8 Day</option>
                            </select>
                            <br/>
                            <br/>
                            <div className="container">
                                <form action="" id="recap">
                                    <div className="form-row">
                                        <div className="col-sm-12">
                                            <div className="card">
                                                <div className={clickColor1}><a href="#/" className="text-white" onClick={this.updateDay1}>Day 1</a></div>
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col">
                                                            hh<input onChange={this.day1WorkHoursInput} className="form-control" type="text"/>
                                                        </div>
                                                        <div className="col">
                                                            mm<input onChange={this.day1WorkMinInput} className="form-control" type="text"/>
                                                        </div>
                                                        <div className="col">
                                                            ss<input onChange={this.day1WorkSecInput} className="form-control" type="text"/>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col">
                                                            <a href="#/" id={day1} onClick={this.drivingButtonActivate}>Certify</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12">
                                            <div className="card">
                                                <div className={clickColor2}><a href="#/" className="text-white" onClick={this.updateDay2}>Day 2</a></div>
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col">
                                                            hh<input onChange={this.day2WorkHoursInput} className="form-control" type="text"/>
                                                        </div>
                                                        <div className="col">
                                                            mm<input onChange={this.day2WorkMinInput} className="form-control" type="text"/>
                                                        </div>
                                                        <div className="col">
                                                            ss<input onChange={this.day2WorkSecInput} className="form-control" type="text"/>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col">
                                                            <a href="#/" id={day2} onClick={this.drivingButtonActivate}>Certify</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12">
                                            <div className="card">
                                                <div className={clickColor3}><a href="#/" className="text-white" onClick={this.updateDay3}>Day 3</a></div>
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col">
                                                            hh<input onChange={this.day3WorkHoursInput} className="form-control" type="text"/>
                                                        </div>
                                                        <div className="col">
                                                            mm<input onChange={this.day3WorkMinInput} className="form-control" type="text"/>
                                                        </div>
                                                        <div className="col">
                                                            ss<input onChange={this.day3WorkSecInput} className="form-control" type="text"/>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col">
                                                            <a href="#/" id={day3} onClick={this.drivingButtonActivate}>Certify</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12">
                                            <div className="card">
                                                <div className={clickColor4}><a href="#/" className="text-white" onClick={this.updateDay4}>Day 4</a></div>
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col">
                                                            hh<input onChange={this.day4WorkHoursInput} className="form-control" type="text"/>
                                                        </div>
                                                        <div className="col">
                                                            mm<input onChange={this.day4WorkMinInput} className="form-control" type="text"/>
                                                        </div>
                                                        <div className="col">
                                                            ss<input onChange={this.day4WorkSecInput} className="form-control" type="text"/>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col">
                                                            <a href="#/" id={day4} onClick={this.drivingButtonActivate}>Certify</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12">
                                            <div className="card">
                                                <div className={clickColor5}><a href="#/" className="text-white" onClick={this.updateDay5}>Day 5</a></div>
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col">
                                                            hh<input onChange={this.day5WorkHoursInput} className="form-control" type="text"/>
                                                        </div>
                                                        <div className="col">
                                                            mm<input onChange={this.day5WorkMinInput} className="form-control" type="text"/>
                                                        </div>
                                                        <div className="col">
                                                            ss<input onChange={this.day5WorkSecInput} className="form-control" type="text"/>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col">
                                                            <a href="#/" id={day5} onClick={this.drivingButtonActivate}>Certify</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12">
                                            <div className="card">
                                                <div className={clickColor6}><a href="#/" className="text-white" onClick={this.updateDay6}>Day 6</a></div>
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col">
                                                            hh<input onChange={this.day6WorkHoursInput} className="form-control" type="text"/>
                                                        </div>
                                                        <div className="col">
                                                            mm<input onChange={this.day6WorkMinInput} className="form-control" type="text"/>
                                                        </div>
                                                        <div className="col">
                                                            ss<input onChange={this.day6WorkSecInput} className="form-control" type="text"/>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col">
                                                            <a href="#/" id={day6} onClick={this.drivingButtonActivate}>Certify</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12">
                                            <div className="card">
                                                <div className={clickColor7}><a href="#/" className="text-white" onClick={this.updateDay7}>Day 7</a></div>
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col">
                                                            hh<input onChange={this.day7WorkHoursInput} className="form-control" type="text"/>
                                                        </div>
                                                        <div className="col">
                                                            mm<input onChange={this.day7WorkMinInput} className="form-control" type="text"/>
                                                        </div>
                                                        <div className="col">
                                                            ss<input onChange={this.day7WorkSecInput} className="form-control" type="text"/>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col">
                                                            <a href="#/" id={day7} onClick={this.drivingButtonActivate}>Certify</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12">
                                            <div className="card">
                                                <div className={clickColor8}><a href="#/" className="text-white" onClick={this.updateDay8}>Day 8</a></div>
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col">
                                                            hh<input onChange={this.day8WorkHoursInput} className="form-control" type="text"/>
                                                        </div>
                                                        <div className="col">
                                                            mm<input onChange={this.day8WorkMinInput} className="form-control" type="text"/>
                                                        </div>
                                                        <div className="col">
                                                            ss<input onChange={this.day8WorkSecInput} className="form-control" type="text"/>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col">
                                                            <a href="#/" id={day8} onClick={this.drivingButtonActivate}>Certify</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-8">
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-sm-12">
                                                            <b>Starting Time:</b>
                                                        </div>
                                                        <div className="col-sm-12">
                                                            70
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-sm-12">
                                                            <b>Time Remaining:</b>
                                                        </div>
                                                    </div> 
                                                    <div className="row">
                                                        <div className="col">hh: {recapHH}</div>
                                                        <div className="col">mm: {recapMM}</div>
                                                        <div className="col">ss: {recapSS}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="card-body">
                                                <button value='' className="btn btn-outline-primary" onClick={this.resetButtonClick}>Reset</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="card-body">
                    <div className="card">
                        <div className="card-body">
                            <select name="recap" id="recap" onChange={this.rulesetSelectInput}>
                                <option value="RS0" selected>Select Ruleset</option>
                                <option value="RS1">7 Day</option>
                                <option value="RS2">8 Day</option>
                            </select>
                        </div>
                    </div>
                </div>
            );
        }
    }
}
