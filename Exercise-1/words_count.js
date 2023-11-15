function laChuHoa(kyTu) {
    return kyTu === kyTu.toUpperCase() && kyTu !== kyTu.toLowerCase();
}
function countWord(string) {
    let count = 1;
    let x = string.length;
    if (x > 0) {
        for (i = 0; i < x; i++) {
            if (laChuHoa(string[i])) {
                count++;
            }
        }
    } else {
        return count = 0;
    }
    return count;
}
console.log(countWord(""));
console.log(countWord("oneTwoThree"));