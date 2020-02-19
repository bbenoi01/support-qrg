import React, { Component } from 'react';

export default class Outbound extends Component {
    render() {
        return (
            <div className="card-body">
                <div className="col-sm-12">
                    <div className="card">
                        <div className="card-body">
                            <p><b>Voice Mail Msg - Outbound</b></p>
                            <br/>
                            <p>Hello, this is [Name], calling with Verizon Connect.This message is for [Customer Name] and 
                                I am calling regarding your [Reported issue and Case Number]. Please give us a call back at
                                844-617-1100 at your earliest convenience so that we may assist you in resolving this issue.
                                Thank you for being a Verizon Connect valued customer, we appreciate your business. Have a
                                great day.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}