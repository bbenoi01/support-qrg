import { connect } from 'react-redux';
import RevealProcedures from './revealProcedures';

function mapStoreToProps(store) {
    return {
        procedure: store.app.procedure
    }
}

export default connect(mapStoreToProps)(RevealProcedures);