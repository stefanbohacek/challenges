const fs = require("fs");
const path = require("path");

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const weekDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const sortArrayOfObjectsByKey = (arr, key, asc) => {
  arr.sort(function (a, b) {
    if (a[key] < b[key]) return -1;
    if (a[key] > b[key]) return 1;
    return 0;
  });

  return arr;
};

const getCurrentYear = () => {
  return new Date().getFullYear();
};

const getCurrentMonth = () => {
  return new Date().getMonth() + 1;
};

const getCurrentDay = () => {
  return new Date().getDay();
};

const daysInMonth = (month) => {
  return new Date(new Date().getFullYear(), month, 0).getDate();
};

let monthlyEvents = sortArrayOfObjectsByKey(
  JSON.parse(fs.readFileSync(path.resolve(__dirname, "events-monthly.json"))),
  "month"
);

monthlyEvents.forEach((event) => {
  if (event.start_date) {
    event.start_date = `${getCurrentYear()}-${event.start_date}`;
  } else {
    event.start_date = `${getCurrentYear()}-${String(event.month).padStart(
      2,
      "0"
    )}-01`;
  }
  if (event.end_date) {
    event.end_date = `${getCurrentYear()}-${event.end_date}`;
  } else {
    event.end_date = `${getCurrentYear()}-${String(event.month).padStart(
      2,
      "0"
    )}-${daysInMonth(event.month)}`;
  }
});

let monthlyEventsList = {};

months.forEach((month, monthIndex) => {
  monthlyEventsList[month] = sortArrayOfObjectsByKey(
    monthlyEvents.filter((event) => event.month - 1 === monthIndex),
    "name",
    true
  );
});

let weeklyEvents = sortArrayOfObjectsByKey(
  JSON.parse(fs.readFileSync(path.resolve(__dirname, "events-weekly.json"))),
  "month"
);

weeklyEvents.forEach((event) => {
  const today = new Date();
  let todayDay = today.getDay(); // 3

  if (todayDay === 0) {
    todayDay = 7;
  }

  let dayOffset = event.day - todayDay + 1;

  if (dayOffset < 0) {
    dayOffset += 7;
  }

  const targetDate = new Date(
    today.getTime() + dayOffset * 24 * 60 * 60 * 1000
  );
  const theDate = `${targetDate.getFullYear()}-${String(
    targetDate.getMonth() + 1
  ).padStart(2, "0")}-${String(targetDate.getDay()).padStart(2, "0")}`;
  event.start_date = theDate;
  event.end_date = theDate;
});

let weeklyEventsList = {};

weekDays.forEach((day, dayIndex) => {
  weeklyEventsList[day] = sortArrayOfObjectsByKey(
    weeklyEvents.filter((event) => event.day - 1 === dayIndex),
    "name",
    true
  );
});

let ongoingEvents = sortArrayOfObjectsByKey(
  JSON.parse(fs.readFileSync(path.resolve(__dirname, "events-ongoing.json"))),
  "name"
);

const data = {
  monthly: monthlyEventsList,
  weekly: weeklyEventsList,
  ongoing: ongoingEvents,
};

module.exports = () => {
  return data;
};
