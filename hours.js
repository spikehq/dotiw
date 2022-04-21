class HoursController {
    firstHour(hours, minutes, seconds) {
        if (minutes <= 5 && seconds <= 59) {
            return {
                value: `${hours} hour`,
                prefix: "",
                distance: `${hours} hour`
            }
        } else if (minutes >= 50 && seconds <= 59) {
            return {
                value: `${hours} hour`,
                prefix: "about",
                distance: `about ${hours + 1} hours`
            }
        } else if (minutes <= 50 && seconds > 59) {
            return {

                value: `${hours} hour`,
                prefix: "more than",
                distance: `more than ${hours} hour`
            }
        }
    }

    otherHours(days, hours, minutes, seconds) {
        if (hours > 21) {
            return {
                value: `${days + 1} ${days + 1 === 1 ? "day" : "days"}`,
                prefix: "about",
                distance: `about ${days + 1} ${days + 1 === 1 ? "day" : "days"}`
            }
        } else if (hours <= 21 && hours >= 20 && minutes <= 59 && seconds <= 59) {
            return {
                value: `${days + 1} ${days + 1 === 1 ? "day" : "days"}`,
                prefix: "less than",
                distance: `less than ${days + 1} ${days + 1 === 1 ? "day" : "days"}`
            }
        }
        if (minutes <= 1 && seconds <= 59) {
            return {
                value: `${hours} hours`,
                prefix: "",
                distance: `${hours} hours`
            }
        } else if (minutes <= 15 && seconds <= 59) {
            return {
                value: `${hours} hours`,
                prefix: "about",
                distance: `about ${hours} hours`
            }
        } else if (minutes <= 45 && seconds <= 59) {
            return {
                value: `${hours} hours`,
                prefix: "",
                distance: `${hours} hours`
            }
        } else if (minutes <= 5 && seconds <= 59) {
            return {
                value: `${hours} hours`,
                prefix: "about",
                distance: `about ${hours} hours`
            }
        } else if (minutes >= 50 && minutes < 55) {
            return {
                value: `${hours + 1} hours`,
                prefix: "less than",
                distance: `less than ${hours + 1} hours`
            }
        } else if (minutes >= 54 && seconds <= 59) {
            return {
                value: `${hours} hours`,
                prefix: "about",
                distance: `about ${hours + 1} hours`
            }
        } else if (minutes <= 50 && seconds > 59) {
            return {
                value: `${hours} hours`,
                prefix: "more than",
                distance: `more than ${hours} hours`
            }
        }
    }
}


module.exports = HoursController