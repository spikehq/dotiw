class MinutesController {
    minutes(hours, minutes, seconds) {
        if (minutes >= 55) {
            return {
                value: `${hours + 1} ${hours + 1 === 1 ? "hour" : "hours"}`,
                prefix: "",
                distance: `about ${hours + 1} ${hours + 1 === 1 ? "hour" : "hours"}`
            }
        } else if (minutes >= 50 && minutes < 55) {
            return {
                value: `${hours + 1} ${hours + 1 === 1 ? "hour" : "hours"}`,
                prefix: "less than",
                distance: `less than ${hours + 1} ${hours + 1 === 1 ? "hour" : "hours"}`
            }
        } else if (seconds >= 20 && seconds <= 40) {
            return {
                value: `${minutes} ${minutes === 1 ? "minute" : "minutes"}`,
                prefix: "more than",
                distance: `more than ${minutes} ${minutes === 1 ? "minute" : "minutes"}`
            }
        } else if (seconds > 40 && seconds < 50) {
            return {
                value: `${minutes + 1} ${minutes + 1 === 1 ? "minute" : "minutes"}`,
                prefix: "less than",
                distance: `less than ${minutes + 1} ${minutes + 1 === 1 ? "minute" : "minutes"}`
            }
        } else if (seconds >= 50) {
            return {
                value: `${minutes + 1} ${minutes + 1 === 1 ? "minute" : "minutes"}`,
                prefix: "about",
                distance: `about ${minutes + 1} ${minutes + 1 === 1 ? "a minute" : "minutes"}`
            }
        } else {
            return {
                value: `${minutes} ${minutes === 1 ? "minute" : "minutes"}`,
                prefix: "",
                distance: `${minutes} ${minutes === 1 ? "minute" : "minutes"}`
            }
        }
    }
}

module.exports = MinutesController;