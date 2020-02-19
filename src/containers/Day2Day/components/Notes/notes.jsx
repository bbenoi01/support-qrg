import React, { Component, Fragment } from 'react';

export default class Notes extends Component {
    constructor(props) {
        super(props);

        this.state = {
            rolled: 'no'
        }
    }

    componentDidMount = () => {
        if(localStorage.getItem('roll') === 'watched') {
            this.setState({
                rolled: 'yes'
            })
        }
    }
    
    handleClick = () => {
        localStorage.setItem('roll', 'watched');
        this.setState({
            rolled: 'yes'
        })
    }

    persistNotes = (e) => {
        sessionStorage.setItem('notes', e.target.value);
    }

    render() {

        let notes = sessionStorage.getItem('notes');
        // let roll = localStorage.getItem('roll');

        return (
            <div className="card-body">
                <div className="col-sm-12">
                    <div className="card">
                        {this.state.rolled === 'yes' ? (
                            <Fragment>
                            <div className="card-header">
                                <b /*style={{marginLeft: '20%'}}*/>Notes</b>
                                {/* <button className="btn btn-outline-info float-right" onClick={this.clearNotes}>Clear</button> */}
                            </div>
                            <textarea onChange={this.persistNotes} defaultValue={notes} rows="15"/>
                            </Fragment>
                        ) : (
                            <Fragment>
                            <iframe
                                title='Rick Roll'
                                width="100%"
                                height="315"
                                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                                frameBorder="0"
                                controls="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                            <button className="btn btn-outline-info" onClick={this.handleClick}>Notes...Seriously</button>
                            </Fragment>
                        )}
                    </div>
                    <div className="card">
                        <div className="card-body text-left">
                            <h6 className="card-title text-center"><b>Initial Inquiry HW Language</b></h6>
                            <p><b>h0: </b>General Information</p>
                            <p><b>h1: </b>Additional Equipment Order</p>
                            <p><b>h2: </b>De/Re Related</p>
                            <p><b>h3: </b>Replacement Unit</p>
                            <p><b>h4: </b>Driver ID</p>
                            <p><b>h5: </b>Garmin</p>
                            <p><b>h6: </b>Initial Install Issue </p>
                            <p><b>h7: </b>PTO</p>
                            <p><b>h8: </b>VTU Not Reporting</p>
                            <p><b>h9: </b>Logbook</p>
                            <p><b>showtow: </b>Vehicle Showing In Towing</p>
                            <h6 className="card-title text-center"><b>Initial Inquiry SW language</b></h6>
                            <p><b>s0: </b>General Information</p>
                            <p><b>s1: </b>Alert Issue</p>
                            <p><b>s2: </b>Dashboard Issue</p>
                            <p><b>s3: </b>Fleet Service Issue</p>
                            <p><b>s4: </b>Fuel Card Issue</p>
                            <p><b>s5: </b>Dispatching Issue</p>
                            <p><b>s6: </b>Integration Issue</p>
                            <p><b>s7: </b>Live Map Issue</p>
                            <p><b>s8: </b>Mobile App Issue</p>
                            <p><b>s9: </b>Report Issues</p>
                            <p><b>lbs: </b>Logbook Software Issue</p>
                            <h6 className="card-title text-center"><b>“Random” Initial Inquiries</b></h6>
                            <p><b>PSC: </b>Posted Speed Correction</p>
                            <p><b>HD: </b>Historical Data Request</p>
                            <p><b>CSM: </b>Want To Speak With Customer Success Manager</p>
                            <p><b>FS: </b>Finance Specialist</p>
                            <p><b>CT: </b>Call Tag Request Template</p>
                            <p><b>BX: </b>Box Swap</p>
                            <h6 className="card-title text-center"><b>Troubleshooting</b></h6>
                            <p><b>ts1: </b>CalAmp Troubleshooting</p>
                            <p><b>ts2: </b>GenX Troubleshooting</p>
                            <p><b>ts3: </b>Xirgo Troubleshooting</p>
                            <p><b>ts4: </b>Driver ID Troubleshooting</p>
                            <p><b>ts5: </b>Garmin Troubleshooting</p>
                            <p><b>ts6: </b>Logbook Troubleshooting Android</p>
                            <p><b>ts7: </b>Logbook Troubleshooting iOS</p>
                            <p><b>ts8: </b>Showing In Towing</p>
                            <h6 className="card-title text-center"><b>Note Taking</b></h6>
                            <p><b>n1: </b>Date and Name</p>
                            <p><b>n2: </b>LVM and Followed Up With Email</p>
                            <p><b>n3: </b>Additional Equipment Order</p>
                            <p><b>n4: </b>Service Details</p>
                            <p><b>n5: </b>Unable To LVM/Mailbox Full</p>
                            <p><b>n6: </b>Scheduled Appointment Conformation</p>
                            <p><b>n7: </b>Appointment Completed/Close Case</p>
                            <p><b>n8: </b>Customer Wants To Speak To Account Rep</p>
                            <p><b>n9: </b>Issue Resolved/Close Case</p>
                            <h6 className="card-title text-center"><b>Tech Language</b></h6>
                            <p><b>t1: </b>Deinstall</p>
                            <p><b>t2: </b>Reinstall</p>
                            <p><b>t3: </b>De/Re</p>
                            <p><b>t4: </b>Driver ID</p>
                            <p><b>t5: </b>Garmin</p>
                            <p><b>t6: </b>Replacement Install</p>
                            <p><b>t7: </b>Towing/Wiring</p>
                            <p><b>t8: </b>Repair</p>
                            <p><b>t9: </b>Logbook</p>
                            <p><b>Tampering!: </b>Tampering</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}