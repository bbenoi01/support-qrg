import React, { Component } from 'react';

export default class MobileApps extends Component {

    render() {
        return (
            <div className="card-body">
                <div className="card-body">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-body text-left">
                                <h5 className="card-title text-center">Reveal Manager</h5>
                                <p><b>Android: </b>1.107.3.1</p>
                                <p><b>iOS: </b>1.103.1</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-body text-left">
                                <h5 className="card-title text-center">Reveal ELD LogBook</h5>
                                <p><b>Android: </b>3.26.0.1</p>
                                <p><b>iOS: </b>3.24.1.12.1</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-body text-left">
                                <h5 className="card-title text-center">FSD</h5>
                                <p><b>Android: </b>1.6.0.1</p>
                                {/* <p><b>iOS: </b>3.23.2</p> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-body text-left">
                                <h5 className="card-title text-center">Reveal Driver</h5>
                                <p><b>Android: </b>1.38.0.6</p>
                                <p><b>iOS: </b>1.32</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
