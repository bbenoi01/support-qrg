import { connect } from 'react-redux';
import LogBook from './logBook';

function mapStoreToProps(store) {
    return {
        topic: store.app.topic,
        logbook: store.app.logbook,
        troubleshooting: store.app.troubleshooting
    }
}

export  default connect(mapStoreToProps)(LogBook);