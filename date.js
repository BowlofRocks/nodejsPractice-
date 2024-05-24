const date = require("date-and-time");

const now = new Date();

const formattedDate = date.format(now, "D/M/YYYY");

const value = date.transform(formattedDate, "DD/MM/YYYY", "MM/DD/YYYY");

console.log("transformed date and time :- " + value);
