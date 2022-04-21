const dayjs = require("dayjs")
const YearController = require('./years')
const MonthController = require('./months')
const WeekController = require('./weeks')
const DaysController = require('./days')
const HoursController = require("./hours")
const MinutesController = require("./minutes")
const SecondsController = require("./seconds")


function helper(fromDate, toDate, unit, includeSeconds=true) {
    fromDate = dayjs(fromDate)
    toDate = dayjs(toDate)
    let diff = toDate.diff(fromDate)

    let totalSeconds = Math.floor(diff / 1000)
    let totalMinutes = Math.floor(totalSeconds / 60)
    let totalHours = Math.floor(totalMinutes / 60)

    let totalDays = Math.floor(totalHours / 24)
    
    const years = Math.floor(totalDays / 365)
    totalDays = totalDays % 365
    
    let months
    if (totalDays < 360) {
        months = Math.floor(totalDays / 30)
        totalDays = totalDays % 30
    } else {
        months = Math.floor(totalDays / 30.417)
        totalDays = totalDays % 30.417
    }

    const weeks = Math.floor(totalDays / 7)
    totalDays = totalDays % 7

    const days = Math.round(totalDays)
    totalHours = totalHours % 24

    const hours = totalHours
    totalMinutes = totalMinutes % 60

    const minutes = totalMinutes
    totalSeconds = totalSeconds % 60

    const seconds = totalSeconds
    // console.log(diff)

    // console.log(seconds, minutes, hours, days, weeks, months, years)

    if (years) {
        const yearController = new YearController()
        if (years === 1) {
            return yearController.firstYear(years, months, weeks, days, hours, minutes, seconds)
        } else if (years > 10 && years < 100) {
            return yearController.decades(years, months, weeks, days, hours, minutes, seconds)
        } else if (years > 1) {
            return yearController.years(years, months, weeks, days, hours, minutes, seconds)
        }
            
    } else if (months) {
        const monthController = new MonthController()
        if (months === 1) {
            return monthController.firstMonth(years, months, weeks, days, hours, minutes, seconds)
        } else if (months > 1) {
            return monthController.otherMonths(years, months, weeks, days, hours, minutes, seconds)
        }
    } else if (weeks) {
        const weekController = new WeekController()
        if (weeks === 1) {
            return weekController.firstWeek(years, months, weeks, days, hours, minutes, seconds)
        } else if (weeks > 1) {
            return weekController.otherWeeks(years, months, weeks, days, hours, minutes, seconds)
        }
    } else if (days) {
        const dayController = new DaysController()
        if (days === 1) {
            return dayController.firstDay(years, months, weeks, days, hours, minutes, seconds)
        } else if (days > 1) {
            return dayController.otherDays(years, months, weeks, days, hours, minutes, seconds)
        }
    } else if (hours) {
        const hoursController = new HoursController
        if (hours === 1) {
            hoursController.firstHour(years, months, weeks, days, hours, minutes, seconds)
        } else if (hours > 1) {
            hoursController.otherHours(years, months, weeks, days, hours, minutes, seconds)
        }
    } else if (minutes) {
        const minuteController = new MinutesController()
        return minuteController.minutes(years, months, weeks, days, hours, minutes, seconds)
    } else if (seconds) {
        const secondsController = new SecondsController()
        return secondsController.seconds(years, months, weeks, days, hours, minutes, seconds)
    } else {
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
            distance: `${seconds} seconds`
        }
    }
}

function distanceOfTimeInWords(from, to, unit = "second") {

    const fromDate = dayjs(from)
    const toDate = dayjs(to)
    
    const diff = toDate.diff(fromDate, unit)
    if (diff < 0) {
        const result = helper(toDate,fromDate, unit)
        result.suffix = "ago"
        result.distance += " ago"
        return result
    } else if (diff > 0) {
        const result = helper(fromDate, toDate, unit)
        if (result) {
            result.suffix = "from now"
            return result
        }
    } else {
        return {
            years: 0,
            months: 0,
            weeks: 0,
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
            value: "now",
            prefix: "",
            distance: "now"
        } 
    }
}

// console.log(distanceOfTimeInWords("2016-12-31T23:59:59Z", "2017-01-01T00:00:00Z"))
// console.log(distanceOfTimeInWords(new Date(), new Date()))
// 0 seconds think about this

// console.log(distanceOfTimeInWords("2017-01-01T00:00:00Z", new Date()))
// console.log(distanceOfTimeInWords("2018-01-01T00:00:00Z", new Date()))
// console.log(distanceOfTimeInWords(new Date(), "2023-07-29T23:59:59Z"))
// console.log(distanceOfTimeInWords("2016-12-31T23:59:59Z", "2023-07-29T23:59:59Z"))
// console.log(distanceOfTimeInWords(new Date(), "2023-07-29T23:59:59Z"))
// console.log(distanceOfTimeInWords("2019-12-31T23:59:59Z", "2017-01-01T00:00:00Z"))


// console.log(distanceOfTimeInWords("2022-01-01T00:00:00Z", "2024-01-01T00:00:00Z"))
// console.log(distanceOfTimeInWords("2022-01-01T00:00:00Z", "2024-01-01T00:00:00Z"))


// 15 days
// console.log(distanceOfTimeInWords("2022-04-01T00:00:00Z", "2022-04-07T00:00:00Z"))
// console.log(distanceOfTimeInWords("2022-01-01T00:00:00Z", "2022-01-06T05:16:00Z"))
// change threshold for months


// console.log(distanceOfTimeInWords("2022-04-01T00:00:00Z", "2022-05-01T00:00:00Z"))
console.log(distanceOfTimeInWords("2022-02-01T00:00:00Z", "2022-02-22T00:00:00Z"))
// console.log(distanceOfTimeInWords("2099-12-20T00:00:00Z", "2022-01-01T00:00:00Z"))

module.exports = distanceOfTimeInWords