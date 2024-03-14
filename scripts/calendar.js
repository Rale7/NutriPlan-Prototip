export function generateCalendar() {
    var today = new Date();
    var currentMonth = today.getMonth();
    var currentYear = today.getFullYear();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    var firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

    document.getElementById("current-month").innerHTML = months[currentMonth];
    document.getElementById("current-year").innerHTML = currentYear;

    var calendarBody = document.getElementById("calendar-days");
    calendarBody.innerHTML = "";

    for (var i = 0; i < firstDayOfMonth; i++) {
        var cell = document.createElement("li");
        calendarBody.appendChild(cell);
    }

    for (var i = 1; i <= daysInMonth; i++) {
        var cell = document.createElement("li");
        if (i == today.getDate()) {
            let span = document.createElement("span");
            span.classList.add("active");
            span.innerText = i;
            cell.appendChild(span);
        } else {
            cell.innerHTML = i;
        }
        calendarBody.appendChild(cell);
    }
}
