class MonthController {
    firstMonth(years, months, weeks, days, hours, minutes, seconds) {
        if (weeks === 0 && days <= 1 && hours < 24 && minutes <= 29 && seconds <= 59) {
            return {
                value: `${months} month`,
                prefix: "",
                distance: `${months} month`
            }
        } else if (weeks <= 1 && days < 5 && hours < 24 && minutes <= 59 && seconds <= 59) {
            return {
                value: `${months} month`,
                prefix: "about",
                distance: `about ${months} month`
            }
        } else if (weeks === 4 && days < 5 && hours < 24 && minutes <= 59 && seconds <= 59) {
            return {
                value: `${months + 1} months`,
                prefix: "",
                distance: `${months + 1} month`
            }
        } else if (weeks > 3 && days <= 5 && hours < 24 && minutes <= 59 && seconds <= 59) {
            return {
                value: `${months + 1} months`,
                prefix: "",
                distance: `${months + 1} month`
            }
        } else if (weeks >= 3 && days >= 5 && hours < 24 && minutes <= 59 && seconds <= 59) {
            return {
                value: `${months + 1 === 12 ? `${years + 1} ${years + 1 === 1 ? 'year' : 'years'}` : `${months + 1} months`}`,
                prefix: "about",
                distance: `${months + 1 === 12 ? `about ${years + 1} ${years + 1 === 1 ? 'year' : 'years'}` : `about ${months + 1} months`}`
            }
        } else {
            return {
                value: `${months} month`,
                prefix: "more than",
                distance: `more than ${months} month`
            }
        }
    }


    otherMonths(years, months, weeks, days, hours, minutes, seconds) {
        if (weeks === 0 && days <= 1 && hours < 24 && minutes <= 59 && seconds <= 59) {
            return {
                value: `${months} months`,
                prefix: "",
                distance: `${months} months`
            }
        }
        if (months === 11) {

            if (weeks >= 2 && weeks <= 3 && days >= 3) {
                return {
                    value: `${months} months`,
                    prefix: "less than",
                    distance: `less than a year`
                }
            } else if (weeks >= 3) {
                return {
                    value: `${months} months`,
                    prefix: "",
                    distance: `about a year`
                }
            } else {
                return {
                    value: `${months} months`,
                    prefix: "more than",
                    distance: `more than ${months} months`
                }
            }
        }
        if ((weeks >= 4) && days > 1 && hours < 24 && minutes <= 59 && seconds <= 59) {
            return {
                value: `${months} months`,
                prefix: "about",
                distance: `about ${months} months`
            }
        } else if (weeks >= 2 && days >= 4 && hours < 24 && minutes <= 59 && seconds <= 59) {
            return {
                value: `${months + 1} months`,
                prefix: "less than",
                distance: `less than ${months + 1} months`
            }
        } else if (weeks === 0 && days < 5 && hours < 24 && minutes <= 59 && seconds <= 59) {
            return {
                value: `${months} months`,
                prefix: "about",
                distance: `about ${months} months`
            }
        } else if (weeks >= 3 && days <= 6 && hours < 24 && minutes <= 59 && seconds <= 59) {
            return {
                value: `${months + 1 === 12 ? `${years + 1} ${years + 1 === 1 ? 'year' : 'years'}` : `${months + 1} months`}`,
                prefix: "about",
                distance: `${months + 1 === 12 ? `about ${years + 1} ${years + 1 === 1 ? 'year' : 'years'}` : `about ${months + 1} months`}`
            }
        } else {
            return {
                value: `${months} months`,
                prefix: "more than",
                distance: `more than ${months} months`
            }
        }
    }
}

module.exports = MonthController;