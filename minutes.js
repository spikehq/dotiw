class MinutesController {
    minutes(years, months, weeks, days, hours, minutes, seconds) {
        if (minutes >= 55) {
            return {
                years: years,
                months: months,
                weeks: weeks,
                days: days,
                hours: hours,
                minutes: minutes,
                seconds: seconds,
                value: `${hours + 1} ${hours + 1 === 1 ? "hour" : "hours"}`,
                prefix: "",
                distance: `about ${hours + 1} ${hours + 1 === 1 ? "hour" : "hours"}`
            }
        } else if (minutes >= 50 && minutes < 55) {
            return {
                years: years,
                months: months,
                weeks: weeks,
                days: days,
                hours: hours,
                minutes: minutes,
                seconds: seconds,
                value: `${hours} ${hours === 1 ? "hour" : "hours"}`,
                prefix: "less than",
                distance: `less than ${hours + 1} ${hours + 1 === 1 ? "hour" : "hours"}`
            }
        } else {
            return {
                years: years,
                months: months,
                weeks: weeks,
                days: days,
                hours: hours,
                minutes: minutes,
                seconds: seconds,
                value: `${minutes} minutes`,
                prefix: "",
                distance: `${minutes} ${minutes === 1 ? "minute" : "minutes"}`
            }
        }
    }
}

module.exports = MinutesController;