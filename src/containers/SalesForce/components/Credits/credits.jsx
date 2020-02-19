import React, { Component } from 'react';

export default class Credits extends Component {

    render() {
        return (
            <div className="card-body">
                <div className="col-sm-12">
                    <div className="card">
                        <div className="card-body text-left">
                            <p><b>Incentive Credit:</b> $50</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12">
                    <div className="card">
                        <div className="card-body text-left">
                            <p><b>Invoice: </b>Only Verizon Connect Service</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12">
                    <div className="card">
                        <div className="card-body text-left">
                            <p><b>Product Down Time</b></p>
                            <p style={{textIndent: '10px'}}><b>-</b> days down / days in month X price of unit X number of units</p>
                        </div>
                    </div>
                </div>
                <h5 className="text-center"><b>Credit Request</b></h5>
                <div className="col-sm-12">
                    <div className="card">
                        <div className="card-body text-left">
                            <p><b>1. Billing Approvals</b></p>
                            <div className="form-check right">
                                <input type="checkbox" className="form-check-input" id='c1'/>
                                <label htmlFor="c1" className="form-check-label">Done</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12">
                    <div className="card">
                        <div className="card-body text-left">
                            <p><b>2. New Billing Approval</b></p>
                            <div className="form-check right">
                                <input type="checkbox" className="form-check-input" id='c2'/>
                                <label htmlFor="c2" className="form-check-label">Done</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12">
                    <div className="card">
                        <div className="card-body text-left">
                            <p><b>3. Credit Memo Request</b></p>
                            <p style={{textIndent: '25px'}}><b>- Continue</b></p>
                            <div className="form-check right">
                                <input type="checkbox" className="form-check-input" id='c3'/>
                                <label htmlFor="c3" className="form-check-label">Done</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12">
                    <div className="card">
                        <div className="card-body text-left">
                            <p><b>4. Fill out/Choose the following</b></p>
                            <p style={{textIndent: '25px'}}><b>- Customer Name</b></p>
                            <p style={{textIndent: '25px'}}><b>- Organization</b></p>
                            <p style={{textIndent: '50px'}}>- FM USA/MEX</p>
                            <p style={{textIndent: '25px'}}><b>- Department</b></p>
                            <p style={{textIndent: '50px'}}>- Customer Care</p>
                            <p style={{textIndent: '25px'}}><b>- Reason Category</b></p>
                            <p style={{textIndent: '50px'}}>- Choose applicable reason</p>
                            <p style={{textIndent: '25px'}}><b>- Reason for Request</b></p>
                            <p style={{textIndent: '50px'}}>- Detail reason</p>
                            <p style={{textIndent: '25px'}}><b>- Total Amount Excluding Tax</b></p>
                            <p style={{textIndent: '25px'}}><b>- Request Taken By</b></p>
                            <p style={{textIndent: '50px'}}>- Your Supervisor(i.e. Danny or Marin)</p>
                            <p style={{textIndent: '25px'}}><b>- Save</b></p>
                            <div className="form-check right">
                                <input type="checkbox" className="form-check-input" id='c4'/>
                                <label htmlFor="c4" className="form-check-label">Done</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
