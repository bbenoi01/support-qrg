import React, { Component } from 'react';

export default class ERP extends Component {
    render() {
        return (
            <div className="card-body">
                <div className="col-sm-12">
                    <div className="card">
                        <div className="card-body text-left">
                            <p className='text-center'><b>1ERP Implementation Hardware Talk Track</b></p>
                            <br/>
                            <p>We are looking at an equipment delivery window of mid February. I can submit the equipment
                                request now and it will be shipped as soon as it is available. Once equipment is shipped,
                                I will follow up with you to schedule the tech visit. I will need the following information:
                            </p>
                            <p><b>POC:</b></p>
                            <p><b>Phone Number:</b></p>
                            <p><b>Availability:</b></p>
                            <p><b>Service Address:</b></p>
                            <p><b>Shipping Address:</b></p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12">
                    <div className="card">
                        <div className="card-body">
                            <p className='text-left'>Use hashtag <b className='text-danger'>#NSBO</b> - in the <b>REFERENCE</b> section of the SF case to track all cases opened during the Blackout period.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}