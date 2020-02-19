import { connect } from 'react-redux';
import FleetCare from './fleetCare';

function mapStoreToProps(store) {
    return {
        topic: store.app.topic,
        fleetcare: store.app.fleetcare,
        procedure: store.app.procedure
    }
}

export default connect(mapStoreToProps)(FleetCare);