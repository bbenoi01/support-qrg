import React, { Component } from 'react';

export default class SpeedCorrection extends Component {

    render() {
        return (
            <div className="card-body">
                <div className="col-sm-12">
                    <div className="card">
                        <div className="card-body text-left">
                            <p><b>1. </b>Find the vehicle within fleet care.</p>
                            <div className="form-check right">
                                <input type="checkbox" className="form-check-input" id='sc1'/>
                                <label htmlFor="sc1" className="form-check-label">Done</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12">
                    <div className="card">
                        <div className="card-body text-left">
                            <p><b>2. </b>Click ‘View History.’ Find the date, time and location. You can change the time period to ‘Custom’ at the top to more easily search the exact time.</p>
                            <div className="form-check right">
                                <input type="checkbox" className="form-check-input" id='sc2'/>
                                <label htmlFor="sc2" className="form-check-label">Done</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12">
                    <div className="card">
                        <div className="card-body text-left">
                            <p><b>3. </b>After you’ve found the occurrence, switch the option under ‘View Options’ to ‘Posted Speed’.</p><br/>
                            <div className="form-check right">
                                <input type="checkbox" className="form-check-input" id='sc3'/>
                                <label htmlFor="sc3" className="form-check-label">Done</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12">
                    <div className="card">
                        <div className="card-body text-left">
                            <p><b>4. </b>Click the empty checkbox on the far right.</p><br/>
                            <div className="form-check right">
                                <input type="checkbox" className="form-check-input" id='sc4'/>
                                <label htmlFor="sc4" className="form-check-label">Done</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12">
                    <div className="card">
                        <div className="card-body text-left">
                            <p><b>5. </b>Click ‘Override’ in the box that pops up at the bottom of the screen.</p><br/>
                            <div className="form-check right">
                                <input type="checkbox" className="form-check-input" id='sc5'/>
                                <label htmlFor="sc5" className="form-check-label">Done</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12">
                    <div className="card">
                        <div className="card-body text-left">
                            <p><b>6. </b>In the box labeled ‘Verify Posted Speed’ enter in the posted speed as listed by the customer.</p><br/>
                            <div className="form-check right">
                                <input type="checkbox" className="form-check-input" id='sc6'/>
                                <label htmlFor="sc6" className="form-check-label">Done</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12">
                    <div className="card">
                        <div className="card-body text-left">
                            <p><b>7. </b>Under the ‘Notes’ box, enter in the case number.</p><br/>
                            <div className="form-check right">
                                <input type="checkbox" className="form-check-input" id='sc7'/>
                                <label htmlFor="sc7" className="form-check-label">Done</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12">
                    <div className="card">
                        <div className="card-body text-left">
                            <p><b>8. </b>Click ‘Save’</p><br/>
                            <div className="form-check right">
                                <input type="checkbox" className="form-check-input" id='sc8'/>
                                <label htmlFor="sc8" className="form-check-label">Done</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12">
                    <div className="card">
                        <div className="card-body text-left">
                            <p><b>9. </b>Notate and close the case as ‘Closed > Software Issue > Posted Speed Limit > Customer Care – In House > Speed Correction Submitted.</p><br/>
                            <div className="form-check right">
                                <input type="checkbox" className="form-check-input" id='sc9'/>
                                <label htmlFor="sc9" className="form-check-label">Done</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
