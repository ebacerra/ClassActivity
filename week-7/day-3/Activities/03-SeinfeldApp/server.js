var express = require("express");
var bodyParser = require("body-parser");
var mysql = require("mysql");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
    database: "seinfeld"

});


app.get("/cast", function (req, res) {

    // If the main route is hit, then we initiate a SQL query to grab all records.
    // All of the resulting records are stored in the variable "result."
    connection.query("SELECT * FROM actors order by id", function (err, result) {

        // We then begin building out HTML elements for the page.
        var html = "<h1> Seinfeld </h1>";

        // Here we begin an unordered list.

        html += "<ul>";

        // We then use the retrieved records from the database to populate our HTML file.
        for (var i = 0; i < result.length; i++) {
            html += "<li><p> ID: " + result[i].id + "</p>";
            html += "<p>Name: " + result[i].name + " </p>";
            html += "<p>Coolness Points: " + result[i].coolness_points + " </p>";
            html += "<p>Attitude: " + result[i].attitude + " </p></li>";

        }

        // We close our unordered list.
        html += "</ul>";

        // Finally we send the user the HTML file we dynamically created.
        res.send(html);
    });
});


app.get("/coolness-chart", function (req, res) {

    // If the main route is hit, then we initiate a SQL query to grab all records.
    // All of the resulting records are stored in the variable "result."
    connection.query("SELECT * FROM actors order by id", function (err, result) {

        // We then begin building out HTML elements for the page.
        var html = "<h1> Seinfeld </h1>";

        // Here we begin an unordered list.

        html += "<ul>";

        // We then use the retrieved records from the database to populate our HTML file.
        for (var i = 0; i < result.length; i++) {
            html += "<li><p> ID: " + result[i].id + "</p>";
            html += "<p>Name: " + result[i].name + " </p>";
            html += "<p>Coolness Points: " + result[i].coolness_points + " </p>";
            html += "<p>Attitude: " + result[i].attitude + " </p></li>";

        }

        // We close our unordered list.
        html += "</ul>";

        // Finally we send the user the HTML file we dynamically created.
        res.send(html);
    });
});

// require("./routing/htmlRouting")(app);
// require("./routing/apiRouting")(app);


app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});