function createWithHtmlTable(rows, cols, highlightRow, highlightCol) {
    let string
    if (rows && cols) {
        string = "<section class = 'table'>\n"
        for (let row = 1; row <= rows; row++) {
            string += "<div>\n"
            for (let col = 1; col <= cols; col++) {
                if (col === highlightCol) {
                    string += '<aside class = "highlighted">'
                } else if (row === highlightRow) {
                    string += '<aside class = "highlighted">'
                } else {
                    string += "<aside>"
                }
                string += col * row + "</aside>\n"
            }
            string += "</div>\n"
        }
        string += "</section>\n"
    } else {
        string = "Provide some inputs."
    }
    document.getElementById("output").innerHTML = string
}

function getRowsDesired() {
    return Number(document.getElementById("rows").value);
}

function getColsDesired() {
    return Number(document.getElementById("cols").value);
}

function getHighlightRow() {
    return Number(document.getElementById("highlightRow").value);
}

function getHighlightCol() {
    return Number(document.getElementById("highlightCol").value);
}

function getInputValueAsNumber(inputId) {
    return Number(document.getElementById(inputId).value);
}

