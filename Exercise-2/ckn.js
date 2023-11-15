function factorial(num) {
    if (num == 0 || num == 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}
function ckn(k, n) {
    return factorial(n) / (factorial(k) * factorial((n - k)));
}
console.log(ckn(5, 9));