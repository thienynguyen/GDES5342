function createWithHtmlTable(rows, cols){
    let string
    if (rows && cols){
        string = "<table border='1'>\n"
        for (let row = 1; row <= rows; row++){
            string += "<tr>\n"
            for (let col = 1; col <= cols; col++){
                string += "<td style=\'min-width: 40px; text-align: center\'>"
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
getRowsDesired();
getColsDesired();