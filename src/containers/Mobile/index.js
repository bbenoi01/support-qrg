import { connect } from 'react-redux';
import Mobile from './mobile';

function mapStoreToProps(store) {
    return {
        topic: store.app.topic,
        mobile: store.app.mobile,
        android: store.app.android,
        apple: store.app.apple
    }
}

export default connect(mapStoreToProps)(Mobile);