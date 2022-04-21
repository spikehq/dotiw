const dayjs = require("dayjs")


function helper(fromDate, toDate, unit, includeSeconds=true) {
    fromDate = dayjs(fromDate)
    toDate = dayjs(toDate)
    let diff = toDate.diff(fromDate)


    const totalSeconds = Math.floor(diff / 1000)
    const totalMinutes = Math.floor(totalSeconds / 60)
    const totalHours = Math.floor(totalMinutes / 60)
    const totalDays = Math.floor(totalHours / 24)
    const totalWeeks = Math.floor(totalDays / 7)
    const totalMonths = Math.floor(totalDays / 30)
    const totalYears = Math.floor(totalDays / 365)

    const seconds = totalSeconds % 60
    const minutes = totalMinutes % 60
    const hours = totalHours % 24
    const days = totalDays % 7
    const weeks = totalWeeks % 4
    const months = totalMonths % 12
    const years = totalYears

    // console.log(diff)

    // console.log(seconds, minutes, hours, days, weeks, months, years)

    if (years) {
        if (years === 1) {
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
            } else if (months <= 1 && weeks <= 3 && days < 10 && hours < 24 && minutes <= 59 && seconds <= 59) {
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
                    distance: `about a ${years} year`
                }
            } else if (months >= 11 && weeks >= 3 && days >= 21 && hours < 24 && minutes <= 59 && seconds <= 59) {
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
                    distance: `more than ${years} years`
                }
            }
        } else if (years > 10 && years < 100) {
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
                distance: `about ${years / 10} ${years / 10 === 1 ? "decade" : "decades"}`
            }
        } else if (years > 1) {
            if (months === 0 && weeks === 0 && days < 10 && hours < 24 && minutes <= 59 && seconds <= 59) {
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
            } else if (months >= 11 && weeks >= 3 && days <= 10 && hours < 24 && minutes <= 59 && seconds <= 59) {
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
    } else if (months) {
        if (months === 1) {
            if (weeks === 0 && days === 0 && hours < 24 && minutes <= 29 && seconds <= 59) {
                return {
                    years: years,
                    months: months,
                    weeks: weeks,
                    days: days,
                    hours: hours,
                    minutes: minutes,
                    seconds: seconds,
                    value: `${months} month`,
                    prefix: "",
                    distance: `${months} month`
                }
            } else if (weeks <= 1 && days < 5 && hours < 24 && minutes <= 59 && seconds <= 59) {
                return {
                    years: years,
                    months: months,
                    weeks: weeks,
                    days: days,
                    hours: hours,
                    minutes: minutes,
                    seconds: seconds,
                    value: `${months} month`,
                    prefix: "about",
                    distance: `about a ${months} month`
                }
            } else if (weeks >= 3 && days <= 6 && hours < 24 && minutes <= 59 && seconds <= 59) {
                return {
                    years: years,
                    months: months,
                    weeks: weeks,
                    days: days,
                    hours: hours,
                    minutes: minutes,
                    seconds: seconds,
                    value: `${months + 1} month`,
                    prefix: "about",
                    distance: `about ${months + 1} months`
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
                    value: `${months} month`,
                    prefix: "more than",
                    distance: `more than ${months} month`
                }
            }
        } else if (months > 1) {
            if (weeks === 0 && days < 5 && hours < 24 && minutes <= 59 && seconds <= 59) {
                return {
                    years: years,
                    months: months,
                    weeks: weeks,
                    days: days,
                    hours: hours,
                    minutes: minutes,
                    seconds: seconds,
                    value: `${months} months`,
                    prefix: "about",
                    distance: `about ${months} months`
                }
            } else if (weeks >= 3 && days <= 6 && hours < 24 && minutes <= 59 && seconds <= 59) {
                return {
                    years: years,
                    months: months,
                    weeks: weeks,
                    days: days,
                    hours: hours,
                    minutes: minutes,
                    seconds: seconds,
                    value: `${months + 1} months`,
                    prefix: "about",
                    distance: `about ${months + 1} months`
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
                    value: `${months} months`,
                    prefix: "more than",
                    distance: `more than ${months} months`
                }
            }
        }
    } else if (weeks) {
        if (weeks === 1) {
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
                    distance: `about a ${weeks} week`
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
                    distance: `more than a ${weeks} week`
                }
            }
        } else if (weeks > 1) {

            if (weeks == 3 && days <= 6 && hours < 24 && minutes <= 59 && seconds <= 59) {
                return {
                    years: years,
                    months: months,
                    weeks: weeks,
                    days: days,
                    hours: hours,
                    minutes: minutes,
                    seconds: seconds,
                    value: `${months + 1} ${months + 1 === 1 ? "month" : "months"}`,
                    prefix: "about",
                    distance: `about ${months + 1} ${months + 1 === 1 ? "a month" : "months"}`
                }
            }
            if (days <= 2 && hours < 24 && minutes <= 59 && seconds <= 59) {
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
                    distance: `about ${weeks + 1} weeks`
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
    } else if (days) {
        if (days === 1) {
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
                    distance: `about a ${days + 1} days`
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
        } else if (days > 1) {
            if (hours <= 3 && minutes <= 59 && seconds <= 59) {
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
            } else if (hours > 21 && minutes <= 59 && seconds <= 59) {
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
            } else if (hours <= 21 && minutes > 59 && seconds <= 59) {
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
    } else if (hours) {
        if (hours === 1) {
            if (minutes <= 5 && seconds <= 59) {
                return {
                    years: years,
                    months: months,
                    weeks: weeks,
                    days: days,
                    hours: hours,
                    minutes: minutes,
                    seconds: seconds,
                    value: `${hours} hour`,
                    prefix: "",
                    distance: `${hours} hour`
                }
            } else if (minutes >= 50 && seconds <= 59) {
                return {
                    years: years,
                    months: months,
                    weeks: weeks,
                    days: days,
                    hours: hours,
                    minutes: minutes,
                    seconds: seconds,
                    value: `${hours} hour`,
                    prefix: "about",
                    distance: `about a ${hours + 1} hours`
                }
            } else if (minutes <= 50 && seconds > 59) {
                return {
                    years: years,
                    months: months,
                    weeks: weeks,
                    days: days,
                    hours: hours,
                    minutes: minutes,
                    seconds: seconds,
                    value: `${hours} hour`,
                    prefix: "more than",
                    distance: `more than ${hours} hour`
                }
            }
        } else if (hours > 1) {
            if (minutes <= 1 && seconds <= 59) {
                return {
                    years: years,
                    months: months,
                    weeks: weeks,
                    days: days,
                    hours: hours,
                    minutes: minutes,
                    seconds: seconds,
                    value: `${hours} hours`,
                    prefix: "",
                    distance: `${hours} hours`
                }
            } else if (minutes <= 5 && seconds <= 59) {
                return {
                    years: years,
                    months: months,
                    weeks: weeks,
                    days: days,
                    hours: hours,
                    minutes: minutes,
                    seconds: seconds,
                    value: `${hours} hours`,
                    prefix: "about",
                    distance: `about a ${hours} hours`
                }
            } else if (minutes >= 50 && seconds <= 59) {
                return {
                    years: years,
                    months: months,
                    weeks: weeks,
                    days: days,
                    hours: hours,
                    minutes: minutes,
                    seconds: seconds,
                    value: `${hours} hours`,
                    prefix: "about",
                    distance: `about a ${hours + 1} hours`
                }
            } else if (minutes <= 50 && seconds > 59) {
                return {
                    years: years,
                    months: months,
                    weeks: weeks,
                    days: days,
                    hours: hours,
                    minutes: minutes,
                    seconds: seconds,
                    value: `${hours} hours`,
                    prefix: "more than",
                    distance: `more than ${hours} hours`
                }
            }
        }
    } else if (minutes) {
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
    } else if (seconds) {
        if (seconds < 10) {
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
                distance: `just now`
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
                prefix: "about",
                distance: `about a minute`
            }
        }
    }
}

function distanceOfTimeInWords(from, to, unit = "second") {

    const fromDate = dayjs(from)
    const toDate = dayjs(to)
    
    const diff = toDate.diff(fromDate, unit)
    if (diff < 0) {
        const res = helper(toDate,fromDate, unit)
        res.suffix = "ago"
        res.distance += " ago"
        return res
    } else {
        return helper(fromDate, toDate, unit)
    }
}

console.log(distanceOfTimeInWords("2016-12-31T23:59:59Z", "2017-01-01T00:00:00Z"))
console.log(distanceOfTimeInWords("2017-01-01T00:00:00Z", new Date()))
console.log(distanceOfTimeInWords(new Date(), "2023-07-29T23:59:59Z"))
console.log(distanceOfTimeInWords("2019-12-31T23:59:59Z", "2017-01-01T00:00:00Z"))

module.exports = distanceOfTimeInWords