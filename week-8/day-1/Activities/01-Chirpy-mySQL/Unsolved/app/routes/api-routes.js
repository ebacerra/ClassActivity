// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************
var express = require("express");

var app = express();
// Dependencies
// =============================================================
var connection = require("../config/connection.js");

app.get("/", function (req, res) {
  cat.all(function (data) {
    var hbsObject = {
      cats: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// Routes
// =============================================================
module.exports = function (app) {

  // Get all chirps


  // Add a chirp


};
