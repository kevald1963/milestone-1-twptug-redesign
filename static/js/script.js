const date = new Date();

const renderCalendar = () => {

    // Mark events from events table on calendar.
    markEventsOnCalendar();

    // Set day of month to the 1st.
    date.setDate(1);

    const monthDays = document.querySelector(".days");

    const lastDay = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
    ).getDate();

    console.log("lastDay = " + lastDay);

    const prevLastDay = new Date(
        date.getFullYear(),
        date.getMonth(),
        0
    ).getDate();

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
    document.querySelector(".date h1").innerHTML = months[date.getMonth()];

    // Show current date at top of calendar
    d = new Date().toDateString();
    document.querySelector(".date p").innerHTML = new Intl.DateTimeFormat('en-GB', {dateStyle:'full'}).format(new Date());

    let days = "";

    for (let x = firstDayIndex; x > 0; x--) {
        days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
    }

    // Mark days on calendar where events have been posted.
    for (let i = 1; i <= lastDay; i++) {
        if (i === new Date().getDate() && date.getMonth() === new Date().getMonth() ) {
            // Events scheduled for today are marked with a purple background and red border.
            // If there are no events today then the day is marked with red background only.
            var existingClass = document.getElementById(i).getAttribute("class");
            if (existingClass == "events") {
                days += `<div id="${i}" class="events-today">${i}</div>`;
            } else {
                days += `<div id="${i}" class="today">${i}</div>`;
            }
        } else {
            // Events on other days are marked with a purple background only. If there are
            // no events on those days then they are not marked at all.
            console.log("i = " + i);
            var existingClass = document.getElementById(i).getAttribute("class");
            if (existingClass == "events") {
                days += `<div id="${i}" class="events">${i}</div>`;
            } else {
                days += `<div id="${i}">${i}</div>`;
            }
        }
    }

    for (let j = 1; j <= nextDays; j++) {
        days += `<div class="next-date">${j}</div>`;
        monthDays.innerHTML = days;
    }

    // Check if there are any events scheduled for today to display in Events panel.
    checkEventsForToday();

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
    const URL = '/get-next-month/?next-month=' + nextMonth + '&next-year=' + nextYear;
    const request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log("This is the returned data: " + request.response);
        };
    };
    request.open('GET', URL);
    request.send();

    console.log("Ready to render calendar for next month.");
    //renderCalendar();
    console.log("Calendar successfully rendered for next month.");

});

renderCalendar();

// If events scheduled for today, or there are none scheduled for today, check which is true to determine
// output in the Events panel. If neither condition is found then current date is not in the currently
// displayed month, in which case there is nothing to display in the Events panel.
function checkEventsForToday() {

    var events_today = document.getElementsByClassName("events-today");
    var no_events_today = document.getElementsByClassName("today");

    if (events_today.length > 0 || no_events_today.length > 0) {
        // Events found for today, so display them in events panel.
        if (events_today.length == 1) {
            eventsToday();
        } else {
        // No events found for today, so display a message saying no events found.
            noEventsToday();
        };
    };
};
