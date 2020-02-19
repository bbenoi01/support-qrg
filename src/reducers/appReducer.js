import { types } from '../actions/appAction';

const INITIAL_STATE = {
    topic: '',
    procedure: '',
    troubleshooting: '',
    android: '',
    apple: '',
    day2day: '',
    general: '',
    mobile: '',
    salesforce: '',
    logbook: '',
    fleetcare: '',
    ruleset: '',
    recap: '',
    day1WorkHours: '',
    day1WorkMin: '',
    day1WorkSec: '',
    day1: '',
    day2WorkHours: '',
    day2WorkMin: '',
    day2WorkSec: '',
    day2: '',
    day3WorkHours: '',
    day3WorkMin: '',
    day3WorkSec: '',
    day3: '',
    day4WorkHours: '',
    day4WorkMin: '',
    day4WorkSec: '',
    day4: '',
    day5WorkHours: '',
    day5WorkMin: '',
    day5WorkSec: '',
    day5: '',
    day6WorkHours: '',
    day6WorkMin: '',
    day6WorkSec: '',
    day6: '',
    day7WorkHours: '',
    day7WorkMin: '',
    day7WorkSec: '',
    day7: '',
    day8WorkHours: '',
    day8WorkMin: '',
    day8WorkSec: '',
    day8: '',};
export default function AppReducer(state = INITIAL_STATE, action) {
    const { type, payload } = action;
    switch (type) {
        case (types.TOPIC_TOGGLE): {
            return {
                ...state,
                topic: payload
            };
        }

        case (types.ANDROID_TOGGLE): {
            return {
                ...state,
                android: payload
            };
        }

        case (types.APPLE_TOGGLE): {
            return {
                ...state,
                apple: payload
            };
        }

        case (types.PROCEDURE_TOGGLE): {
            return {
                ...state,
                procedure: payload
            };
        }

        case (types.LOGBOOK_TROUBLESHOOT_TOGGLE): {
            return {
                ...state,
                troubleshooting: payload
            };
        }

        case (types.D2D_TOGGLE): {
            return {
                ...state,
                day2day: payload
            };
        }

        case (types.GENERAL_TOGGLE): {
            return {
                ...state,
                general: payload
            };
        }

        case (types.MOBILE_TOGGLE): {
            return {
                ...state,
                mobile: payload
            };
        }

        case (types.SALES_FORCE_TOGGLE): {
            return {
                ...state,
                salesforce: payload
            };
        }

        case (types.LOG_BOOK_TOGGLE): {
            return {
                ...state,
                logbook: payload
            };
        }

        case (types.FLEETCARE_TOGGLE): {
            return {
                ...state,
                fleetcare: payload
            };
        }

        case (types.RULESET_TOGGLE): {
            if (payload === 'RS1') {
                return {
                    ...state,
                    ruleset: payload,
                    recap: 60,
                    day1WorkHours: '',
                    day1WorkMin: '',
                    day1WorkSec: '',
                    day1: '',
                    day2WorkHours: '',
                    day2WorkMin: '',
                    day2WorkSec: '',
                    day2: '',
                    day3WorkHours: '',
                    day3WorkMin: '',
                    day3WorkSec: '',
                    day3: '',
                    day4WorkHours: '',
                    day4WorkMin: '',
                    day4WorkSec: '',
                    day4: '',
                    day5WorkHours: '',
                    day5WorkMin: '',
                    day5WorkSec: '',
                    day5: '',
                    day6WorkHours: '',
                    day6WorkMin: '',
                    day6WorkSec: '',
                    day6: '',
                    day7WorkHours: '',
                    day7WorkMin: '',
                    day7WorkSec: '',
                    day7: '',
                    day8WorkHours: '',
                    day8WorkMin: '',
                    day8WorkSec: '',
                    day8: '',
                            }
            } else if (payload === 'RS2') {
                return {
                    ...state,
                    ruleset: payload,
                    recap: 70,
                    day1WorkHours: '',
                    day1WorkMin: '',
                    day1WorkSec: '',
                    day1: '',
                    day2WorkHours: '',
                    day2WorkMin: '',
                    day2WorkSec: '',
                    day2: '',
                    day3WorkHours: '',
                    day3WorkMin: '',
                    day3WorkSec: '',
                    day3: '',
                    day4WorkHours: '',
                    day4WorkMin: '',
                    day4WorkSec: '',
                    day4: '',
                    day5WorkHours: '',
                    day5WorkMin: '',
                    day5WorkSec: '',
                    day5: '',
                    day6WorkHours: '',
                    day6WorkMin: '',
                    day6WorkSec: '',
                    day6: '',
                    day7WorkHours: '',
                    day7WorkMin: '',
                    day7WorkSec: '',
                    day7: '',
                    day8WorkHours: '',
                    day8WorkMin: '',
                    day8WorkSec: '',
                    day8: '',
                            };
            } else if (payload === 'RS0') {
                return {
                    ...state,
                    ruleset: '',
                    recap: '',
                    day1WorkHours: '',
                    day1WorkMin: '',
                    day1WorkSec: '',
                    day1: '',
                    day2WorkHours: '',
                    day2WorkMin: '',
                    day2WorkSec: '',
                    day2: '',
                    day3WorkHours: '',
                    day3WorkMin: '',
                    day3WorkSec: '',
                    day3: '',
                    day4WorkHours: '',
                    day4WorkMin: '',
                    day4WorkSec: '',
                    day4: '',
                    day5WorkHours: '',
                    day5WorkMin: '',
                    day5WorkSec: '',
                    day5: '',
                    day6WorkHours: '',
                    day6WorkMin: '',
                    day6WorkSec: '',
                    day6: '',
                    day7WorkHours: '',
                    day7WorkMin: '',
                    day7WorkSec: '',
                    day7: '',
                    day8WorkHours: '',
                    day8WorkMin: '',
                    day8WorkSec: '',
                    day8: '',
                            };
            }
            break;
        }
        case (types.UPDATE_DAY_1_WORK_HOURS_INPUT): {
            return {
                ...state,
                day1WorkHours: payload
            };
        }

        case (types.UPDATE_DAY_1_WORK_MIN_INPUT): {
            return {
                ...state,
                day1WorkMin: payload
            };
        }

        case (types.UPDATE_DAY_1_WORK_SEC_INPUT): {
            return {
                ...state,
                day1WorkSec: payload
            };
        }

        case (types.UPDATE_DAY_1): {
            return {
                ...state,
                day1: payload
            }
        }

        case (types.UPDATE_DAY_2_WORK_HOURS_INPUT): {
            return {
                ...state,
                day2WorkHours: payload
            };
        }

        case (types.UPDATE_DAY_2_WORK_MIN_INPUT): { 
            return {
                ...state,
                day2WorkMin: payload
            };
        }

        case (types.UPDATE_DAY_2_WORK_SEC_INPUT): {
            return {
                ...state,
                day2WorkSec: payload
            };
        }

        case (types.UPDATE_DAY_2): {
            return {
                ...state,
                day2: payload
            }
        }

        case (types.UPDATE_DAY_3_WORK_HOURS_INPUT): {
            return {
                ...state,
                day3WorkHours: payload
            };
        }

        case (types.UPDATE_DAY_3_WORK_MIN_INPUT): {
            return {
                ...state,
                day3WorkMin: payload
            };
        }

        case (types.UPDATE_DAY_3_WORK_SEC_INPUT): {
            return {
                ...state,
                day3WorkSec: payload
            };
        }

        case (types.UPDATE_DAY_3): {
            return {
                ...state,
                day3: payload
            }
        }

        case (types.UPDATE_DAY_4_WORK_HOURS_INPUT): {
            return {
                ...state,
                day4WorkHours: payload
            };
        }

        case (types.UPDATE_DAY_4_WORK_MIN_INPUT): {
            return {
                ...state,
                day4WorkMin: payload
            };
        }

        case (types.UPDATE_DAY_4_WORK_SEC_INPUT): {
            return {
                ...state,
                day4WorkSec: payload
            };
        }

        case (types.UPDATE_DAY_4): {
            return {
                ...state,
                day4: payload
            }
        }

        case (types.UPDATE_DAY_5_WORK_HOURS_INPUT): {
            return {
                ...state,
                day5WorkHours: payload
            };
        }

        case (types.UPDATE_DAY_5_WORK_MIN_INPUT): {
            return {
                ...state,
                day5WorkMin: payload
            };
        }

        case (types.UPDATE_DAY_5_WORK_SEC_INPUT): {
            return {
                ...state,
                day5WorkSec: payload
            };
        }

        case (types.UPDATE_DAY_5): {
            return {
                ...state,
                day5: payload
            }
        }

        case (types.UPDATE_DAY_6_WORK_HOURS_INPUT): {
            return {
                ...state,
                day6WorkHours: payload
            };
        }

        case (types.UPDATE_DAY_6_WORK_MIN_INPUT): {
            return {
                ...state,
                day6WorkMin: payload
            };
        }

        case (types.UPDATE_DAY_6_WORK_SEC_INPUT): {
            return {
                ...state,
                day6WorkSec: payload
            };
        }

        case (types.UPDATE_DAY_6): {
            return {
                ...state,
                day6: payload
            }
        }

        case (types.UPDATE_DAY_7_WORK_HOURS_INPUT): {
            return {
                ...state,
                day7WorkHours: payload
            };
        }

        case (types.UPDATE_DAY_7_WORK_MIN_INPUT): {
            return {
                ...state,
                day7WorkMin: payload
            };
        }

        case (types.UPDATE_DAY_7_WORK_SEC_INPUT): {
            return {
                ...state,
                day7WorkSec: payload
            };
        }

        case (types.UPDATE_DAY_7): {
            return {
                ...state,
                day7: payload
            }
        }

        case (types.UPDATE_DAY_8_WORK_HOURS_INPUT): {
            return {
                ...state,
                day8WorkHours: payload
            };
        }

        case (types.UPDATE_DAY_8_WORK_MIN_INPUT): {
            return {
                ...state,
                day8WorkMin: payload
            };
        }

        case (types.UPDATE_DAY_8_WORK_SEC_INPUT): {
            return {
                ...state,
                day8WorkSec: payload
            };
        }

        case (types.UPDATE_DAY_8): {
            return {
                ...state,
                day8: payload
            }
        }

        case (types.UPDATE_RECAP_SUBTRACT): {
            return {
                ...state,
                recapHH: payload.hh,
                recapMM: payload.mm,
                recapSS: payload.ss,
                recap: payload.recapUpdate
            };
        }

        case (types.UPDATE_RECAP_ADD): {
            return {
                ...state,
                recap: payload
            };
        }

        case (types.RESET_BUTTON): {
            if (state.ruleset === "RS1") {
                return {
                    ...state,
                    recap: 60,
                    recapHH: '',
                    recapMM: '',
                    recapSS: '',
                    day1WorkHours: '',
                    day1WorkMin: '',
                    day1WorkSec: '',
                    day1: '',
                    day2WorkHours: '',
                    day2WorkMin: '',
                    day2WorkSec: '',
                    day2: '',
                    day3WorkHours: '',
                    day3WorkMin: '',
                    day3WorkSec: '',
                    day3: '',
                    day4WorkHours: '',
                    day4WorkMin: '',
                    day4WorkSec: '',
                    day4: '',
                    day5WorkHours: '',
                    day5WorkMin: '',
                    day5WorkSec: '',
                    day5: '',
                    day6WorkHours: '',
                    day6WorkMin: '',
                    day6WorkSec: '',
                    day6: '',
                    day7WorkHours: '',
                    day7WorkMin: '',
                    day7WorkSec: '',
                    day7: '',
                    day8WorkHours: '',
                    day8WorkMin: '',
                    day8WorkSec: '',
                    day8: '',
                            }
            } else if (state.ruleset === "RS2") {
                return {
                    ...state,
                    recap: 70,
                    recapHH: '',
                    recapMM: '',
                    recapSS: '',
                    day1WorkHours: '',
                    day1WorkMin: '',
                    day1WorkSec: '',
                    day1: '',
                    day2WorkHours: '',
                    day2WorkMin: '',
                    day2WorkSec: '',
                    day2: '',
                    day3WorkHours: '',
                    day3WorkMin: '',
                    day3WorkSec: '',
                    day3: '',
                    day4WorkHours: '',
                    day4WorkMin: '',
                    day4WorkSec: '',
                    day4: '',
                    day5WorkHours: '',
                    day5WorkMin: '',
                    day5WorkSec: '',
                    day5: '',
                    day6WorkHours: '',
                    day6WorkMin: '',
                    day6WorkSec: '',
                    day6: '',
                    day7WorkHours: '',
                    day7WorkMin: '',
                    day7WorkSec: '',
                    day7: '',
                    day8WorkHours: '',
                    day8WorkMin: '',
                    day8WorkSec: '',
                    day8: '',
                            }
            };
            break;
        }
        
        default: return state;
    }
};