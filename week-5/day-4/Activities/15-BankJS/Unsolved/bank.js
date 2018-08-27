// var fs = require("fs");


// fs.readFile(`bank.txt`, "utf-8", function (err, data) {

//     if (err) {
//         return console.log(err);
//     }
//     console.log(data);

//     var numArr = data.split(", ");
//     console.log(numArr);

//     for (let index = 0; index < numArr.length; index++) {
//         let element = numArr[index];

//     }
//     return parseFloat(element);

// });


var fs = require("fs");


// create 2 variables
var transaction = process.argv[3];
var amount = process.argv[3];

// Calculate total
if (transaction === "total") {

} else if (transaction === "wihdraw") {

} else if (transaction === "deposit") {

} else if (transaction === "lotto") {

}

function calculaterTotal() {

    fs.readFile(`bank.txt`, "utf-8", function (err, data) {

        if (err) {
            return console.log(err);
        }
        // split what is in the file
        console.log(data);
        var numArr = data.split(", ");
        // add them up

        for (let index = 0; index < numArr.length; index++) {
            const element = parseFloat(numArr[index]);
            sum += element;

        }
        console.log("you have $" + sum.toFixed(2) + " in your bank");
    })

}
