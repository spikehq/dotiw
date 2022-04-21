class WeekController {
    firstWeek(weeks, days, hours, minutes, seconds) {
        if (days === 0 && hours < 24 && minutes <= 29 && seconds <= 59) {
            return {
                value: `${weeks} week`,
                prefix: "",
                distance: `${weeks} week`
            }
        } else if (days < 2 && hours < 24 && minutes <= 59 && seconds <= 59) {
            return {
                value: `${weeks} week`,
                prefix: "about",
                distance: `about ${weeks} week`
            }
        } else if (days == 4) {
            return {
                value: `${weeks + 1} week`,
                prefix: "less than",
                distance: `less than ${weeks + 1} weeks`
            }
        } else if (days >= 5 && hours < 24 && minutes <= 59 && seconds <= 59) {
            return {
                value: `${weeks + 1} week`,
                prefix: "about",
                distance: `about ${weeks + 1} weeks`
            }
        } else if (days >= 2 && days <= 4 && hours < 24 && minutes <= 59 && seconds <= 59) {
            return {
                value: `${weeks === 1 ? `a week` : `weeks`}`,
                prefix: "more than",
                distance: `more than ${weeks === 1 ? `a week` : `weeks`}`
            }
        } else {
            return {
                value: `${weeks} week`,
                prefix: "more than",
                distance: `more than ${weeks} week`
            }
        }
    }

    otherWeeks(months, weeks, days, hours, minutes, seconds) {
        if (weeks === 4 && hours < 24 && minutes <= 59 && seconds <= 59) {
            return {
                value: `${months + 1 === 1 ? "a month" : `${months + 1} months`}`,
                prefix: "",
                distance: `about ${months + 1 === 1 ? "a month" : `${months + 1} months`}`
            }
        } else if (weeks == 5 && days >= 1 && hours < 24 && minutes <= 59 && seconds <= 59) {
            return {
                value: `${months + 1 === 1 ? "a month" : `${months + 1} months`}`,
                prefix: "about",
                distance: `about ${months + 1 === 1 ? "a month" : `${months + 1} months`}`
            }
        }

        if (days < 1 && hours < 24 && minutes <= 59 && seconds <= 59) {
            return {
                value: `${weeks} weeks`,
                prefix: "",
                distance: `${weeks} weeks`
            }
        } else if (days <= 1 && hours < 24 && minutes <= 59 && seconds <= 59) {
            return {
                value: `${weeks} weeks`,
                prefix: "about",
                distance: `about ${weeks} weeks`
            }
        } else if (days >= 5 && hours < 24 && minutes <= 59 && seconds <= 59) {
            return {
                value: `${weeks + 1} weeks`,
                prefix: `${weeks + 1 === 4 ? "less than" : "about"}`,
                distance: `${weeks + 1 === 4 ? 'less than a month' : `${weeks + 1 === 1 ? 'about a week' : `about ${weeks + 1} weeks`}`}`
            }
        } else if (days === 5 && hours < 24 && minutes <= 59 && seconds <= 59) {
            return {
                value: `${weeks + 1 === 4 ? 'a month' : `${weeks + 1 === 1 ? 'a week' : `${weeks + 1} weeks`}`}`,
                prefix: "less than",
                distance: `less than ${weeks + 1 === 4 ? 'a month' : `${weeks + 1 === 1 ? 'a week' : `${weeks + 1} weeks`}`}`
            }
        } else {
            return {
                value: `${weeks} weeks`,
                prefix: "more than",
                distance: `more than ${weeks} weeks`
            }
        }
    }
}

module.exports = WeekController