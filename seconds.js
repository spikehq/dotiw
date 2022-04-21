class SecondsController {
    seconds(seconds) {
        if (seconds <= 10) {
            return {
                value: `${seconds} ${seconds === 1 ? "second" : "seconds"}`,
                prefix: "",
                distance: `about ${seconds} ${seconds === 1 ? "second" : "seconds"}`
            }
        } else if (seconds < 20) {
            return {
                value: `${seconds} seconds`,
                prefix: "",
                distance: `about 20 seconds`
            }
        } else if (seconds < 30) {
            return {
                value: `${seconds} seconds`,
                prefix: "about",
                distance: `about 30 seconds`
            }
        } else if (seconds < 50) {
            return {
                value: `${seconds} seconds`,
                prefix: "less than",
                distance: `less than a minute`
            }
        } else {
            return {
                value: `1 minute`,
                prefix: "about",
                distance: `about a minute`
            }
        }
    }
}

module.exports = SecondsController;