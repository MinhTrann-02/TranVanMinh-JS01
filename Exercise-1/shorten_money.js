function formatMoney(money) {
    let moneyString = String(money);
    let moneyLength = moneyString.length;
    let result = 0;
    let unit = '';
    if (moneyLength > 9) {
        result = money / 1000000000;
        unit = 'B';
    } else if (moneyLength > 6 && moneyLength < 10) {
        result = money / 1000000;
        unit = 'M';
    } else if (moneyLength > 3 && moneyLength < 7) {
        result = money / 1000;
        unit = 'K';
    }
    return result.toFixed(2) + unit;
}
console.log(formatMoney(1000));
console.log(formatMoney(1342222));
console.log(formatMoney(1123400000));