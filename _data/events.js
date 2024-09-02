// import {sortArrayOfObjectsByKey} from "./helpers.js";

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
  arr.sort(function(a, b) {
    if (a[key] < b[key]) return -1;
    if (a[key] > b[key]) return 1;
    return 0;
  });
  
  return arr;
};

let monthlyEvents = sortArrayOfObjectsByKey(
  JSON.parse(fs.readFileSync(path.resolve(__dirname, "events-monthly.json"))),
  "month"
);

let monthlyEventsList = {};

months.forEach((month, monthIndex) => {
  monthlyEventsList[month] = sortArrayOfObjectsByKey(monthlyEvents.filter((event) => event.month - 1 === monthIndex), "name", true);
});

let weeklyEvents = sortArrayOfObjectsByKey(
  JSON.parse(fs.readFileSync(path.resolve(__dirname, "events-weekly.json"))),
  "month"
);

let weeklyEventsList = {};

weekDays.forEach((day, dayIndex) => {
  weeklyEventsList[day] = sortArrayOfObjectsByKey(weeklyEvents.filter((event) => event.day - 1 === dayIndex), "name", true);
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
