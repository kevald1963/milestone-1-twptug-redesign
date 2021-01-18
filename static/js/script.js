const date = new Date();

const renderCalendar = () => {
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
            if (existingClass == 'event') {
                days += `<div id="${i}" class="event-today">${i}</div>`;
            } else {
                days += `<div id="${i}" class="today">${i}</div>`;
            }
        } else {
            // Events on other days are marked with a purple background only. If there are
            // no events on those days then they are not marked at all.
            var existingClass = document.getElementById(i).getAttribute("class");
            if (existingClass == 'event') {
                days += `<div id="${i}" class="event">${i}</div>`;
            } else {
                days += `<div id="${i}">${i}</div>`;
            }
        }
    }

    for (let j = 1; j <= nextDays; j++) {
        days += `<div class="next-date">${j}</div>`;
        monthDays.innerHTML = days;
    }
};

document.querySelector(".prev").addEventListener("click", () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
});

renderCalendar();

function draw() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext)  {
        var context = canvas.getContext('2d');

        context.beginPath();
        context.moveTo(75,75);
        context.lineTo(10,75);
        context.lineTo(10,25);
        context.fill();
    }
}