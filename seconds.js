class SecondsController {
    seconds(years, months, weeks, days, hours, minutes, seconds) {
        if (seconds < 10) {
            return {
                years: years,
                months: months,
                weeks: weeks,
                days: days,
                hours: hours,
                minutes: minutes,
                seconds: seconds,
                value: `${seconds} ${seconds === 1 ? "second" : "seconds"}`,
                prefix: "",
                distance: `about 10 seconds`
            }
        } else if (seconds < 20) {
            return {
                years: years,
                months: months,
                weeks: weeks,
                days: days,
                hours: hours,
                minutes: minutes,
                seconds: seconds,
                value: `${seconds} seconds`,
                prefix: "",
                distance: `about 20 seconds`
            }
        } else if (seconds < 30) {
            return {
                years: years,
                months: months,
                weeks: weeks,
                days: days,
                hours: hours,
                minutes: minutes,
                seconds: seconds,
                value: `${seconds} seconds`,
                prefix: "about",
                distance: `about 30 seconds`
            }
        } else if (seconds < 60) {
            return {
                years: years,
                months: months,
                weeks: weeks,
                days: days,
                hours: hours,
                minutes: minutes,
                seconds: seconds,
                value: `${seconds} seconds`,
                prefix: "less than",
                distance: `less than a minute`
            }
        }
    }
}

module.exports = SecondsController;