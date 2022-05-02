function setDate(date) {
    const setYear = {
        year(yearValue = date.getFullYear()) {
            date.setFullYear(yearValue);
            const setMonth = {
                month(monthValue = date.getMonth()) {
                    date.setMonth(monthValue - 1);
                    const setDay = {
                        day(dayValue = date.getDay()) {
                            date.setDate(dayValue);
                            const setHours = {
                                hour(hourValue = date.getHours()) {
                                    date.setHours(hourValue);
                                    const setMinutes = {
                                        minute(minuteValue = date.getMinutes()) {
                                            date.setMinutes(minuteValue);
                                            const setSeconds = {
                                                second(secondValue = date.getSeconds()) {
                                                    date.setSeconds(secondValue);
                                                }
                                            }
                                            return setSeconds;
                                        }
                                    }
                                    return setMinutes;
                                }
                            }
                            return setHours;
                        }
                    }
                    return setDay;
                }
            }
            return setMonth;
        }
    }
    return setYear;
}
const date = new Date();
setDate(date).year(2020).month().day().hour(13).minute(12).second(15);
console.log(date);