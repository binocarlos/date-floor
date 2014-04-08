date-floor
==========

![Build status](https://api.travis-ci.org/binocarlos/date-floor.png)

Like Math.floor but for Date objects

## installation

```
$ npm install date-floor
```

## usage

Take a date any get back one that is the closest preceding:

 * year
 * month
 * day
 * hour
 * minute

```js
var datefloor = require('date-floor');

var d = new Date('05/06/2014 11:56:45');


// 01/01/2014 00:00:00
var year = datefloor(d, 'year');

// 05/01/2014 00:00:00
var month = datefloor(d, 'month');

// 05/06/2014 00:00:00
var day = datefloor(d, 'day');

// 05/06/2014 11:00:00
var hour = datefloor(d, 'hour');

// 05/06/2014 11:56:00
var minute = datefloor(d, 'minute');
```

## license

MIT