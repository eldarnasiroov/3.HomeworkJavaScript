function getTime(numberOfSec) {
    if (numberOfSec && typeof numberOfSec === 'number' && numberOfSec > 0 && numberOfSec % 1 == 0) {
        const time = {
            years: 0,
            months: 0,
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        }
        while (numberOfSec % (86400 * 30 * 12) != 0) {
            numberOfSec--;
            time.months++;
        }
        while (time.months % (86400 * 30) != 0) {
            time.months--;
            time.days++;
        }
        while (time.days % 86400 != 0) {
            time.days--;
            time.hours++;
        }
        while (time.hours % 3600 != 0) {
            time.hours--;
            time.minutes++;
        }
        while (time.minutes % 60 != 0) {
            time.minutes--;
            time.seconds++;
        }
        time.years = numberOfSec / (86400 * 30 * 12);
        time.months = time.months / (86400 * 30);
        time.days = time.days / 86400;
        time.hours = time.hours / 3600;
        time.minutes = time.minutes / 60;
        return time;
    } else {
        console.log('Oops... Something went wrong.');
    }
}
let time = getTime(86500);
console.log(time);