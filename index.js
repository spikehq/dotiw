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

    const returnObject = {
        years: years,
        months: months,
        weeks: weeks,
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
    }
    if (years) {
        const yearController = new YearController()
        if (years === 1) {
            const output = yearController.firstYear(years, months, weeks, days, hours, minutes, seconds)
            return {...returnObject, ...output}
        } else if (years > 10 && years < 100) {
            const output = yearController.decades(years)
            return {...returnObject, ...output}
        } else if (years >= 100) {
            const output = yearController.centuries(years)
            return {...returnObject, ...output}
        } else if (years > 1) {
            const output = yearController.years(years, months, weeks, days, hours, minutes, seconds)
            return {...returnObject, ...output}
        }
            
    } else if (months) {
        const monthController = new MonthController()
        if (months === 1) {
            const output = monthController.firstMonth(years, months, weeks, days, hours, minutes, seconds)
            return {...returnObject, ...output}
        } else if (months > 1) {
            const output = monthController.otherMonths(years, months, weeks, days, hours, minutes, seconds)
            return {...returnObject, ...output}
        }
    } else if (weeks) {
        const weekController = new WeekController()
        if (weeks === 1) {
            const output = weekController.firstWeek(weeks, days, hours, minutes, seconds)
            return {...returnObject, ...output}
        } else if (weeks > 1) {
            const output = weekController.otherWeeks(months, weeks, days, hours, minutes, seconds)
            return {...returnObject, ...output}
        }
    } else if (days) {
        const dayController = new DaysController()
        if (days === 1) {
            const output = dayController.firstDay(days, hours, minutes, seconds)
            return {...returnObject, ...output}
        } else if (days > 1) {
            const output = dayController.otherDays(weeks, days, hours, minutes, seconds)
            return {...returnObject, ...output}
        }
    } else if (hours) {
        const hoursController = new HoursController()
        if (hours === 1) {
            const output = hoursController.firstHour(hours, minutes, seconds)
            return {...returnObject, ...output}
        } else if (hours > 1) {
            const output = hoursController.otherHours(days, hours, minutes, seconds)
            return {...returnObject, ...output}
        }
    } else if (minutes) {
        const minuteController = new MinutesController()
        const output = minuteController.minutes(hours, minutes, seconds)
        return {...returnObject, ...output}
    } else if (seconds) {
        const secondsController = new SecondsController()
        const output = secondsController.seconds(seconds)
        return {...returnObject, ...output}
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

function distanceOfTimeInWords(from, to) {
    const fromDate = dayjs(from)
    const toDate = dayjs(to)
    
    const diff = toDate.diff(fromDate)


    if (diff < 0) {
        const result = helper(toDate,fromDate)
        result.suffix = "ago"
        result.distance += " ago"
        return result
    } else if (diff > 0) {
        const result = helper(fromDate, toDate)
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

console.log(distanceOfTimeInWords("1000-01-01 00:00:00", "2030-01-02 00:00:00"))
module.exports = distanceOfTimeInWords