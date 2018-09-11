const express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 8080;

var tables = [];

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/api/tables', function (req, res) {
    res.json(tables);
});

app.post('/api/reserve', function (req, res) {
    console.log(req.body);
    var table = req.body;
    tables.push(table);
    res.json(table);

});






app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});