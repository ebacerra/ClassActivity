const http = require("http");
const fs = require("fs");

// Set our port to 8080
const PORT = 8080;

// Create our server
const server = http.createServer(function (req, res) {
    const route = req.url;

    // or if(req.url === "/")
    if (route === "/") {
        displayPage("index.html", res, 200);
    } else if (route === "/foods") {
        displayPage("Fav_Food.html", res, 200);
    } else if (route === "/movies") {
        displayPage("Fav_Movie.html", res, 200);
    } else if (route === "/framework") {
        displayPage("Fav_Framework.html", res, 200);
    } else {
        displayPage("404.html", res, 404);

    }
});

const displayPage = function (page, res, status) {
    fs.readFile(__dirname + "/" + page, function (err, html) {
        res.writeHead(status, { "content-type": "text/html" });
        res.end(html);
    });
}

server.listen(PORT, function () {
    console.log(`WE IN HERE! 💀 on ${PORT}`);
});