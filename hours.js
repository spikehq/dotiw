class HoursController {
    firstHour(years, months, weeks, days, hours, minutes, seconds) {
        if (minutes <= 5 && seconds <= 59) {
            return {
                years: years,
                months: months,
                weeks: weeks,
                days: days,
                hours: hours,
                minutes: minutes,
                seconds: seconds,
                value: `${hours} hour`,
                prefix: "",
                distance: `${hours} hour`
            }
        } else if (minutes >= 50 && seconds <= 59) {
            return {
                years: years,
                months: months,
                weeks: weeks,
                days: days,
                hours: hours,
                minutes: minutes,
                seconds: seconds,
                value: `${hours} hour`,
                prefix: "about",
                distance: `about ${hours + 1} hours`
            }
        } else if (minutes <= 50 && seconds > 59) {
            return {
                years: years,
                months: months,
                weeks: weeks,
                days: days,
                hours: hours,
                minutes: minutes,
                seconds: seconds,
                value: `${hours} hour`,
                prefix: "more than",
                distance: `more than ${hours} hour`
            }
        }
    }

    otherHours(months, weeks, days, hours, minutes, seconds) {
        if (minutes <= 1 && seconds <= 59) {
            return {
                years: years,
                months: months,
                weeks: weeks,
                days: days,
                hours: hours,
                minutes: minutes,
                seconds: seconds,
                value: `${hours} hours`,
                prefix: "",
                distance: `${hours} hours`
            }
        } else if (minutes <= 5 && seconds <= 59) {
            return {
                years: years,
                months: months,
                weeks: weeks,
                days: days,
                hours: hours,
                minutes: minutes,
                seconds: seconds,
                value: `${hours} hours`,
                prefix: "about",
                distance: `about ${hours} hours`
            }
        } else if (minutes >= 50 && seconds < 55) {
            return {
                years: years,
                months: months,
                weeks: weeks,
                days: days,
                hours: hours,
                minutes: minutes,
                seconds: seconds,
                value: `${hours} hours`,
                prefix: "less than",
                distance: `less than ${hours + 1} hours`
            }
        } else if (minutes >= 54 && seconds <= 59) {
            return {
                years: years,
                months: months,
                weeks: weeks,
                days: days,
                hours: hours,
                minutes: minutes,
                seconds: seconds,
                value: `${hours} hours`,
                prefix: "about",
                distance: `about ${hours + 1} hours`
            }
        } else if (minutes <= 50 && seconds > 59) {
            return {
                years: years,
                months: months,
                weeks: weeks,
                days: days,
                hours: hours,
                minutes: minutes,
                seconds: seconds,
                value: `${hours} hours`,
                prefix: "more than",
                distance: `more than ${hours} hours`
            }
        }
    }
}


module.exports = HoursController