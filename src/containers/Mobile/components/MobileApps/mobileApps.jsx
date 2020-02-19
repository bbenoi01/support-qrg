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
                                <p><b>Android: </b>1.103.2.1</p>
                                <p><b>iOS: </b>1.103.1</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-body text-left">
                                <h5 className="card-title text-center">Reveal ELD LogBook</h5>
                                <p><b>Android: </b>3.22.0.2</p>
                                <p><b>iOS: </b>3.22.2.7</p><br/>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-body text-left">
                                <h5 className="card-title text-center">Reveal Field App</h5>
                                <p><b>Android: </b>1.34.0.1</p>
                                <p><b>iOS: </b>1.32</p><br/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
