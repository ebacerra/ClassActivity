var inquirer = require("inquirer");

// var counterGoodGame = 0;
// var counterBadGame = 0
function Player(name, position) {
    this.name = name;
    this.position = position;
    this.defense = Math.floor((Math.random() * 10) + 1);
    this.offense = Math.floor((Math.random() * 10) + 1);


    Player.printStats = function () {
        console.log("Name: " + this.name + "/n Position: " + this.position)
    }


    var goodGame = function () {
        var randomNum = Math.floor((Math.random() * 2) + 1)
        if (randomNum === 1) {
            this.defense++;
            console.log(this.defense);
        } else {
            this.offense++;
        }
    };

    var badGame = function () {
        var randomNum = Math.floor((Math.random() * 2) + 1)
        if (randomNum === 1) {
            this.defense--;
            console.log(this.defense);
        } else {
            this.offense--;
        }
    };



};


var count = 0

if (count > 5);