import { connect } from 'react-redux';
import SalesForce from './salesForce';

function mapStoreToProps(store) {
    return {
        topic: store.app.topic,
        salesforce: store.app.salesforce
    }
}

export default connect(mapStoreToProps)(SalesForce);