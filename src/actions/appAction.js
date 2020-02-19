export const types = {
    TOPIC_TOGGLE: 'TOPIC_TOGGLE',
    PROCEDURE_TOGGLE: 'PROCEDURE_TOGGLE',
    LOGBOOK_TROUBLESHOOT_TOGGLE: 'LOGBOOK_TROUBLESHOOT_TOGGLE',
    ANDROID_TOGGLE: 'ANDROID_TOGGLE',
    APPLE_TOGGLE: 'APPLE_TOGGLE',
    D2D_TOGGLE: 'D2D_TOGGLE',
    GENERAL_TOGGLE: 'GENERAL_TOGGLE',
    MOBILE_TOGGLE: 'MOBILE_TOGGLE',
    SALES_FORCE_TOGGLE: 'SALES_FORCE_TOGGLE',
    LOG_BOOK_TOGGLE: 'LOG_BOOK_TOGGLE',
    FLEETCARE_TOGGLE: 'FLEETCARE_TOGGLE',
    RULESET_TOGGLE: 'RULESET_TOGGLE',
    UPDATE_DAY_1_WORK_HOURS_INPUT: 'UPDATE_DAY_1_WORK_HOURS_INPUT',
    UPDATE_DAY_1_WORK_MIN_INPUT: 'UPDATE_DAY_1_WORK_MIN_INPUT',
    UPDATE_DAY_1_WORK_SEC_INPUT: 'UPDATE_DAY_1_WORK_SEC_INPUT',
    UPDATE_DAY_1: 'UPDATE_DAY_1',
    UPDATE_DAY_2_WORK_HOURS_INPUT: 'UPDATE_DAY_2_WORK_HOURS_INPUT',
    UPDATE_DAY_2_WORK_MIN_INPUT: 'UPDATE_DAY_2_WORK_MIN_INPUT',
    UPDATE_DAY_2_WORK_SEC_INPUT: 'UPDATE_DAY_2_WORK_SEC_INPUT',
    UPDATE_DAY_2: 'UPDATE_DAY_2',
    UPDATE_DAY_3_WORK_HOURS_INPUT: 'UPDATE_DAY_3_WORK_HOURS_INPUT',
    UPDATE_DAY_3_WORK_MIN_INPUT: 'UPDATE_DAY_3_WORK_MIN_INPUT',
    UPDATE_DAY_3_WORK_SEC_INPUT: 'UPDATE_DAY_3_WORK_SEC_INPUT',
    UPDATE_DAY_3: 'UPDATE_DAY_3',
    UPDATE_DAY_4_WORK_HOURS_INPUT: 'UPDATE_DAY_4_WORK_HOURS_INPUT',
    UPDATE_DAY_4_WORK_MIN_INPUT: 'UPDATE_DAY_4_WORK_MIN_INPUT',
    UPDATE_DAY_4_WORK_SEC_INPUT: 'UPDATE_DAY_4_WORK_SEC_INPUT',
    UPDATE_DAY_4: 'UPDATE_DAY_4',
    UPDATE_DAY_5_WORK_HOURS_INPUT: 'UPDATE_DAY_5_WORK_HOURS_INPUT',
    UPDATE_DAY_5_WORK_MIN_INPUT: 'UPDATE_DAY_5_WORK_MIN_INPUT',
    UPDATE_DAY_5_WORK_SEC_INPUT: 'UPDATE_DAY_5_WORK_SEC_INPUT',
    UPDATE_DAY_5: 'UPDATE_DAY_5',
    UPDATE_DAY_6_WORK_HOURS_INPUT: 'UPDATE_DAY_6_WORK_HOURS_INPUT',
    UPDATE_DAY_6_WORK_MIN_INPUT: 'UPDATE_DAY_6_WORK_MIN_INPUT',
    UPDATE_DAY_6_WORK_SEC_INPUT: 'UPDATE_DAY_6_WORK_SEC_INPUT',
    UPDATE_DAY_6: 'UPDATE_DAY_6',
    UPDATE_DAY_7_WORK_HOURS_INPUT: 'UPDATE_DAY_7_WORK_HOURS_INPUT',
    UPDATE_DAY_7_WORK_MIN_INPUT: 'UPDATE_DAY_7_WORK_MIN_INPUT',
    UPDATE_DAY_7_WORK_SEC_INPUT: 'UPDATE_DAY_7_WORK_SEC_INPUT',
    UPDATE_DAY_7: 'UPDATE_DAY_7',
    UPDATE_DAY_8_WORK_HOURS_INPUT: 'UPDATE_DAY_8_WORK_HOURS_INPUT',
    UPDATE_DAY_8_WORK_MIN_INPUT: 'UPDATE_DAY_8_WORK_MIN_INPUT',
    UPDATE_DAY_8_WORK_SEC_INPUT: 'UPDATE_DAY_8_WORK_SEC_INPUT',
    UPDATE_DAY_8: 'UPDATE_DAY_8',
    UPDATE_RECAP_SUBTRACT: 'UPDATE_RECAP_SUBTRACT',
    UPDATE_RECAP_ADD: 'UPDATE_RECAP_ADD',
    RESET_BUTTON: 'RESET_BUTTON'
}

export function topicToggle(value) {
    return {
        type: types.TOPIC_TOGGLE,
        payload: value
    };
}

export function procedureToggle(value) {
    return {
        type: types.PROCEDURE_TOGGLE,
        payload: value
    };
}

export function tslbTopicToggle(value) {
    return {
        type: types.LOGBOOK_TROUBLESHOOT_TOGGLE,
        payload: value
    };
}

export function androidTopicToggle(value) {
    return {
        type: types.ANDROID_TOGGLE,
        payload: value
    };
}

export function appleTopicToggle(value) {
    return {
        type: types.APPLE_TOGGLE,
        payload: value
    };
}

export function day2DayToggle(value) {
    return {
        type: types.D2D_TOGGLE,
        payload: value
    };
}

export function generalToggle(value) {
    return {
        type: types.GENERAL_TOGGLE,
        payload: value
    };
}

export function mobileToggle(value) {
    return {
        type: types.MOBILE_TOGGLE,
        payload: value
    };
}

export function salesForceToggle(value) {
    return {
        type: types.SALES_FORCE_TOGGLE,
        payload: value
    };
}

export function logBookToggle(value) {
    return {
        type: types.LOG_BOOK_TOGGLE,
        payload: value
    };
}

export function fleetCareToggle(value) {
    return {
        type: types.FLEETCARE_TOGGLE,
        payload: value
    };
}

export function rulesetToggle(value) {
    return {
        type: types.RULESET_TOGGLE,
        payload: value
    };
}

export function updateDay1WorkHoursInput(value) {
    return {
        type: types.UPDATE_DAY_1_WORK_HOURS_INPUT,
        payload: value * (1/1)
    };
}

export function updateDay1WorkMinInput(value) {
    return {
        type: types.UPDATE_DAY_1_WORK_MIN_INPUT,
        payload: value * (1/60)
    };
}

export function updateDay1WorkSecInput(value) {
    return {
        type: types.UPDATE_DAY_1_WORK_SEC_INPUT,
        payload: value * (1/3600)
    };
}

export function updateDay1(day1WorkHours, day1WorkMin, day1WorkSec) {
    return {
        type:types.UPDATE_DAY_1,
        payload: day1WorkHours + day1WorkMin + day1WorkSec
    }
}

export function updateDay2WorkHoursInput(value) {
    return {
        type: types.UPDATE_DAY_2_WORK_HOURS_INPUT,
        payload: value * (1/1)
    };
}

export function updateDay2WorkMinInput(value) {
    return {
        type: types.UPDATE_DAY_2_WORK_MIN_INPUT,
        payload: value * (1/60)
    };
}

export function updateDay2WorkSecInput(value) {
    return {
        type: types.UPDATE_DAY_2_WORK_SEC_INPUT,
        payload: value * (1/3600)
    };
}

export function updateDay2(day2WorkHours, day2WorkMin, day2WorkSec) {
    return {
        type:types.UPDATE_DAY_2,
        payload: day2WorkHours + day2WorkMin + day2WorkSec
    }
}

export function updateDay3WorkHoursInput(value) {
    return {
        type: types.UPDATE_DAY_3_WORK_HOURS_INPUT,
        payload: value * (1/1)
    };
}

export function updateDay3WorkMinInput(value) {
    return {
        type: types.UPDATE_DAY_3_WORK_MIN_INPUT,
        payload: value * (1/60)
    };
}

export function updateDay3WorkSecInput(value) {
    return {
        type: types.UPDATE_DAY_3_WORK_SEC_INPUT,
        payload: value * (1/3600)
    };
}

export function updateDay3(day3WorkHours, day3WorkMin, day3WorkSec) {
    return {
        type:types.UPDATE_DAY_3,
        payload: day3WorkHours + day3WorkMin + day3WorkSec
    }
}

export function updateDay4WorkHoursInput(value) {
    return {
        type: types.UPDATE_DAY_4_WORK_HOURS_INPUT,
        payload: value * (1/1)
    };
}

export function updateDay4WorkMinInput(value) {
    return {
        type: types.UPDATE_DAY_4_WORK_MIN_INPUT,
        payload: value * (1/60)
    };
}

export function updateDay4WorkSecInput(value) {
    return {
        type: types.UPDATE_DAY_4_WORK_SEC_INPUT,
        payload: value * (1/3600)
    };
}

export function updateDay4(day4WorkHours, day4WorkMin, day4WorkSec) {
    return {
        type:types.UPDATE_DAY_4,
        payload: day4WorkHours + day4WorkMin + day4WorkSec
    }
}

export function updateDay5WorkHoursInput(value) {
    return {
        type: types.UPDATE_DAY_5_WORK_HOURS_INPUT,
        payload: value * (1/1)
    };
}

export function updateDay5WorkMinInput(value) {
    return {
        type: types.UPDATE_DAY_5_WORK_MIN_INPUT,
        payload: value * (1/60)
    };
}

export function updateDay5WorkSecInput(value) {
    return {
        type: types.UPDATE_DAY_5_WORK_SEC_INPUT,
        payload: value * (1/3600)
    };
}

export function updateDay5(day5WorkHours, day5WorkMin, day5WorkSec) {
    return {
        type:types.UPDATE_DAY_5,
        payload: day5WorkHours + day5WorkMin + day5WorkSec
    }
}

export function updateDay6WorkHoursInput(value) {
    return {
        type: types.UPDATE_DAY_6_WORK_HOURS_INPUT,
        payload: value * (1/1)
    };
}

export function updateDay6WorkMinInput(value) {
    return {
        type: types.UPDATE_DAY_6_WORK_MIN_INPUT,
        payload: value * (1/60)
    };
}

export function updateDay6WorkSecInput(value) {
    return {
        type: types.UPDATE_DAY_6_WORK_SEC_INPUT,
        payload: value * (1/3600)
    };
}

export function updateDay6(day6WorkHours, day6WorkMin, day6WorkSec) {
    return {
        type:types.UPDATE_DAY_6,
        payload: day6WorkHours + day6WorkMin + day6WorkSec
    }
}

export function updateDay7WorkHoursInput(value) {
    return {
        type: types.UPDATE_DAY_7_WORK_HOURS_INPUT,
        payload: value * (1/1)
    };
}

export function updateDay7WorkMinInput(value) {
    return {
        type: types.UPDATE_DAY_7_WORK_MIN_INPUT,
        payload: value * (1/60)
    };
}

export function updateDay7WorkSecInput(value) {
    return {
        type: types.UPDATE_DAY_7_WORK_SEC_INPUT,
        payload: value * (1/3600)
    };
}

export function updateDay7(day7WorkHours, day7WorkMin, day7WorkSec) {
    return {
        type:types.UPDATE_DAY_7,
        payload: day7WorkHours + day7WorkMin + day7WorkSec
    }
}

export function updateDay8WorkHoursInput(value) {
    return {
        type: types.UPDATE_DAY_8_WORK_HOURS_INPUT,
        payload: value * (1/1)
    };
}

export function updateDay8WorkMinInput(value) {
    return {
        type: types.UPDATE_DAY_8_WORK_MIN_INPUT,
        payload: value * (1/60)
    };
}

export function updateDay8WorkSecInput(value) {
    return {
        type: types.UPDATE_DAY_8_WORK_SEC_INPUT,
        payload: value * (1/3600)
    };
}

export function updateDay8(day8WorkHours, day8WorkMin, day8WorkSec) {
    return {
        type:types.UPDATE_DAY_8,
        payload: day8WorkHours + day8WorkMin + day8WorkSec
    }
}

export function driveTimeSubtract(recap, value) {
    var recapUpdate = (recap - value).toString();
    var fields = recapUpdate.split('.');
    var hh = parseInt(fields[0], 10);
    var mmConvert = (('0.' + fields[1]) * 60).toString();
    var mmConvertFields = mmConvert.split('.');
    var mm = parseInt(mmConvertFields[0], 10);
    var ss = Math.round(('0.' + mmConvertFields[1]) * 60);
    if(ss >= 60) {
         ss = '00';
         mm = parseInt(mm, 10) + 1;
    }
    return {
        type: types.UPDATE_RECAP_SUBTRACT,
        payload: { hh, mm, ss, recapUpdate }
    };
}

// export function breakTimeAdd(recap, value) {
//     console.log(value);
//     return {
//         type: types.UPDATE_RECAP_ADD,
//         payload: (recap + parseFloat(value).toFixed(2))
//     };
// }

export function resetButton() {
    return {
        type: types.RESET_BUTTON
    }
}
