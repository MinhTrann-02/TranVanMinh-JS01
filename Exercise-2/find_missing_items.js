function missNumber(arr1, arr2) {
    let result = '';
    let x = 0;
    let len1 = arr1.length;
    let len2 = arr2.length;
    for (i = 0; i < len1; i++) {
        for (j = 0; j < len2; j++) {
            if (arr1[i] == arr2[j]) {
                x++;
            }
        }
        if (x == 0) {
            result += arr1[i] + ' ';
        }
        x = 0;
    }
    return result;
}
console.log(missNumber([1, 2, 3, 4, 5], [1, 10, 7, 9]));