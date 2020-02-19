import React, { Component } from 'react';
import {
    tslbTopicToggle
} from '../../../../actions/appAction';

export default class Configs extends Component {
    constructor(props) {
        super(props);

        this.tslbTopicSelectInput = this.tslbTopicSelectInput.bind(this);

    }

    tslbTopicSelectInput(e) {
        const { dispatch } = this.props;
        const { value } = e.target;
        dispatch(tslbTopicToggle(value));
    }

    render() {
        const { troubleshooting } = this.props;

        if (troubleshooting === 'TSLB1') {
            return (
                <div className="card-body">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-body">
                                <a href="ConfigsWorkbook.xlsx" target='_blank'><p>Config Workbook</p></a>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="card-body">
                    <div className="col-sm-12">
                        <button value='TSLB1' onClick={this.tslbTopicSelectInput} className="btn btn-outline-primary">Configurations</button>
                    </div>
                </div>
            );
        }
        
    }
}
