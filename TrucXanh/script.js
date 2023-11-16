function createTable() {
    var table = document.getElementById("table");
    let cell_number = 1;

    for (let i = 0; i < 4; i++) {
        var row = table.insertRow(i);
        for (var j = 0; j < 5; j++) {
            var cell = row.insertCell(j);
            var button = document.createElement("button");
            button.innerText = String(cell_number);
            button.setAttribute("onclick", "buttonClick(this)"); // check
            cell.appendChild(button);
            cell_number++;
        }
    }
}

function buttonClick(button) { // func check
    alert("Button clicked: " + button.innerText); 
}

function formatScores(socres) {
    let socresString = String(socres);
    let result = '';
    let len_socres = socresString.length;
    for (i = 0; i < len_socres; i++) {
        result += socresString[i];
        if ((len_socres - i - 1) % 3 === 0 && i !== len_socres - 1) {
            result += ',';
        }
    }
    return result;
}

document.addEventListener('DOMContentLoaded', function () {
    createTable();
});