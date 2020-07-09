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
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-body">
                                <select onChange={this.mfgSelect}>
                                    <option value='0' selected>Choose One</option>
                                    <option value='1'>Domestic</option>
                                    <option value='2'>Canada</option>
                                    <option value='3'>Mexico</option>
                                    <option value='4'>Government</option>
                                </select>
                                <br/>
                                <br/>
                                {this.state.mfg === '1' ? (
                                    <div>
                                        <div className="table-responsive">
                                            <table
                                                className="table table-sm table-striped table-dark"
                                                style={{paddingTop: '10px'}}
                                            >
                                                <thead className='bg-danger'>
                                                    <tr>
                                                        <th scope='col'>Designation</th>
                                                        <th scope='col'>Part</th>
                                                        <th scope='col'>SAP MMID</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>VTU <small>(Standard)</small></td>
                                                        <td data-toggle='tooltip' data-placement='top' title='Calamp 2630 LTE Verizon Gemini'><small>LMU2630LV-0000-FGUS1</small></td>
                                                        <td>1100000307</td>
                                                    </tr>
                                                    <tr>
                                                        <td>EZ Unit</td>
                                                        <td data-toggle='tooltip' data-placement='top' title='LMU3030LVBL-KZ03-VRU02'><small>LMU3030LVBL-KZ03-VRU02</small></td>
                                                        <td>1100000582</td>
                                                    </tr>
                                                    <tr>
                                                        <td>NPAT</td>
                                                        <td data-toggle='tooltip' data-placement='top' title='CalAmp TTU730LV LTE'><small>TTU730LV-0000-VRU01</small></td>
                                                        <td>1100000082</td>
                                                    </tr>
                                                    <tr>
                                                        <td>PAT</td>
                                                        <td data-toggle='tooltip' data-placement='top' title='TTU-2830 LTE VZW'><small>TTU2830LV-SQ12-VRU01</small></td>
                                                        <td>1100000241</td>
                                                    </tr>
                                                    <tr>
                                                        <td>ELD VTU</td>
                                                        <td data-toggle='tooltip' data-placement='top' title='XT6372R21100050Y- LTE VZN Base/OBD/JBUS'><small>XT6372R-FGUS3</small></td>
                                                        <td>1100000074</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="alert alert-warning" role='alert'>
                                            All Kits Include Harnesses - Excluding Camera Kits
                                        </div>
                                        <h5>
                                            ELD
                                        </h5>
                                        <div className="table-responsive">
                                            <table className="table table-sm table-striped table-dark">
                                                <thead className="bg-info">
                                                    <tr>
                                                        <th scope='col'>Designation</th>
                                                        <th scope='col'>Part</th>
                                                        <th scope='col'>SAP MMID</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>ELD VTU</td>
                                                        <td data-toggle='tooltip' data-placement='top' title='XT6372R21100050Y- LTE VZN Base/OBD/JBUS'><small>XT6372R-FGUS3</small></td>
                                                        <td>1100000074</td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td data-toggle='tooltip' data-placement='top' title='6-P Logbook (GM) Kit'><small>6-Pin Logbook Kit</small></td>
                                                        <td>1100000314</td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td data-toggle='tooltip' data-placement='top' title='GenX Jbox 9-P Logbook Kit'><small>9-Pin Logbook Kit</small></td>
                                                        <td>1100000351</td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td data-toggle='tooltip' data-placement='top' title='GenX Jbox 9-P PB Logbook Kit'><small>9-Pin Logbook Kit Peterbilt</small></td>
                                                        <td>1100000331</td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td data-toggle='tooltip' data-placement='top' title='9-P Logbook Kit w/Green Wire - PB'><small>9-Pin Logbook Kit Peterbilt w Green</small></td>
                                                        <td>1100000228</td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td data-toggle='tooltip' data-placement='top' title='GenX Jbox 9-P Logbook Kit (green wire)'><small>9-Pin Logbook Kit w Green</small></td>
                                                        <td>1100000304</td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td data-toggle='tooltip' data-placement='top' title='GNX3 9-P OBD II Logbook Kit'><small>OBD II Logbook Kit</small></td>
                                                        <td>1100000346</td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td data-toggle='tooltip' data-placement='top' title='Universal Backbone Kit'><small>Universal Backbone Kit</small></td>
                                                        <td>1100000594</td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td data-toggle='tooltip' data-placement='top' title='Universal RP1226 Kit'><small>Universal RP1226 Kit</small></td>
                                                        <td>1100000548</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <h5>
                                            Standard Fleet Tracking
                                        </h5>
                                        <div className="table-responsive">
                                            <table className="table table-sm table-striped table-dark">
                                                <thead className="bg-primary">
                                                    <tr>
                                                        <th scope='col'>Designation</th>
                                                        <th scope='col'>Part</th>
                                                        <th scope='col'>SAP MMID</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>VTU <small>(Standard)</small></td>
                                                        <td data-toggle='tooltip' data-placement='top' title='Calamp 2630 LTE Verizon Gemini'><small>LMU2630LV-0000-FGUS1</small></td>
                                                        <td>1100000307</td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td data-toggle='tooltip' data-placement='top' title='CalAmp Standard Harness'><small>5C867</small></td>
                                                        <td>1100000218</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <h5>
                                            Fleet Tracking w/Peripheral
                                        </h5>
                                        <div className="table-responsive">
                                            <table className="table table-sm table-striped table-dark">
                                                <thead className="bg-secondary">
                                                    <tr>
                                                        <th scope='col'>Designation</th>
                                                        <th scope='col'>Part</th>
                                                        <th scope='col'>SAP MMID</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>VTU <small>(Standard)</small></td>
                                                        <td data-toggle='tooltip' data-placement='top' title='Calamp 2630 LTE Verizon Gemini'><small>LMU2630LV-0000-FGUS1</small></td>
                                                        <td>1100000307</td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td data-toggle='tooltip' data-placement='top' title='CalAmp Driver ID Kit-US'><small>CalAmp Driver ID Kit</small></td>
                                                        <td>1100000598</td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td data-toggle='tooltip' data-placement='top' title='Key Fob ID'><small>Key Fob ID</small></td>
                                                        <td>1100000388</td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td data-toggle='tooltip' data-placement='top' title='CalAmp Garmin Kit'><small>CalAmp Garmin Kit</small></td>
                                                        <td>1100000039</td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td data-toggle='tooltip' data-placement='top' title='Calamp 26XX Panic Kit-EUR'><small>CalAmp Panic Kit</small></td>
                                                        <td>1100000259</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <h5>
                                            Fleet Tracking w/Peripheral (ELD)
                                        </h5>
                                        <div className="table-responsive">
                                            <table className="table table-sm table-striped table-dark">
                                                <thead className="bg-success">
                                                    <tr>
                                                        <th scope='col'>Designation</th>
                                                        <th scope='col'>Part</th>
                                                        <th scope='col'>SAP MMID</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>ELD VTU</td>
                                                        <td data-toggle='tooltip' data-placement='top' title='XT6372R21100050Y- LTE VZN Base/OBD/JBUS'><small>XT6372R-FGUS3</small></td>
                                                        <td>1100000074</td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td data-toggle='tooltip' data-placement='top' title='Xirgo Driver ID Kit'><small>Xirgo Driver ID Kit</small></td>
                                                        <td>1100000571</td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td data-toggle='tooltip' data-placement='top' title='Key Fob ID'><small>Key Fob ID</small></td>
                                                        <td>1100000388</td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td data-toggle='tooltip' data-placement='top' title='Xirgo Garmin Kit'><small>Xirgo Garmin Kit</small></td>
                                                        <td>1100000487</td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td data-toggle='tooltip' data-placement='top' title='Xirgo Panic Kit'><small>Xirgo Panic Kit</small></td>
                                                        <td>1100000044</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <h5>
                                            Camera Kits
                                        </h5>
                                        <div className="table-responsive">
                                            <table className="table table-sm table-striped table-dark">
                                                <thead className="bg-warning">
                                                    <tr>
                                                        <th scope='col'>Designation</th>
                                                        <th scope='col'>Part</th>
                                                        <th scope='col'>SAP MMID</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>ELD VTU</td>
                                                        <td data-toggle='tooltip' data-placement='top' title='XT6372R21100050Y- LTE VZN Base/OBD/JBUS'><small>XT6372R-FGUS3</small></td>
                                                        <td>1100000074</td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td data-toggle='tooltip' data-placement='top' title='Xirgo Standard Power Harness'><small>CBL-0034 NO PTO</small></td>
                                                        <td>1100000271</td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td data-toggle='tooltip' data-placement='top' title='Xirgo - Enhanced Power Cable'><small>CBL-0040 PTO</small></td>
                                                        <td>1100000219</td>
                                                    </tr>
                                                    <tr>
                                                        <td>VTU <small>(Standard)</small></td>
                                                        <td data-toggle='tooltip' data-placement='top' title='Calamp 2630 LTE Verizon Gemini'><small>LMU2630LV-0000-FGUS1</small></td>
                                                        <td>1100000307</td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td data-toggle='tooltip' data-placement='top' title='CalAmp Standard Harness'><small>5C867</small></td>
                                                        <td>1100000218</td>
                                                    </tr>
                                                    <tr className='bg-warning'>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td data-toggle='tooltip' data-placement='top' title='LTE Video - 3 Wire Kit (Pro Install)'><small>LTE Video - 3 Wire Kit (Pro Install)</small></td>
                                                        <td>1100000171</td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td data-toggle='tooltip' data-placement='top' title='LTE Video - OBD Kit (Self Install)'><small>LTE Video - OBD Kit (Self Install)</small></td>
                                                        <td>1100000216</td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td data-toggle='tooltip' data-placement='top' title='LTE Video - 9 Pin Kit (Self Install)'><small>LTE Video - 9 Pin Kit (Self Install)</small></td>
                                                        <td>1100000050</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                ) : this.state.mfg === '2' ? (
                                    <div>
                                        <div className="table-responsive">
                                            <table
                                                className="table table-sm table-striped table-dark"
                                                style={{paddingTop: '10px'}}
                                            >
                                                <thead className='bg-danger'>
                                                    <tr>
                                                        <th scope='col'>Designation</th>
                                                        <th scope='col'>Part</th>
                                                        <th scope='col'>SAP MMID</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>VTU <small>(Standard)</small></td>
                                                        <td data-toggle='tooltip' data-placement='top' title='XT6379H-FGUS3V (VODA)'><small>XT6379H-FGUS3V (VODA)</small></td>
                                                        <td>1100000472</td>
                                                    </tr>
                                                    <tr>
                                                        <td>EZ Unit</td>
                                                        <td data-toggle='tooltip' data-placement='top' title='Calamp 3030 HSPA (AT&T)'><small>LMU30H303-FGUS1</small></td>
                                                        <td>1100000065</td>
                                                    </tr>
                                                    <tr>
                                                        <td>NPAT</td>
                                                        <td data-toggle='tooltip' data-placement='top' title='TTU730 LTE AT&T'><small>TTU730LA-0000-VRU02</small></td>
                                                        <td>1100000514</td>
                                                    </tr>
                                                    <tr>
                                                        <td>PAT</td>
                                                        <td data-toggle='tooltip' data-placement='top' title='TTU-2830 (AT&T VODA)'><small>TTU2830LA-SQ12-VRU01</small></td>
                                                        <td>1100000012</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="alert alert-warning" role='alert'>
                                            All Kits Include Harnesses
                                        </div>
                                        <h5>
                                            ELD
                                        </h5>
                                        <div className="table-responsive">
                                            <table className="table table-sm table-striped table-dark">
                                                <thead className="bg-info">
                                                    <tr>
                                                        <th scope='col'>Designation</th>
                                                        <th scope='col'>Part</th>
                                                        <th scope='col'>SAP MMID</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>ELD VTU</td>
                                                        <td data-toggle='tooltip' data-placement='top' title='XT6379H-FGUS3V (VODA)'><small>XT6379H-FGUS3V (VODA)</small></td>
                                                        <td>1100000472</td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td data-toggle='tooltip' data-placement='top' title='6-P Logbook (GM) Kit'><small>6-Pin Logbook Kit</small></td>
                                                        <td>1100000314</td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td data-toggle='tooltip' data-placement='top' title='GenX Jbox 9-P Logbook Kit'><small>9-Pin Logbook Kit</small></td>
                                                        <td>1100000351</td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td data-toggle='tooltip' data-placement='top' title='GenX Jbox 9-P PB Logbook Kit'><small>9-Pin Logbook Kit Peterbilt</small></td>
                                                        <td>1100000331</td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td data-toggle='tooltip' data-placement='top' title='9-P Logbook Kit w/Green Wire - PB'><small>9-Pin Logbook Kit Peterbilt w Green</small></td>
                                                        <td>1100000228</td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td data-toggle='tooltip' data-placement='top' title='GenX Jbox 9-P Logbook Kit (green wire)'><small>9-Pin Logbook Kit w Green</small></td>
                                                        <td>1100000304</td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td data-toggle='tooltip' data-placement='top' title='GNX3 9-P OBD II Logbook Kit'><small>OBD II Logbook Kit</small></td>
                                                        <td>1100000346</td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td data-toggle='tooltip' data-placement='top' title='Universal Backbone Kit'><small>Universal Backbone Kit</small></td>
                                                        <td>1100000594</td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td data-toggle='tooltip' data-placement='top' title='Universal RP1226 Kit'><small>Universal RP1226 Kit</small></td>
                                                        <td>1100000548</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <h5>
                                            Standard Fleet Tracking
                                        </h5>
                                        <div className="table-responsive">
                                            <table className="table table-sm table-striped table-dark">
                                                <thead className="bg-primary">
                                                    <tr>
                                                        <th scope='col'>Designation</th>
                                                        <th scope='col'>Part</th>
                                                        <th scope='col'>SAP MMID</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>VTU <small>(Standard)</small></td>
                                                        <td data-toggle='tooltip' data-placement='top' title='XT6379H-FGUS3V (VODA)'><small>XT6379H-FGUS3V (VODA)</small></td>
                                                        <td>1100000472</td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td data-toggle='tooltip' data-placement='top' title='Xirgo Standard Power Harness'><small>CBL-0034 NO PTO</small></td>
                                                        <td>1100000271</td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td data-toggle='tooltip' data-placement='top' title='Xirgo Enhanced Power Cable'><small>CBL-0040 PTO</small></td>
                                                        <td>1100000219</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <h5>
                                            Fleet Tracking w/Peripheral
                                        </h5>
                                        <div className="table-responsive">
                                            <table className="table table-sm table-striped table-dark">
                                                <thead className="bg-secondary">
                                                    <tr>
                                                        <th scope='col'>Designation</th>
                                                        <th scope='col'>Part</th>
                                                        <th scope='col'>SAP MMID</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>VTU <small>(Standard)</small></td>
                                                        <td data-toggle='tooltip' data-placement='top' title='XT6379H-FGUS3V (VODA)'><small>XT6379H-FGUS3V (VODA)</small></td>
                                                        <td>1100000472</td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td data-toggle='tooltip' data-placement='top' title='Xirgo Driver ID Kit'><small>Xirgo Driver ID Kit</small></td>
                                                        <td>1100000571</td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td data-toggle='tooltip' data-placement='top' title='Key Fob ID'><small>Key Fob ID</small></td>
                                                        <td>1100000388</td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td data-toggle='tooltip' data-placement='top' title='Xirgo Garmin Kit'><small>Xirgo Garmin Kit</small></td>
                                                        <td>1100000487</td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td data-toggle='tooltip' data-placement='top' title='Xirgo Panic Kit'><small>Xirgo Panic Kit</small></td>
                                                        <td>1100000044</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                ) : this.state.mfg === '3' ? (
                                    <div>
                                        <div className="table-responsive">
                                            <table
                                                className="table table-sm table-striped table-dark"
                                                style={{paddingTop: '10px'}}
                                            >
                                                <thead className='bg-danger'>
                                                    <tr>
                                                        <th scope='col'>Designation</th>
                                                        <th scope='col'>Part</th>
                                                        <th scope='col'>SAP MMID</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>VTU <small>(Standard)</small></td>
                                                        <td data-toggle='tooltip' data-placement='top' title='CalAmp 2630 w/battery - Gemini 2G - Voda'><small>LMU26G3001-FVGL1</small></td>
                                                        <td>1100000185</td>
                                                    </tr>
                                                    <tr>
                                                        <td>PAT</td>
                                                        <td data-toggle='tooltip' data-placement='top' title='CalAmp 2830 for Mexico - w/Vodafone SIM'><small>TTU28G600M-FVGL1</small></td>
                                                        <td>1100000136</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="alert alert-warning" role='alert'>
                                            All Kits Include Harnesses
                                        </div>
                                        <h5>
                                            Standard Fleet Tracking
                                        </h5>
                                        <div className="table-responsive">
                                            <table className="table table-sm table-striped table-dark">
                                                <thead className="bg-primary">
                                                    <tr>
                                                        <th scope='col'>Designation</th>
                                                        <th scope='col'>Part</th>
                                                        <th scope='col'>SAP MMID</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>VTU <small>(Standard)</small></td>
                                                        <td data-toggle='tooltip' data-placement='top' title='CalAmp 2630 w/battery - Gemini 2G - Voda'><small>LMU26G3001-FVGL1</small></td>
                                                        <td>1100000185</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <h5>
                                            Fleet Tracking w/Peripheral
                                        </h5>
                                        <div className="table-responsive">
                                            <table className="table table-sm table-striped table-dark">
                                                <thead className="bg-secondary">
                                                    <tr>
                                                        <th scope='col'>Designation</th>
                                                        <th scope='col'>Part</th>
                                                        <th scope='col'>SAP MMID</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>VTU <small>(Standard)</small></td>
                                                        <td data-toggle='tooltip' data-placement='top' title='CalAmp 2630 w/battery - Gemini 2G - Voda'><small>LMU26G3001-FVGL1</small></td>
                                                        <td>1100000185</td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td data-toggle='tooltip' data-placement='top' title='CalAmp Driver ID Kit-US'><small>CalAmp Driver ID Kit</small></td>
                                                        <td>1100000598</td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td data-toggle='tooltip' data-placement='top' title='Key Fob ID'><small>Key Fob ID</small></td>
                                                        <td>1100000388</td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td data-toggle='tooltip' data-placement='top' title='Calamp 26XX Panic Kit-EUR'><small>CalAmp Panic Kit</small></td>
                                                        <td>1100000259</td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td data-toggle='tooltip' data-placement='top' title='Immobilization Kit w/ Engine Connect'><small>Immobilization Kit</small></td>
                                                        <td>1100000541</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                ) : this.state.mfg === '4' ? (
                                    <div>
                                        <div className="table-responsive">
                                            <table
                                                className="table table-sm table-striped table-dark"
                                                style={{paddingTop: '10px'}}
                                            >
                                                <thead className='bg-danger'>
                                                    <tr>
                                                        <th scope='col'>Designation</th>
                                                        <th scope='col'>Part</th>
                                                        <th scope='col'>SAP MMID</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>VTU <small>(Standard)</small></td>
                                                        <td data-toggle='tooltip' data-placement='top' title='XT6372R21100050Y- LTE VZN Base/OBD/JBUS'><small>XT6372R-FGUS3</small></td>
                                                        <td>1100000074</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="alert alert-warning" role='alert'>
                                            GOVERNMENT ORDERS ONLY
                                        </div>
                                        <h5>
                                            ELD
                                        </h5>
                                        <div className="table-responsive">
                                            <table className="table table-sm table-striped table-dark">
                                                <thead className="bg-info">
                                                    <tr>
                                                        <th scope='col'>Designation</th>
                                                        <th scope='col'>Part</th>
                                                        <th scope='col'>SAP MMID</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>ELD VTU</td>
                                                        <td data-toggle='tooltip' data-placement='top' title='XT6372R21100050Y- LTE VZN Base/OBD/JBUS'><small>XT6372R-FGUS3</small></td>
                                                        <td>1100000074</td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td data-toggle='tooltip' data-placement='top' title='GOV. OBD II Logbook Cable (Powered)'><small>GOV. OBD II Logbook Cable (Powered)</small></td>
                                                        <td>1100000641</td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td data-toggle='tooltip' data-placement='top' title='Mack Connector Kit'><small>Mack Connector Kit</small></td>
                                                        <td>1100000562</td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td data-toggle='tooltip' data-placement='top' title='Universal Backbone Kit'><small>Universal Backbone Kit</small></td>
                                                        <td>1100000594</td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td data-toggle='tooltip' data-placement='top' title='Universal RP1226 Kit'><small>Universal RP1226 Kit</small></td>
                                                        <td>1100000548</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <h5>
                                            Fleet Tracking w/Peripheral (ELD)
                                        </h5>
                                        <div className="table-responsive">
                                            <table className="table table-sm table-striped table-dark">
                                                <thead className="bg-success">
                                                    <tr>
                                                        <th scope='col'>Designation</th>
                                                        <th scope='col'>Part</th>
                                                        <th scope='col'>SAP MMID</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>ELD VTU</td>
                                                        <td data-toggle='tooltip' data-placement='top' title='XT6372R21100050Y- LTE VZN Base/OBD/JBUS'><small>XT6372R-FGUS3</small></td>
                                                        <td>1100000074</td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td data-toggle='tooltip' data-placement='top' title='Xirgo Driver ID Kit'><small>Xirgo Driver ID Kit</small></td>
                                                        <td>1100000571</td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td data-toggle='tooltip' data-placement='top' title='Key Fob ID'><small>Key Fob ID</small></td>
                                                        <td>1100000388</td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td data-toggle='tooltip' data-placement='top' title='Xirgo Garmin Kit'><small>Xirgo Garmin Kit</small></td>
                                                        <td>1100000487</td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td data-toggle='tooltip' data-placement='top' title='Xirgo Panic Kit'><small>Xirgo Panic Kit</small></td>
                                                        <td>1100000044</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <h5>
                                            Camera Kits
                                        </h5>
                                        <div className="table-responsive">
                                            <table className="table table-sm table-striped table-dark">
                                                <thead className="bg-warning">
                                                    <tr>
                                                        <th scope='col'>Designation</th>
                                                        <th scope='col'>Part</th>
                                                        <th scope='col'>SAP MMID</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>ELD VTU</td>
                                                        <td data-toggle='tooltip' data-placement='top' title='XT6372R21100050Y- LTE VZN Base/OBD/JBUS'><small>XT6372R-FGUS3</small></td>
                                                        <td>1100000074</td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td data-toggle='tooltip' data-placement='top' title='LTE Video - 3 Wire Kit (Pro Install)'><small>LTE Video - 3 Wire Kit (Pro Install)</small></td>
                                                        <td>1100000171</td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td data-toggle='tooltip' data-placement='top' title='LTE Video - OBD Kit (Self Install)'><small>LTE Video - OBD Kit (Self Install)</small></td>
                                                        <td>1100000216</td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td data-toggle='tooltip' data-placement='top' title='LTE Video - 9 Pin Kit (Self Install)'><small>LTE Video - 9 Pin Kit (Self Install)</small></td>
                                                        <td>1100000050</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                ) : null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
