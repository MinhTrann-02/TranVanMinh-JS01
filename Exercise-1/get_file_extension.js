function check(file) {
    let [, type] = file.split(".");
    return type;
}
console.log(check('image.png'));