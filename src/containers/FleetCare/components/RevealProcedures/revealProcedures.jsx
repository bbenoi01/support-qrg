import React, { Component } from 'react';
import {
    procedureToggle
} from '../../../../actions/appAction';

export default class RevealProcedures extends Component {
    constructor(props) {
        super(props);

        this.procedureSelectInput = this.procedureSelectInput.bind(this);

    }

    procedureSelectInput(e) {
        const { dispatch } = this.props;
        const { value } = e.target;
        dispatch(procedureToggle(value));
    }

    render() {
        const { procedure } = this.props;

        if (procedure === 'RP1') {
            return (
                <div className="card-body">
                    <button value='' onClick={this.procedureSelectInput} className="btn btn-outline-danger">Back</button>
                    <div className="card-body">
                        <h6 className="card-title">How do I get a report to automatically send e-mails?</h6>
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-body text-left">
                                    <p><b>1. </b>Log into Reveal</p>
                                    <div className="form-check right">
                                        <input type="checkbox" className="form-check-input" id='rp1'/>
                                        <label htmlFor="rp1" className="form-check-label">Done</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-body text-left">
                                    <p><b>2. </b>Click on Reports</p>
                                    <div className="form-check right">
                                        <input type="checkbox" className="form-check-input" id='rp2'/>
                                        <label htmlFor="rp2" className="form-check-label">Done</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-body text-left">
                                    <p><b>3. </b>On the left side of the page, there should be a tab with 3 options. Click on 'Scheduled Reports'</p><br/>
                                    <div className="form-check right">
                                        <input type="checkbox" className="form-check-input" id='rp3'/>
                                        <label htmlFor="rp3" className="form-check-label">Done</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-body text-left">
                                    <p><b>4. </b>Click the pencil 'Edit' icon on the far right of each report</p><br/>
                                    <div className="form-check right">
                                        <input type="checkbox" className="form-check-input" id='rp4'/>
                                        <label htmlFor="rp4" className="form-check-label">Done</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-body text-left">
                                    <p><b>5. </b>In the popup window that appears, click on 'Recipients'</p><br/>
                                    <div className="form-check right">
                                        <input type="checkbox" className="form-check-input" id='rp5'/>
                                        <label htmlFor="rp5" className="form-check-label">Done</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-body text-left">
                                    <p><b>6. </b>6.	Under additional e-mails, enter in any e-mail addresses you want to be receiving these reports</p><br/>
                                    <div className="form-check right">
                                        <input type="checkbox" className="form-check-input" id='rp6'/>
                                        <label htmlFor="rp6" className="form-check-label">Done</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <h6 className="card-title">How do I see a distance traveled report by state?</h6>
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-body text-left">
                                    <p><b>1. </b>Log into Reveal</p>
                                    <div className="form-check right">
                                        <input type="checkbox" className="form-check-input" id='rp7'/>
                                        <label htmlFor="rp7" className="form-check-label">Done</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-body text-left">
                                    <p><b>2. </b>Click on Reports</p>
                                    <div className="form-check right">
                                        <input type="checkbox" className="form-check-input" id='rp8'/>
                                        <label htmlFor="rp8" className="form-check-label">Done</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-body text-left">
                                    <p><b>3. </b>Click on ‘Distance Traveled Report’</p><br/>
                                    <div className="form-check right">
                                        <input type="checkbox" className="form-check-input" id='rp9'/>
                                        <label htmlFor="rp9" className="form-check-label">Done</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-body text-left">
                                    <p><b>4. </b>Click on ‘Report Options’</p><br/>
                                    <div className="form-check right">
                                        <input type="checkbox" className="form-check-input" id='rp10'/>
                                        <label htmlFor="rp10" className="form-check-label">Done</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-body text-left">
                                    <p><b>5. </b>Click on the drop down menu under ‘Group By’ and select how you would like this report to be organized by</p><br/>
                                    <div className="form-check right">
                                        <input type="checkbox" className="form-check-input" id='rp11'/>
                                        <label htmlFor="rp11" className="form-check-label">Done</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else if (procedure === 'RP2') {
            return (
                <div className="card-body">
                    <button value='' onClick={this.procedureSelectInput} className="btn btn-outline-danger">Back</button>
                    <div className="card-body">
                        <h6 className="card-title">How do I assign unidentified miles?</h6>
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-body text-left">
                                    <p><b>1. </b>Log into Reveal</p>
                                    <div className="form-check right">
                                        <input type="checkbox" className="form-check-input" id='rp12'/>
                                        <label htmlFor="rp12" className="form-check-label">Done</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-body text-left">
                                    <p><b>2. </b>Click on ‘LogBook’</p>
                                    <div className="form-check right">
                                        <input type="checkbox" className="form-check-input" id='rp13'/>
                                        <label htmlFor="rp13" className="form-check-label">Done</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-body text-left">
                                    <p><b>3. </b>At the top of the page, click on ‘Unidentified Miles’</p><br/>
                                    <div className="form-check right">
                                        <input type="checkbox" className="form-check-input" id='rp14'/>
                                        <label htmlFor="rp14" className="form-check-label">Done</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-body text-left">
                                    <p><b>4. </b>Click the yellow pencil icon labeled ‘Edit’</p><br/>
                                    <div className="form-check right">
                                        <input type="checkbox" className="form-check-input" id='rp15'/>
                                        <label htmlFor="rp15" className="form-check-label">Done</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-body text-left">
                                    <p><b>5. </b>Fill out the status and driver, and click ‘Mark As Done.’</p><br/>
                                    <div className="form-check right">
                                        <input type="checkbox" className="form-check-input" id='rp16'/>
                                        <label htmlFor="rp16" className="form-check-label">Done</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <h6 className="card-title">How do I adjust driver HOS/Driving Status?</h6>
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-body text-left">
                                    <p><b>1. </b>Log into Reveal</p>
                                    <div className="form-check right">
                                        <input type="checkbox" className="form-check-input" id='rp17'/>
                                        <label htmlFor="rp17" className="form-check-label">Done</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-body text-left">
                                    <p><b>2. </b>Click on ‘LogBook’</p>
                                    <div className="form-check right">
                                        <input type="checkbox" className="form-check-input" id='rp18'/>
                                        <label htmlFor="rp18" className="form-check-label">Done</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-body text-left">
                                    <p><b>3. </b>Click on ‘HOS History’ to the right of the driver who’s HOS needs to be adjusted</p><br/>
                                    <div className="form-check right">
                                        <input type="checkbox" className="form-check-input" id='rp19'/>
                                        <label htmlFor="rp19" className="form-check-label">Done</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-body text-left">
                                    <p><b>4. </b>Click on the arrow to expand the status then click ‘Edit’ on the far right</p><br/>
                                    <div className="form-check right">
                                        <input type="checkbox" className="form-check-input" id='rp20'/>
                                        <label htmlFor="rp20" className="form-check-label">Done</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-body text-left">
                                    <p><b>5. </b>Fill out the change needed to make and ensure that ‘Propose to Driver’ is select, then click ‘Save’</p><br/>
                                    <div className="form-check right">
                                        <input type="checkbox" className="form-check-input" id='rp21'/>
                                        <label htmlFor="rp21" className="form-check-label">Done</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <h6 className="card-title">What do I do if a driver is advising they don’t see a proposed edit on their device?</h6>
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-body text-left">
                                    <p><b>1. </b>Confirm the device they are using and the app version. Make sure both are up to date</p>
                                    <div className="form-check right">
                                        <input type="checkbox" className="form-check-input" id='rp22'/>
                                        <label htmlFor="rp22" className="form-check-label">Done</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-body text-left">
                                    <p><b>2. </b>Request a screenshot of the driver’s logs, Reveal screenshot, and request to have them send a diagnostics file</p>
                                    <div className="form-check right">
                                        <input type="checkbox" className="form-check-input" id='rp23'/>
                                        <label htmlFor="rp23" className="form-check-label">Done</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-body text-left">
                                    <p><b>3. </b>Advise that you will send it to the dev team for review</p><br/>
                                    <div className="form-check right">
                                        <input type="checkbox" className="form-check-input" id='rp24'/>
                                        <label htmlFor="rp24" className="form-check-label">Done</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-body text-left">
                                    <p><b>4. </b>Answer any other questions or concerns they have</p><br/>
                                    <div className="form-check right">
                                        <input type="checkbox" className="form-check-input" id='rp25'/>
                                        <label htmlFor="rp25" className="form-check-label">Done</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-body text-left">
                                    <p><b>*</b>Please note the driver <b>MUST</b> certify the day before changes can be made/proposed. The driver will be able to accept the changes, and then must RECERTIFY after the changes are accepted</p><br/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else if (procedure === 'RP3') {
            return (
                <div className="card-body">
                    <button value='' onClick={this.procedureSelectInput} className="btn btn-outline-danger">Back</button>
                    <div className="card-body">
                        <h6 className="card-title">How do I change the time zone?</h6>
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-body text-left">
                                    <p><b>1. </b>Log into Reveal</p>
                                    <div className="form-check right">
                                        <input type="checkbox" className="form-check-input" id='rp26'/>
                                        <label htmlFor="rp26" className="form-check-label">Done</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-body text-left">
                                    <p><b>2. </b>Click on ‘Admin’ in the drop down menu when you highlight the username</p>
                                    <div className="form-check right">
                                        <input type="checkbox" className="form-check-input" id='rp27'/>
                                        <label htmlFor="rp27" className="form-check-label">Done</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-body text-left">
                                    <p><b>3. </b>Click on ‘Driver List’</p><br/>
                                    <div className="form-check right">
                                        <input type="checkbox" className="form-check-input" id='rp28'/>
                                        <label htmlFor="rp28" className="form-check-label">Done</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-body text-left">
                                    <p><b>4. </b>Click ‘Edit’ next to the driver you want to make the change for</p><br/>
                                    <div className="form-check right">
                                        <input type="checkbox" className="form-check-input" id='rp29'/>
                                        <label htmlFor="rp29" className="form-check-label">Done</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-body text-left">
                                    <p><b>5. </b>Click the ‘Mobile Options’ tab and select the new time zone under the ‘Driver Time Zone’</p><br/>
                                    <div className="form-check right">
                                        <input type="checkbox" className="form-check-input" id='rp30'/>
                                        <label htmlFor="rp30" className="form-check-label">Done</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-body text-left">
                                    <p><b>6. </b>Click ‘Save’</p><br/>
                                    <div className="form-check right">
                                        <input type="checkbox" className="form-check-input" id='rp31'/>
                                        <label htmlFor="rp31" className="form-check-label">Done</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="card-body">
                    <div className="col-sm-12">
                        <button value='RP1' onClick={this.procedureSelectInput} className="btn btn-outline-primary">Reports</button>
                        <button value='RP2' onClick={this.procedureSelectInput} className="btn btn-outline-primary">LogBook</button>
                        <button value='RP3' onClick={this.procedureSelectInput} className="btn btn-outline-primary">Admin</button>
                    </div>
                </div>
            );
        }
        
    }
}
