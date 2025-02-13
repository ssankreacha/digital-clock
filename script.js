let is24HourFormat = true;

function updateClock() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = String(now.getMinutes()).padStart(2, "0");
    let seconds = String(now.getSeconds()).padStart(2, "0");
    let ampm = "";

    if (!is24HourFormat) {
        ampm = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12; // Convert to 12-hour format
    }

    let timeString = `${hours}:${minutes}:${seconds} ${ampm}`.trim();
    document.getElementById("clock").textContent = timeString;

    let dateString = now.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    });

    document.getElementById("date").textContent = dateString;
}

function toggleFormat() {
    is24HourFormat = !is24HourFormat;
    updateClock(); // Refresh the clock immediately
}

function toggleTheme() {
    document.body.classList.toggle("light-mode");
}

function changeFontSize() {
    let selectedSize = document.getElementById("fontSize").value;
    document.getElementById("clock").style.fontSize = selectedSize;
}

// Update clock every second
setInterval(updateClock, 1000);

// Initialize the clock immediately
updateClock();
