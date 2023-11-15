function readNumber(num) {
    const obj = {
        1: 'một', 2: 'hai', 3: 'ba', 4: 'bốn', 5: 'năm', 6: 'sáu', 7: 'bảy', 8: 'tám', 9: 'chín'
    };
    let result = '';
    let numString = String(num);
    let len = numString.length;
    for (let i = 0; i < len; i++) {
        let digit = parseInt(numString[i]);
        let position = len - i;
        if (digit != 0) {
            if (digit == 1 && i == 0) {
                result += 'mười ';
            } else {
                result += obj[numString[i]];
                switch (position) {
                    case 1: result += ''; break;
                    case 2: result += ' mươi '; break;
                    case 3: result += ' trăm '; break;
                    case 4: result += ' ngàn '; break;
                    case 5: result += ' vạn '; break;
                    case 6: result += ' mươi '; break;
                }
            }
        } else {
            if (len > 3) {
                result += 'linh ';
            }
        }
    }
    return result;
}
console.log(readNumber(11));