import { connect } from 'react-redux';
import Day2Day from './day2Day';

function mapStoreToProps(store) {
    return {
        topic: store.app.topic,
        day2day: store.app.day2day
    }
}

export default connect(mapStoreToProps)(Day2Day);