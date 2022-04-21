class YearController {

    firstYear(years, months, weeks, days, hours, minutes, seconds) {
        if (months === 0 && weeks === 0 && days === 0 && hours < 24 && minutes <= 29 && seconds <= 59) {
            return {
                years: years,
                months: months,
                weeks: weeks,
                days: days,
                hours: hours,
                minutes: minutes,
                seconds: seconds,
                value: `${years} year`,
                prefix: "",
                distance: `${years} year`
            }
        } else if (months <= 1 && weeks <= 2 && days >= 1 && hours < 24 && minutes <= 59 && seconds <= 59) {
            return {
                years: years,
                months: months,
                weeks: weeks,
                days: days,
                hours: hours,
                minutes: minutes,
                seconds: seconds,
                value: `${years} year`,
                prefix: "about",
                distance: `about a year`
            }
        } else if (months >= 11 && weeks >= 4 && days >= 1 && hours < 24 && minutes <= 59 && seconds <= 59) {
            return {
                years: years,
                months: months,
                weeks: weeks,
                days: days,
                hours: hours,
                minutes: minutes,
                seconds: seconds,
                value: `${years + 1} year`,
                prefix: "about",
                distance: `about ${years + 1} years`
            }
        } else if (months === 11 && weeks >= 2 && days >= 1 && hours < 24 && minutes <= 59 && seconds <= 59) {
            return {
                years: years,
                months: months,
                weeks: weeks,
                days: days,
                hours: hours,
                minutes: minutes,
                seconds: seconds,
                value: `${years} year`,
                prefix: "less than",
                distance: `less than ${years + 1} years`
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
                value: `${years} year`,
                prefix: "more than",
                distance: `more than ${years} year`
            }
        }
    }
    
    
    years(years, months, weeks, days, hours, minutes, seconds) {
        if (months === 0 && weeks === 0 && days <= 1 && hours < 24 && minutes <= 29 && seconds <= 59) {
            return {
                years: years,
                months: months,
                weeks: weeks,
                days: days,
                hours: hours,
                minutes: minutes,
                seconds: seconds,
                value: `${years} years`,
                prefix: "",
                distance: `${years} years`
            }
        } else if (months === 0 && weeks <= 2 && days <= 6 && hours < 24 && minutes <= 59 && seconds <= 59) {
            return {
                years: years,
                months: months,
                weeks: weeks,
                days: days,
                hours: hours,
                minutes: minutes,
                seconds: seconds,
                value: `${years} years`,
                prefix: "about",
                distance: `about ${years} years`
            }
        } else if (months === 11 && weeks >= 3 && days >= 1 && hours < 24 && minutes <= 59 && seconds <= 59) {
            return {
                years: years,
                months: months,
                weeks: weeks,
                days: days,
                hours: hours,
                minutes: minutes,
                seconds: seconds,
                value: `${years} year`,
                prefix: "less than",
                distance: `less than ${years + 1} years`
            }
        } else if (months >= 11 && weeks >= 4 && days >= 0 && hours < 24 && minutes <= 59 && seconds <= 59) {
            return {
                years: years,
                months: months,
                weeks: weeks,
                days: days,
                hours: hours,
                minutes: minutes,
                seconds: seconds,
                value: `${years + 1} years`,
                prefix: "about",
                distance: `about ${years + 1} years`
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
                value: `${years} years`,
                prefix: "more than",
                distance: `more than ${years} ${years === 1 ? "year": "years"}`
            }
        }
    }


    decades(years, months, weeks, days, hours, minutes, seconds) {
        return {
            years: years,
            months: months,
            weeks: weeks,
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds,
            value: `${years} years`,
            prefix: "about",
            distance: `about ${Math.floor(years / 10) === 1 ? "a decade" : `${Math.floor(years / 10)} decades`}`
        }
    }
}

module.exports = YearController;