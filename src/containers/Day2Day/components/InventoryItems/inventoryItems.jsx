import React, { Component } from 'react';

export default class InventoryItems extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mfg: ''
        }
    }

    mfgSelect = (e) => {
        this.setState({
            mfg: e.target.value
        })
    }

    render() {
        return (
            <div className="card-body">
                <div className="row justify-content-center">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-body">
                                <select onChange={this.mfgSelect}>
                                    <option value='0' selected>Choose One</option>
                                    <option value='1'>CalAmp</option>
                                    <option value='2'>Xirgo</option>
                                    <option value='3'>LogBook</option>
                                    <option value='4'>Universal</option>
                                </select>
                                <br/>
                                <br/>
                                {this.state.mfg === '1' ? (
                                    <table className="table table-sm table-striped table-dark"
                                        style={{paddingTop: '10px'}}
                                    >
                                        <thead className='bg-danger'>
                                            <tr>
                                                <th scope='col'>Part</th>
                                                <th scope='col'>Carrier</th>
                                                <th scope='col'>Part #</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Plug & Play</td>
                                                <td>VZ</td>
                                                <td>1100000582</td>
                                            </tr>
                                            <tr>
                                                <td>TTU 2830</td>
                                                <td>VZ</td>
                                                <td>1100000241</td>
                                            </tr>
                                            <tr>
                                                <td>LMU 2630</td>
                                                <td>VZ</td>
                                                <td>1100000307</td>
                                            </tr>
                                            <tr>
                                                <td>TTU 730 <small>(NPAT)</small></td>
                                                <td>VZ</td>
                                                <td>1100000082</td>
                                            </tr>
                                        </tbody>
                                        <thead className='bg-info'>
                                            <tr>
                                                <th scope='col'>Part</th>
                                                <th scope='col'>Carrier</th>
                                                <th scope='col'>Part #</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>TTU 2830 <small>(Canada)</small></td>
                                                <td>AT&T</td>
                                                <td>1100000012</td>
                                            </tr>
                                            <tr>
                                                <td>LMU 2630 <small>(Mexico)</small></td>
                                                <td>Voda</td>
                                                <td>1100000185</td>
                                            </tr>
                                        </tbody>
                                        <thead className='bg-success'>
                                            <tr>
                                                <th scope='col'>Part</th>
                                                <th scope='col'>Type</th>
                                                <th scope='col'>Part #</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Power Harness</td>
                                                <td>Standard</td>
                                                <td>1100000218</td>
                                            </tr>
                                            <tr>
                                                <td>Power Harness</td>
                                                <td>Garmin</td>
                                                <td>1100000256</td>
                                            </tr>
                                            <tr>
                                                <td>DriverID Kit</td>
                                                <td>US</td>
                                                <td>1100000598</td>
                                            </tr>
                                            <tr>
                                                <td>Panic Kit</td>
                                                <td></td>
                                                <td>1100000259</td>
                                            </tr>
                                            <tr>
                                                <td>Garmin Kit</td>
                                                <td></td>
                                                <td>1100000039</td>
                                            </tr>
                                            <tr>
                                                <td>Garmin Cable</td>
                                                <td></td>
                                                <td>1100000005</td>
                                            </tr>
                                            <tr>
                                                <td>DB9 to Serial</td>
                                                <td></td>
                                                <td>1100000170</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                ) : this.state.mfg === '2' ? (
                                    <table className="table table-sm table-striped table-dark">
                                        <thead className='bg-danger'>
                                            <tr>
                                                <th scope='col'>Part</th>
                                                <th scope='col'>Carrier</th>
                                                <th scope='col'>Part #</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>XT6372R-FGUS3</td>
                                                <td>VZ</td>
                                                <td>1100000074</td>
                                            </tr>
                                            <tr>
                                                <td>XT6372R-FGUS2</td>
                                                <td>VZ</td>
                                                <td>1100000411</td>
                                            </tr>
                                        </tbody>
                                        <thead className='bg-info'>
                                            <tr>
                                                <th scope='col'>Part</th>
                                                <th scope='col'>Carrier</th>
                                                <th scope='col'>Part #</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>XT6379A-FGUS3</td>
                                                <td>AT&T<small>(US)</small></td>
                                                <td>1100000061</td>
                                            </tr>
                                            <tr>
                                                <td>XT6379H-FGUS3V</td>
                                                <td>AT&T<small>(Canada)</small></td>
                                                <td>1100000472</td>
                                            </tr>
                                        </tbody>
                                        <thead className='bg-success'>
                                            <tr>
                                                <th scope='col'>Part</th>
                                                <th scope='col'>Type</th>
                                                <th scope='col'>Part #</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Power Harness</td>
                                                <td>Standard</td>
                                                <td>1100000271</td>
                                            </tr>
                                            <tr>
                                                <td>Power Harness</td>
                                                <td>Enhanced</td>
                                                <td>1100000219</td>
                                            </tr>
                                            <tr>
                                                <td>DriverID Kit</td>
                                                <td>US</td>
                                                <td>1100000571</td>
                                            </tr>
                                            <tr>
                                                <td>Panic Kit</td>
                                                <td></td>
                                                <td>1100000044</td>
                                            </tr>
                                            <tr>
                                                <td>Garmin Kit</td>
                                                <td></td>
                                                <td>1100000487</td>
                                            </tr>
                                            <tr>
                                                <td>Garmin Cable</td>
                                                <td></td>
                                                <td>1100000009</td>
                                            </tr>
                                            <tr>
                                                <td>Xirgo Adapter Cable</td>
                                                <td></td>
                                                <td>1100000513</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                ) : this.state.mfg === '3' ? (
                                    <table className="table table-sm table-striped table-dark">
                                        <thead className='bg-primary'>
                                            <tr>
                                                <th scope='col'>Part</th>
                                                <th scope='col'>Category</th>
                                                <th scope='col'>Part #</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>OBDII</td>
                                                <td>Kit</td>
                                                <td>1100000346</td>
                                            </tr>
                                            <tr>
                                                <td>Backbone</td>
                                                <td>Kit</td>
                                                <td>1100000594</td>
                                            </tr>
                                            <tr>
                                                <td>Mack Connector</td>
                                                <td>Kit</td>
                                                <td>1100000562</td>
                                            </tr>
                                            <tr>
                                                <td>RP1226</td>
                                                <td>Kit</td>
                                                <td>1100000548</td>
                                            </tr>
                                            <tr>
                                                <td>6-pin</td>
                                                <td>Kit</td>
                                                <td>1100000314</td>
                                            </tr>
                                            <tr>
                                                <td>9-pin Black</td>
                                                <td>Kit</td>
                                                <td>1100000351</td>
                                            </tr>
                                            <tr>
                                                <td>9-pin Black PB</td>
                                                <td>Kit</td>
                                                <td>1100000331</td>
                                            </tr>
                                            <tr>
                                                <td>9-pin Green</td>
                                                <td>Kit</td>
                                                <td>1100000304</td>
                                            </tr>
                                            <tr>
                                                <td>9-pin Green PB</td>
                                                <td>Kit</td>
                                                <td>1100000228</td>
                                            </tr>
                                        </tbody>
                                        <thead className='bg-warning'>
                                            <tr>
                                                <th scope='col'>Part</th>
                                                <th scope='col'>Category</th>
                                                <th scope='col'>Part #</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>OBD Y</td>
                                                <td>Cable</td>
                                                <td>1100000195</td>
                                            </tr>
                                            <tr>
                                                <td>Volvo Backbone</td>
                                                <td>Cable</td>
                                                <td>1100000609</td>
                                            </tr>
                                            <tr>
                                                <td>RP1226 Adapter Harness</td>
                                                <td>Cable</td>
                                                <td>1100000600</td>
                                            </tr>
                                            <tr>
                                                <td>6-pin ELD</td>
                                                <td>Cable</td>
                                                <td>1100000492</td>
                                            </tr>
                                            <tr>
                                                <td>9-pin Black ELD</td>
                                                <td>Cable</td>
                                                <td>1100000387</td>
                                            </tr>
                                            <tr>
                                                <td>9-pin Black PB ELD</td>
                                                <td>Cable</td>
                                                <td>1100000361</td>
                                            </tr>
                                            <tr>
                                                <td>9-pin Green ELD</td>
                                                <td>Cable</td>
                                                <td>1100000420</td>
                                            </tr>
                                            <tr>
                                                <td>9-pin Green PB ELD</td>
                                                <td>Cable</td>
                                                <td>1100000325</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                ) : this.state.mfg === '4' ? (
                                    <table className="table table-sm table-striped table-dark">
                                        <thead className='bg-success'>
                                            <tr>
                                                <th scope='col'>Part</th>
                                                <th scope='col'>Category</th>
                                                <th scope='col'>Part #</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Key Fob</td>
                                                <td>General</td>
                                                <td>1100000388</td>
                                            </tr>
                                            <tr>
                                                <td>Panic/Privacy Button</td>
                                                <td>General</td>
                                                <td>1100000296</td>
                                            </tr>
                                            <tr>
                                                <td>Key Fob Reader</td>
                                                <td>General</td>
                                                <td>1100000285</td>
                                            </tr>
                                            <tr>
                                                <td>Small Buzzer</td>
                                                <td>General</td>
                                                <td>1100000163</td>
                                            </tr>
                                            <tr>
                                                <td>PTO Door Switch</td>
                                                <td>General</td>
                                                <td>1100000135</td>
                                            </tr>
                                            <tr>
                                                <td>Screw-On Antenna</td>
                                                <td>General</td>
                                                <td>1100000344</td>
                                            </tr>
                                            <tr>
                                                <td>Ignition Kill Switch</td>
                                                <td>General</td>
                                                <td>1100000465</td>
                                            </tr>
                                            <tr>
                                                <td>24 Volt Relay</td>
                                                <td>General</td>
                                                <td>1100000575</td>
                                            </tr>
                                            <tr>
                                                <td>Relay Cable</td>
                                                <td>General</td>
                                                <td>1100000567</td>
                                            </tr>
                                            <tr>
                                                <td>Garmin Data Cable</td>
                                                <td>General</td>
                                                <td>1100000506</td>
                                            </tr>
                                        </tbody>
                                        <thead className='bg-danger'>
                                            <tr>
                                                <th scope='col'>Part</th>
                                                <th scope='col'>Category</th>
                                                <th scope='col'>Part #</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>32GB SD Card</td>
                                                <td>Video</td>
                                                <td>1100000379</td>
                                            </tr>
                                            <tr>
                                                <td>32GB SD Card Replacement</td>
                                                <td>Video</td>
                                                <td>1100000545</td>
                                            </tr>
                                            <tr>
                                                <td>3-Wire Power Harness<small>-Pro-</small></td>
                                                <td>Video</td>
                                                <td>1100000177</td>
                                            </tr>
                                            <tr>
                                                <td>9-Pin Power Harness<small>-Self-</small></td>
                                                <td>Video</td>
                                                <td>1100000209</td>
                                            </tr>
                                            <tr>
                                                <td>OBDII Power Harness<small>-Self-</small></td>
                                                <td>Video</td>
                                                <td>1100000151</td>
                                            </tr>
                                            <tr>
                                                <td>OS-Camera 3-Wire</td>
                                                <td>Video</td>
                                                <td>1100000261</td>
                                            </tr>
                                            <tr>
                                                <td>OS-Camera 9-Pin</td>
                                                <td>Video</td>
                                                <td>1100000111</td>
                                            </tr>
                                            <tr>
                                                <td>OS-Camera OBDII</td>
                                                <td>Video</td>
                                                <td>1100000076</td>
                                            </tr>
                                            <tr>
                                                <td>Camera w/64GB SD Card</td>
                                                <td>Video</td>
                                                <td>1100000588</td>
                                            </tr>
                                            <tr>
                                                <td>Camera w/128GB SD Card</td>
                                                <td>Video</td>
                                                <td>1100000565</td>
                                            </tr>
                                            <tr>
                                                <td>Smart Wit PCB</td>
                                                <td>Video</td>
                                                <td>1100000595</td>
                                            </tr>
                                            <tr>
                                                <td>Smart Wit Cam<small>-CP2 rd face cam-</small></td>
                                                <td>Video</td>
                                                <td>1100000579</td>
                                            </tr>
                                            <tr>
                                                <td>3-Wire Kit<small>-Pro-</small></td>
                                                <td>Video Kit</td>
                                                <td>1100000171</td>
                                            </tr>
                                            <tr>
                                                <td>9-Pin Kit<small>-Self-</small></td>
                                                <td>Video Kit</td>
                                                <td>1100000045</td>
                                            </tr>
                                            <tr>
                                                <td>OBDII Kit<small>-Self-</small></td>
                                                <td>Video Kit</td>
                                                <td>1100000216</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                ) : null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
