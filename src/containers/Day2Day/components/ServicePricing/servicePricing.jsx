import React, { Component } from 'react';

export default class Pricing extends Component {

    render() {
        return (
            <div className="card-body">
                <div className="col-sm-12">
                    <div className="card">
                        <div className="card-body text-left">
                            <p><b>Repair: </b>$0</p>
                            <p><b>De/Re: </b>$100</p>
                            <p><b>Deinstall: </b>$100</p>
                            <p><b>Reinstall: </b>$100</p>
                            <p><b>Replacement Unit: </b>$150</p>
                            <p><b>Replacement Install: </b>$100</p>
                            <p><b>Tampering Fee: </b>$100</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
