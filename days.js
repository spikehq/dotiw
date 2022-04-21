class DaysController {
    firstDay(days, hours, minutes, seconds){
        if (hours <= 3 && minutes <= 59 && seconds <= 59) {
            return {
                value: `${days} day`,
                prefix: "",
                distance: `${days} day`
            }
        } else if (hours <= 21 && hours >= 20 && minutes <= 59 && seconds <= 59) {
            return {
                value: `${days + 1} day`,
                prefix: "about",
                distance: `less than ${days + 1} days`
            }
        } else if (hours > 21 && minutes <= 59 && seconds <= 59) {
            return {
                value: `${days + 1} day`,
                prefix: "about",
                distance: `about ${days + 1} days`
            }
        } else if (hours <= 21 && minutes <= 59 && seconds <= 59) {
            return {
                value: `${days} day`,
                prefix: "more than",
                distance: `more than ${days} day`
            }
        }
    }

    otherDays(weeks, days, hours, minutes, seconds) {
        if ((weeks == 1 && days < 2) || days >= 6 && hours < 24 && minutes <= 59 && seconds <= 59) {
            return {
                value: `${weeks + 1} ${weeks + 1 == 1 ? "week" : "weeks"}`,
                prefix: "about",
                distance: `about ${weeks + 1} ${weeks + 1 == 1 ? "week" : "weeks"}`
            }
        }
        if (days >= 5 && hours <= 21 && minutes <= 59 && seconds <= 59) {
            return {
                value: `${days} days`,
                prefix: "about",
                distance: `less than a week`
            }
        } if (hours <= 2 && minutes <= 59 && seconds <= 59) {
            return {
                value: `${days} ${days === 1 ? 'days': 'day'}`,
                prefix: "",
                distance: `${days} ${days === 1 ? 'days': 'day'}`
            }
        } else if (hours <= 21 && hours >= 20 && minutes <= 59 && seconds <= 59) {
            return {
                value: `${days + 1} days`,
                prefix: "less than",
                distance: `less than ${days + 1} days`
            }
        } else if (hours >= 21 && minutes <= 59 && seconds <= 59) {
            return {
                value: `${days + 1} days`,
                prefix: "about",
                distance: `about ${days + 1} days`
            }
        }else{
            return {
                value: `${days} days`,
                prefix: "more than",
                distance: `more than ${days} days`
            }
        }
    }
}

module.exports = DaysController;