var fs = require("fs");

fs.readFile(`best_things_ever.txt`, function (error, data) {

    if (error) {
        return console.log(error);
    }

    console.log(data);

    var fileArr = data.split(",");

    console.log(fileArr);
});