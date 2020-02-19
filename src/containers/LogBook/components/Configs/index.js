import { connect } from 'react-redux';
import Configs from './configs';

function mapStoreToProps(store) {
    return {
        troubleshooting: store.app.troubleshooting
    }
}

export default connect(mapStoreToProps)(Configs);