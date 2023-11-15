function formatMoney(money) {
    let moneyString = String(money);
    let period = moneyString.indexOf('.');
    let moneyStr_int = '';
    if (period !== -1) {
        moneyStr_int = moneyString.slice(0, period);
    } else {
        moneyStr_int = moneyString;
    }
    let result = '';
    let x = moneyStr_int.length;
    for (i = 0; i < x; i++) {
        result += moneyStr_int[i];
        if ((x - i - 1) % 3 === 0 && i !== x - 1) {
            result += ',';
        }
    }
    return result.concat(moneyString.slice(period));
}
console.log(formatMoney(1000000.012345));