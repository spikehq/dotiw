class YearController {

    firstYear(years, months, weeks, days, hours, minutes, seconds) {
        if (months === 0 && weeks === 0 && days === 0 && hours < 24 && minutes <= 29 && seconds <= 59) {
            return {
                value: `${years} year`,
                prefix: "",
                distance: `${years} year`
            }
        } else if (months < 1 && weeks <= 1 && days <= 3 && hours < 24 && minutes <= 59 && seconds <= 59) {
            return {
                value: `${years} year`,
                prefix: "about",
                distance: `about a year`
            }
        } else if (months === 11 && weeks >= 2 && weeks < 3 && days > 3 && hours < 24 && minutes <= 59 && seconds <= 59) {
            return {
                value: `${years + 1} years`,
                prefix: "less than",
                distance: `less than ${years + 1} years`
            }
        } else if (months >= 11 && weeks >= 3 && days >= 0 && hours < 24 && minutes <= 59 && seconds <= 59) {
            return {
                value: `${years + 1} year`,
                prefix: "about",
                distance: `about ${years + 1} years`
            }
        } else {
            return {
                value: `${years} year`,
                prefix: "more than",
                distance: `more than ${years} year`
            }
        }
    }


    years(years, months, weeks, days, hours, minutes, seconds) {
        if (months === 0 && weeks === 0 && days <= 1 && hours < 24 && minutes <= 29 && seconds <= 59) {
            return {
                value: `${years} years`,
                prefix: "",
                distance: `${years} years`
            }
        } else if (months === 0 && weeks <= 2 && days <= 6 && hours < 24 && minutes <= 59 && seconds <= 59) {
            return {
                value: `${years} years`,
                prefix: "about",
                distance: `about ${years} years`
            }
        } else if (months === 11) {
            if (weeks >= 3) {
                return {
                    value: `${years + 1} years`,
                    prefix: "about",
                    distance: `about ${years + 1} years`
                }
            } else if (weeks >= 1 && days >= 3) {
                return {
                    value: `${years + 1} year`,
                    prefix: "less than",
                    distance: `less than ${years + 1} years`
                }
            } else {
                return {
                    value: `${years} year`,
                    prefix: "more than",
                    distance: `more than ${years} years`
                }
            }
        } else {
            return {
                value: `${years} ${years === 1 ? "year" : "years"}`,
                prefix: "more than",
                distance: `more than ${years} ${years === 1 ? "year" : "years"}`
            }
        }
    }


    decades(years) {
        const reminder = years % 10
        let distance = `${years} ${years === 1 ? "year" : "years"}`
        let prefix = "more than"
        if (reminder === 0) {
            return {
                value: `${years} years`,
                prefix: "",
                distance: `${Math.floor(years / 10) === 1 ? "a decade" : `${Math.floor(years / 10)} decades`}`
            }
        }
        else if (reminder == 8 || reminder == 7) {
            return {
                value: `${Math.floor(years / 10) + 1} decades`,
                prefix: "less than",
                distance: `less than ${Math.floor(years / 10) + 1} decades`
            }
        } else if (reminder <= 3 || reminder >= 7) {
            return {
                value: `${Math.floor(years / 10) === 1 ? "a decade" : `${Math.floor(years / 10)} decades`}`,
                prefix: "about",
                distance: `about ${Math.floor(years / 10) === 1 ? "a decade" : `${Math.floor(years / 10)} decades`}`
            }
        } else {
            return {
                value: `${Math.floor(years / 10)} decades`,
                prefix: "more than",
                distance: `more than ${Math.floor(years / 10)} decades`
            }
        }
    }

    centuries(years) {
        const reminder = years % 100
        let distance = `${years} ${years === 1 ? "year" : "years"}`
        let prefix = "more than"
        if (reminder === 0) {
            return {
                value: `${years} years`,
                prefix: "",
                distance: `${Math.floor(years / 100) === 1 ? "a century" : `${Math.floor(years / 100)} centuries`}`
            }
        }
        else if (reminder == 80 || reminder == 70) {
            return {
                value: `${Math.floor(years / 100) + 1} centuries`,
                prefix: "less than",
                distance: `less than ${Math.floor(years / 100) + 1} centuries`
            }
        } else if (reminder <= 30 || reminder >= 70) {
            return {
                value: `${Math.floor(years / 100) === 1 ? "a century" : `${Math.floor(years / 100)} centuries`}`,
                prefix: "about",
                distance: `about ${Math.floor(years / 100) === 1 ? "a century" : `${Math.floor(years / 100)} centuries`}`
            }
        } else {
            return {
                value: `${Math.floor(years / 100)} centuries`,
                prefix: "more than",
                distance: `more than ${Math.floor(years / 100)} centuries`
            }
        }
    }
}

module.exports = YearController;