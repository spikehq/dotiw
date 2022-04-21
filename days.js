class DaysController {
    firstDay(years, months, weeks, days, hours, minutes, seconds){
        if (hours <= 3 && minutes <= 59 && seconds <= 59) {
            return {
                years: years,
                months: months,
                weeks: weeks,
                days: days,
                hours: hours,
                minutes: minutes,
                seconds: seconds,
                value: `${days} day`,
                prefix: "",
                distance: `${days} day`
            }
        } else if (hours > 21 && minutes <= 59 && seconds <= 59) {
            return {
                years: years,
                months: months,
                weeks: weeks,
                days: days,
                hours: hours,
                minutes: minutes,
                seconds: seconds,
                value: `${days} day`,
                prefix: "about",
                distance: `about ${days + 1} days`
            }
        } else if (hours <= 21 && minutes > 59 && seconds <= 59) {
            return {
                years: years,
                months: months,
                weeks: weeks,
                days: days,
                hours: hours,
                minutes: minutes,
                seconds: seconds,
                value: `${days} day`,
                prefix: "more than",
                distance: `more than ${days} day`
            }
        }
    }

    otherDays(years, months, weeks, days, hours, minutes, seconds) {
        if ((weeks == 1 && days < 2) || days >= 6 && hours < 24 && minutes <= 59 && seconds <= 59) {
            return {
                years: years,
                months: months,
                weeks: weeks,
                days: days,
                hours: hours,
                minutes: minutes,
                seconds: seconds,
                value: `${weeks ? `${weeks} weeks`: `${days} days`}`,
                prefix: "about",
                distance: `about ${weeks + 1} week`
            }
        }
        if (days >= 5 && hours <= 21 && minutes <= 59 && seconds <= 59) {
            return {
                years: years,
                months: months,
                weeks: weeks,
                days: days,
                hours: hours,
                minutes: minutes,
                seconds: seconds,
                value: `${days} days`,
                prefix: "about",
                distance: `about a week`
            }
        }
        if (hours >= 21 && minutes <= 59 && seconds <= 59) {
            return {
                years: years,
                months: months,
                weeks: weeks,
                days: days,
                hours: hours,
                minutes: minutes,
                seconds: seconds,
                value: `${days} days`,
                prefix: "about",
                distance: `about ${days + 1} days`
            }
        } else if (hours <= 21 && hours >= 18 && minutes > 59 && seconds <= 59) {
            return {
                years: years,
                months: months,
                weeks: weeks,
                days: days,
                hours: hours,
                minutes: minutes,
                seconds: seconds,
                value: `${days} days`,
                prefix: "less than",
                distance: `less than ${days + 1} days`
            }
        } else{
            return {
                years: years,
                months: months,
                weeks: weeks,
                days: days,
                hours: hours,
                minutes: minutes,
                seconds: seconds,
                value: `${days} days`,
                prefix: "more than",
                distance: `more than ${days} days`
            }
        }
    }
}

module.exports = DaysController;