function randomNumFromArr(arr) {
    let x = Math.floor(Math.random() * arr.length);
    return arr[x];
}
console.log(randomNumFromArr([1, 2, 3, 4, 5, 6, 7, 8, 9]));