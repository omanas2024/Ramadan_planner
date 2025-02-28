document.addEventListener("DOMContentLoaded", function () {
    function generateRamadanCalendar() {
        const calendarDiv = document.getElementById("ramadanCalendar");
        calendarDiv.innerHTML = "";
        calendarDiv.style.display = "grid";
        calendarDiv.style.gridTemplateColumns = "repeat(7, 1fr)";
        calendarDiv.style.gap = "10px";
        calendarDiv.style.direction = "rtl";

        let days = [];
        for (let i = 1; i <= 30; i++) {
            let dayElement = document.createElement("a");
            dayElement.className = "calendar-day";
            dayElement.href = `day.html?day=${i}`;
            dayElement.innerText = `اليوم ${i}`;
            days.push(dayElement);
        }

        // ترتيب الأيام ليبدأ التقويم من اليمين
        days.reverse().forEach(day => calendarDiv.appendChild(day));
    }

    generateRamadanCalendar();
});
