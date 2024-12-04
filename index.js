/* Your Code Here */
const createEmployeeRecord = function ([firstName, familyName, title, payPerHour]) {
    return {
        firstName,
        familyName,
        title,
        payPerHour,
        timeInEvents: [],
        timeOutEvents: [],
        allWagesFor
    }
}

function createEmployeeRecords(arrays) {
    return arrays.map(createEmployeeRecord)
}

function createTimeInEvent(dateTime) {
    const [date, hour] = dateTime.split(" ")
    const timeInEvent = {
        type: "TimeIn",
        date: date,
        hour: parseInt(hour)
    }
    this.timeInEvents.push(timeInEvent)
    return this
}

function createTimeOutEvent(dateTime) {
    const [date, hour] = dateTime.split(" ")
    const timeOutEvent = {
        type: "TimeOut",
        date: date,
        hour: parseInt(hour)
    }
    this.timeOutEvents.push(timeOutEvent)
    return this
}

function hoursWorkedOnDate(date) {
    const timeIn = this.timeInEvents.find(e => e.date === date)
    const timeOut = this.timeOutEvents.find(e => e.date === date)
    if (timeIn && timeOut) {
        return (timeOut.hour - timeIn.hour) / 100
    }
    return 0
}

function wagesEarnedOnDate(date) {
    const hoursWorked = hoursWorkedOnDate.call(this, date);
    return hoursWorked * this.payPerHour;
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(record => record.firstName === firstName)
}

function calculatePayroll(employeeRecords){
    return employeeRecords.reduce((totalPayroll, employee) => {
        return totalPayroll + employee.allWagesFor()
    }, 0)
}