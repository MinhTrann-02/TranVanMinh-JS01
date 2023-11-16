var currentTime;

function updateTime() {
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    const hourHand = document.querySelector('.hour-hand');
    const minuteHand = document.querySelector('.minute-hand');
    const secondHand = document.querySelector('.second-hand');

    const hourDeg = (hours % 12 + minutes / 60) * 360 / 12;
    const minuteDeg = (minutes + seconds / 60) * 360 / 60;
    const secondDeg = seconds * 360 / 60;

    hourHand.style.transform = `rotate(${hourDeg-180}deg)`;
    minuteHand.style.transform = `rotate(${minuteDeg-180}deg)`;
    secondHand.style.transform = `rotate(${secondDeg-180}deg)`;

    if (minutes < 10) minutes = '0' + minutes;
    var timeString = hours + ':' + minutes;
    document.querySelector('.time').innerText = timeString;
}

function updateDate() {
    const weekdays = ['MONDAY', 'TUESDAY', 'WENESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'];
    const months = ['JAN', 'FED', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    var weekdayIndex = currentTime.getDay();
    var monthIndex = currentTime.getMonth();
    var date = currentTime.getDate();
    var weekday = weekdays[weekdayIndex];
    var month = months[monthIndex];
    var dateString = weekday + ', ' + month + ' ' + date;
    document.querySelector('.date').innerText = dateString;
}

setInterval(() => {
    currentTime = new Date();
    updateTime();
    updateDate();
}, 1000);