class WeekController {
    firstWeek(years, months, weeks, days, hours, minutes, seconds) {
        if (days === 0 && hours < 24 && minutes <= 29 && seconds <= 59) {
            return {
                years: years,
                months: months,
                weeks: weeks,
                days: days,
                hours: hours,
                minutes: minutes,
                seconds: seconds,
                value: `${weeks} week`,
                prefix: "",
                distance: `${weeks} week`
            }
        } else if (days < 2 && hours < 24 && minutes <= 59 && seconds <= 59) {
            return {
                years: years,
                months: months,
                weeks: weeks,
                days: days,
                hours: hours,
                minutes: minutes,
                seconds: seconds,
                value: `${weeks} week`,
                prefix: "about",
                distance: `about ${weeks} week`
            }
        } else if (days >= 5 && hours < 24 && minutes <= 59 && seconds <= 59) {
            return {
                years: years,
                months: months,
                weeks: weeks,
                days: days,
                hours: hours,
                minutes: minutes,
                seconds: seconds,
                value: `${weeks + 1} week`,
                prefix: "about",
                distance: `about ${weeks + 1} weeks`
            }
        } else if (days >= 2 && days <= 4 && hours < 24 && minutes <= 59 && seconds <= 59) {
            return {
                years: years,
                months: months,
                weeks: weeks,
                days: days,
                hours: hours,
                minutes: minutes,
                seconds: seconds,
                value: `${weeks + 1} week`,
                prefix: "less than",
                distance: `less than ${weeks + 1} ${weeks + 1 === 1 ? 'a week': 'weeks'}`
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
                value: `${weeks} week`,
                prefix: "more than",
                distance: `more than ${weeks} week`
            }
        }
    }

    otherWeeks(years, months, weeks, days, hours, minutes, seconds) {
        if (weeks == 4 && days <= 6 && hours < 24 && minutes <= 59 && seconds <= 59) {
            return {
                years: years,
                months: months,
                weeks: weeks,
                days: days,
                hours: hours,
                minutes: minutes,
                seconds: seconds,
                value: `${weeks} weeks`,
                prefix: "about",
                distance: `about ${months + 1 === 1 ? "a month" : `${months + 1} months`}`
            }
        }
        if (days <= 1 && hours < 24 && minutes <= 59 && seconds <= 59) {
            return {
                years: years,
                months: months,
                weeks: weeks,
                days: days,
                hours: hours,
                minutes: minutes,
                seconds: seconds,
                value: `${weeks} weeks`,
                prefix: "",
                distance: `${weeks} weeks`
            }
        } else if (days <= 2 && hours < 24 && minutes <= 59 && seconds <= 59) {
            return {
                years: years,
                months: months,
                weeks: weeks,
                days: days,
                hours: hours,
                minutes: minutes,
                seconds: seconds,
                value: `${weeks} weeks`,
                prefix: "about",
                distance: `about ${weeks} weeks`
            }
        } else if (days >= 5 && hours < 24 && minutes <= 59 && seconds <= 59) {
            return {
                years: years,
                months: months,
                weeks: weeks,
                days: days,
                hours: hours,
                minutes: minutes,
                seconds: seconds,
                value: `${weeks + 1} weeks`,
                prefix: "about",
                distance: `about ${weeks + 1 === 4 ? 'a month': `${weeks + 1 === 1 ? 'a week' : `${weeks + 1} weeks`}`}`
            }
        } else if (days >= 2 && days <= 4 && hours < 24 && minutes <= 59 && seconds <= 59) {
            return {
                years: years,
                months: months,
                weeks: weeks,
                days: days,
                hours: hours,
                minutes: minutes,
                seconds: seconds,
                value: `${weeks + 1} weeks`,
                prefix: "less than",
                distance: `less than ${weeks + 1 === 4 ? 'a month': `${weeks + 1 === 1 ? 'a week' : `${weeks + 1} weeks`}`}`
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
                value: `${weeks} weeks`,
                prefix: "more than",
                distance: `more than ${weeks} weeks`
            }
        }
    }
}

module.exports = WeekController