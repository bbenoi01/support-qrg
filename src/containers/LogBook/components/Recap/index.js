import { connect } from 'react-redux';
import Recap from './recap';

function mapStoreToProps(store) {
    return {
        ruleset: store.app.ruleset,
        recap: store.app.recap,
        recapHH: store.app.recapHH,
        recapMM: store.app.recapMM,
        recapSS: store.app.recapSS,
        day1WorkHours: store.app.day1WorkHours,
        day1WorkMin: store.app.day1WorkMin,
        day1WorkSec: store.app.day1WorkSec,
        day1: store.app.day1,
        day2WorkHours: store.app.day2WorkHours,
        day2WorkMin: store.app.day2WorkMin,
        day2WorkSec: store.app.day2WorkSec,
        day2: store.app.day2,
        day3WorkHours: store.app.day3WorkHours,
        day3WorkMin: store.app.day3WorkMin,
        day3WorkSec: store.app.day3WorkSec,
        day3: store.app.day3,
        day4WorkHours: store.app.day4WorkHours,
        day4WorkMin: store.app.day4WorkMin,
        day4WorkSec: store.app.day4WorkSec,
        day4: store.app.day4,
        day5WorkHours: store.app.day5WorkHours,
        day5WorkMin: store.app.day5WorkMin,
        day5WorkSec: store.app.day5WorkSec,
        day5: store.app.day5,
        day6WorkHours: store.app.day6WorkHours,
        day6WorkMin: store.app.day6WorkMin,
        day6WorkSec: store.app.day6WorkSec,
        day6: store.app.day6,
        day7WorkHours: store.app.day7WorkHours,
        day7WorkMin: store.app.day7WorkMin,
        day7WorkSec: store.app.day7WorkSec,
        day7: store.app.day7,
        day8WorkHours: store.app.day8WorkHours,
        day8WorkMin: store.app.day8WorkMin,
        day8WorkSec: store.app.day8WorkSec,
        day8: store.app.day8
    }
}

export default connect(mapStoreToProps)(Recap);