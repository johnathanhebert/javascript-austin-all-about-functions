// Function objects
function Calendar() {}

// Use
Calendar.DAYS_OF_WEEK = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday'
];

Calendar.printDaysOfWeek = function () {
	console.log(Calendar.DAYS_OF_WEEK);
};