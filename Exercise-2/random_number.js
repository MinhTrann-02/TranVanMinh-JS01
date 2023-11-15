function randomNumber(min, max) {
    if (min < 0 || max < 0 || min > max) {
        return null;
    } else {
        return Math.floor(Math.random() * (max - min)) + min;
    }
}
console.log(randomNumber(3, 10));