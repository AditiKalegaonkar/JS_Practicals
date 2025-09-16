let interval;

function startCountdown() {
    const endDate = document.getElementById('endDateInput').value;
    if (!endDate) return;
    clearInterval(interval);
    interval = setInterval(function() { updateCountdown(endDate); }, 1000);
    updateCountdown(endDate);
}

function updateCountdown(endDate) {
    const countdownEl = document.getElementById('countdown');
    const now = new Date();
    const deadline = new Date(endDate);
    const timeRemaining = deadline - now;

    if (timeRemaining <= 0) {
        countdownEl.innerHTML = "Expired";
        countdownEl.classList.add("expired");
        clearInterval(interval);
        return;
    }

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    countdownEl.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}
