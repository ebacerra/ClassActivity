// Write code here to parse command line arguments and store them into variables
var request = require("request");

var cmd = process.argv[2];
var userInput = process.argv.slice(3).join(" ");

// Add code to print whether the user is searching for an actor or tv show, along with the name of the actor or tv show they are searching for

if (cmd === "show") {
    toFindTvShow(userInput);
    console.log(cmd + " " + userInput);

} else if (cmd === "actor") {
    toFindActor(userInput);
    console.log(cmd + " " + userInput)
}

var toFindActor = function () {
    request("http://api.tvmaze.com/shows/1/cast" + userInput, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            var info = JSON.parse(body)[0];
            var name = info.show.name;
            var rating = info.show.rating.average;
            var genre = info.show.genres.join(',');
            var network = info.show.network.name;
            var summary = info.show.summary;

            console.log("Show name: " + name + "\n" + "Show rating: " + rating + "\n" + "Show genre: " + genre + "\n" + "Show network: " + network + "\n" + "Show summary: " + summary);
        }
    });
};

var toFindTvShow = function () {
    request("http://api.tvmaze.com/shows/1/episodes" + userInput, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            console.log(JSON.parse(body).Year);
        }
    });
};



