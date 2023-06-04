# DOTIW
DOTIW is a NodeJS library to convert distance between two timestamps in human readable format.

## Installation
    npm i dotiw

## usage
    const dotiw = require('dotiw')
    const { distance } = dotiw(startDate, endDate)

## Examples

dotiw will return an object with distance as a string, you can directly use the distance string or use the data provided by the obect to modify the string according to your need.

## Years
### About 1 year
```js
const result = dotiw("2021-01-01 00:00:00", "2022-01-01 00:00:00")

output => {
    years: 1,
    months: 0,
    weeks: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    value: '1 year',
    prefix: '',
    distance: '1 year',
    suffix: 'from now' 
}
```

### About x years
```js
const result = dotiw("2019-12-15 00:00:00", "2022-01-01 00:00:00")

output => { 
    years: 2,
    months: 0,
    weeks: 2,
    days: 4,
    hours: 0,
    minutes: 0,
    seconds: 0,
    value: '2 years',
    prefix: 'about',
    distance: 'about 2 years',
    suffix: 'later' 
}
```
```js
const result = dotiw("2025-01-01 00:00:00", "2022-01-18 00:00:00")

output => { 
    years: 2,
    months: 11,
    weeks: 2,
    days: 5,
    hours: 0,
    minutes: 0,
    seconds: 0,
    value: '3 year',
    prefix: 'less than',
    distance: 'less than 3 years ago',
    suffix: 'ago' 
}
```

## Months

### x months
```js
const result = dotiw("2022-03-01 00:00:00", "2022-01-01 00:00:00")

output => { 
    years: 0,
    months: 1,
    weeks: 4,
    days: 1,
    hours: 0,
    minutes: 0,
    seconds: 0,
    value: '2 months',
    prefix: '',
    distance: '2 month ago',
    suffix: 'ago' 
}
```

### About x months
```js
const result = dotiw("2022-03-01 00:00:00", "2022-01-19 00:00:00")

output = { 
    years: 0,
    months: 1,
    weeks: 1,
    days: 4,
    hours: 0,
    minutes: 0,
    seconds: 0,
    value: '1 month',
    prefix: 'about',
    distance: 'about 1 month ago',
    suffix: 'ago' 
}
```

### More than x months
```js
const result = dotiw("2022-03-01 00:00:00", "2022-01-18 00:00:00")

output => { 
    years: 0,
    months: 1,
    weeks: 1,
    days: 5,
    hours: 0,
    minutes: 0,
    seconds: 0,
    value: '1 month',
    prefix: 'more than',
    distance: 'more than 1 month ago',
    suffix: 'ago' 
}
```

### Less than x months
```js
const result = dotiw("2022-03-01 00:00:00", "2022-01-12 00:00:00")

output => { 
    years: 0,
    months: 1,
    weeks: 2,
    days: 4,
    hours: 0,
    minutes: 0,
    seconds: 0,
    value: '2 months',
    prefix: 'less than',
    distance: 'less than 2 months ago',
    suffix: 'ago' 
}
```

## weeks
### x weeks
```js
const result = dotiw("2022-01-01 00:00:00", "2022-01-15 00:00:00")

output => { 
    years: 0,
    months: 0,
    weeks: 2,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    value: '2 weeks',
    prefix: '',
    distance: '2 weeks',
    suffix: 'later' 
}
```

### More than x weeks
```js
const result = dotiw("2022-01-01 00:00:00", "2022-01-18 00:00:00")

output => { 
    years: 0,
    months: 0,
    weeks: 2,
    days: 3,
    hours: 0,
    minutes: 0,
    seconds: 0,
    value: '2 weeks',
    prefix: 'more than',
    distance: 'more than 2 weeks',
    suffix: 'later' 
}
```

### About x weeks
```js
const result = dotiw("2022-01-01 00:00:00", "2022-01-21 00:00:00")

output => { 
    years: 0,
    months: 0,
    weeks: 2,
    days: 6,
    hours: 0,
    minutes: 0,
    seconds: 0,
    value: '3 weeks',
    prefix: 'about',
    distance: 'about 3 weeks',
    suffix: 'later'
}
```

### Less than x weeks
```js
const result = dotiw("2022-01-01 00:00:00", "2022-01-28 00:00:00")

output => { 
    years: 0,
    months: 0,
    weeks: 3,
    days: 6,
    hours: 0,
    minutes: 0,
    seconds: 0,
    value: '4 weeks',
    prefix: 'less than',
    distance: 'less than a month',
    suffix: 'later' 
}
```

## Days
### x days
```js
const result = dotiw("2022-01-01 00:00:00", "2022-01-06 00:00:00")

output => { 
    years: 0,
    months: 0,
    weeks: 0,
    days: 5,
    hours: 0,
    minutes: 0,
    seconds: 0,
    value: '5 days',
    prefix: 'about',
    distance: 'less than a week',
    suffix: 'later' 
}
```

### About x days
```js
const result = dotiw("2022-01-01 00:00:00", "2022-01-07 00:00:00")

output => { 
    years: 0,
    months: 0,
    weeks: 0,
    days: 6,
    hours: 0,
    minutes: 0,
    seconds: 0,
    value: '1 week',
    prefix: 'about',
    distance: 'about 1 week',
    suffix: 'later' 
}
```

```js
const result = dotiw("2022-01-01 00:00:00", "2022-01-03 00:00:00")

output => { 
    years: 0,
    months: 0,
    weeks: 0,
    days: 2,
    hours: 0,
    minutes: 0,
    seconds: 0,
    value: '2 day',
    prefix: '',
    distance: '2 day',
    suffix: 'later' 
}
```


## hours

```js
const result = dotiw("2022-01-01 00:00:00", "2022-01-01 23:00:00")

output => { 
    years: 0,
    months: 0,
    weeks: 0,
    days: 0,
    hours: 23,
    minutes: 0,
    seconds: 0,
    value: '1 day',
    prefix: 'about',
    distance: 'about 1 day',
    suffix: 'later' 
}
```

```js
const result = dotiw("2022-01-01 00:00:00", "2022-01-01 03:00:00")

output => { 
    years: 0,
    months: 0,
    weeks: 0,
    days: 0,
    hours: 23,
    minutes: 0,
    seconds: 0,
    value: '3 hours',
    prefix: '',
    distance: '3 hours',
    suffix: 'later'
}
```


## minutes

```js
const result = dotiw("2022-01-01 00:00:00", "2022-01-01 00:10:00")

output => { 
    years: 0,
    months: 0,
    weeks: 0,
    days: 0,
    hours: 0,
    minutes: 10,
    seconds: 0,
    value: '10 minutes',
    prefix: '',
    distance: '10 minutes',
    suffix: 'later' 
}
```

```js
const result = dotiw("2022-01-01 00:00:00", "2022-01-01 00:10:00")

output => { 
    years: 0,
    months: 0,
    weeks: 0,
    days: 0,
    hours: 0,
    minutes: 10,
    seconds: 0,
    value: '10 minutes',
    prefix: '',
    distance: '10 minutes',
    suffix: 'later' 
}
```
```js
const result = dotiw("2022-01-01 00:00:00", "2022-01-01 00:50:00")

output => { 
    years: 0,
    months: 0,
    weeks: 0,
    days: 0,
    hours: 0,
    minutes: 50,
    seconds: 0,
    value: '1 hour',
    prefix: 'less than',
    distance: 'less than 1 hour',
    suffix: 'later' 
}
```
```js
const result = dotiw("2022-01-01 00:00:00", "2022-01-01 00:55:00")

output => { 
    years: 0,
    months: 0,
    weeks: 0,
    days: 0,
    hours: 0,
    minutes: 55,
    seconds: 0,
    value: '1 hour',
    prefix: '',
    distance: 'about 1 hour',
    suffix: 'later'
}
```

## Seconds

dotiw will provide starting 10 seconds as it is. Rest of the seconds are rounded off

```js
const result = dotiw("2022-01-01 00:00:00", "2022-01-01 00:00:10")
output => { 
    years: 0,
    months: 0,
    weeks: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 10,
    value: '10 seconds',
    prefix: '',
    distance: 'about 10 seconds',
    suffix: 'later' 
}
```

10 - 20 ===> about 20 seconds, you can always cutomize the message with the values provided
```js
const result = dotiw("2022-01-01 00:00:00", "2022-01-01 00:00:17")
output => { 
    years: 0,
    months: 0,
    weeks: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 17,
    value: '20 seconds',
    prefix: '',
    distance: 'about 20 seconds',
    suffix: 'later' 
}
```


```js
const result = dotiw("2022-01-01 00:00:00", "2022-01-01 00:00:55")
output => { 
    years: 0,
    months: 0,
    weeks: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 55,
    value: '1 minute',
    prefix: 'about',
    distance: 'about a minute',
    suffix: 'later' 
}
```
