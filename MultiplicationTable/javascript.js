function createWithHtmlTable(rows, cols, highlightRow, highlightCol) {
    let string
    if (rows && cols){
        string = "<table border='1'>\n"
        for (let row = 1; row <= rows; row++){
            string += "<tr>\n"
            for (let col = 1; col <= cols; col++){
                if (col === highlightCol){
                    string += '<td class = "highlighted">'
                } else if (row === highlightRow){
                    string += '<td class = "highlighted">'
                } else {
                    string += "<td>"
                }
                string += col*row + "</td>\n"
            }
            string += "</tr>\n"
        }
        string += "</table>\n"
    } else{
        string = "Provide some inputs."
    }
    document.getElementById("output").innerHTML = string
}

function getRowsDesired(){
    return Number(document.getElementById("rows").value);
}
function getColsDesired(){
    return Number(document.getElementById("cols").value);
}
function getHighlightRow(){
    return Number(document.getElementById("highlightRow").value);
}
function getHighlightCol(){
    return Number(document.getElementById("highlightCol").value);
}