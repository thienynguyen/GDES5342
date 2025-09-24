console.log("heres a multiplication table\n");
let timesTable = (to) => {
    console.log("heres a multiplication table to" + to + "\n");
    for (let i = 1; i < to + 1; i++) {
        let row = ""
        for (let j = 1; j < to + 1; j++) {
            row += i*j + "\t"
        }
        console.log(row)
    }
}
timesTable(5);
timesTable(10);