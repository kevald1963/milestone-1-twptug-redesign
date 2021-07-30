const date = new Date();

const renderCalendar = () => {

    // Set day of month to the 1st.
    date.setDate(1);

    const monthDays = document.querySelector(".days");

    const lastDay = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
    ).getDate();

    const prevLastDay = new Date(
        date.getFullYear(),
        date.getMonth(),
        0
    ).getDate();

    console.log("lastDay = " + lastDay);
    console.log("prevLastDay = " + prevLastDay);

    const firstDayIndex = date.getDay();

    const lastDayIndex = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
    ).getDay();

    const nextDays = 7 - lastDayIndex - 1;

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

    // Show month at top of calendar.
    document.querySelector(".date h2").innerHTML = months[date.getMonth()] + " " + date.getFullYear();

    // Show current date at top of calendar
    d = new Date().toDateString();
    document.querySelector(".date p").innerHTML = "Today: " + new Intl.DateTimeFormat('en-GB', {dateStyle:'full'}).format(new Date());

    //
    // Populate the date cells in the calendar block.
    //
    let days = "";

    for (let x = firstDayIndex; x > 0; x--) { // Populate the date cells for the PREVIOUS month.
        days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
    };

    // Populate the date cells for the CURRENT month. Mark the current date for colour highlighting.
    for (let i = 1; i <= lastDay; i++) {
        if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
            days += `<div id="${i}" class="today">${i}</div>`;
        } else {
            days += `<div id="${i}">${i}</div>`;
        }
    };

    for (let j = 1; j <= nextDays; j++) { // Populate the date cells for the FOLLOWING month.
        days += `<div class="next-date">${j}</div>`;
    };

    // Replace the entire set of day cells in the calendar block.
    monthDays.innerHTML = days;

    // Read events database and mark any events for the current month on the calendar.
    //markEventsOnCalendar();

    // Display all events scheduled for the current month in the events panel.
    //displayEventsForMonth();

    // Check if there are any events scheduled for today to display in the events panel.
    // START HERE NEXT!
    //checkEventsForToday();

};

// Go to previous month.
document.querySelector(".prev").addEventListener("click", () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
});

// Go to next month.
document.querySelector(".next").addEventListener("click", () => {
    date.setMonth(date.getMonth() + 1);

    var nextMonth = date.getMonth() + 1;
    var nextYear = date.getFullYear();

    // If end of year, revert next month to January and increment the full year value.
    if (nextMonth == 12) {
        var nextMonth = 1;
        var nextYear = year + 1;
    };

    console.log("nextMonth = " + nextMonth);
    console.log("nextYear = " + nextYear);

    console.log("nextMonth request sent.");
//    const url = '/get-next-month/?next-month=' + nextMonth + '&next-year=' + nextYear;
//
//    const request = new XMLHttpRequest();
//    request.onreadystatechange = function() {
//        if (this.readyState == 4 && this.status == 200) {
//            console.log("This is the returned data: " + request.response);
//            markEventsOnCalendar(request.response);
//            displayEventsForMonth(request.response);
//        };
//    };
//    request.open('GET', URL, true);
//    request.send();
//
    const url = '/get-next-month/?next-month=' + nextMonth + '&next-year=' + nextYear;
    getData(url)
        .then(data => {
            console.log("JSON data:");
            console.log(data); // JSON data parsed by `data.json()` call
        });

    console.log("Ready to render calendar for next month.");
    renderCalendar();
    console.log("Calendar successfully rendered for next month.");

});

renderCalendar();


// If events scheduled for today, or there are none scheduled for today, check which is true to determine
// output in the Events panel. If neither condition is found then current date is not in the currently
// displayed month, in which case there is nothing to display in the Events panel.
async function getData(url) {
    const response = await fetch(url, { });
    console.log(response);
    return response.json(); // parses JSON response into native JavaScript objects
};




function checkEventsForToday() {

    var events_today = document.getElementsByClassName("events-today");
    var no_events_today = document.getElementsByClassName("today");

    if (events_today.length > 0 || no_events_today.length > 0) {
        if (events_today.length == 1) { // Events found for today, so display them in events panel.
            eventsToday();
        } else { // No events found for today, so display a message saying no events found.
            noEventsToday();
        };
    };
};
