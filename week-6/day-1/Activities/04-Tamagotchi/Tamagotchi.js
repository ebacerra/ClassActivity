function DigitalPal(hungry = true, sleepy = false, bored = true, age = 0) {
    this.hungry = hungry;
    this.sleepy = sleepy;
    this.bored = bored;
    this.age = age;

    this.feed = function () {
        if (this.hungry === true) {
            console.log("that was yummy")
            this.hungry = false;
            this.sleepy = true;
        } else {
            console.log("No way! I'm full")
        }
    };
    this.sleep = function () {
        if (this.sleepy === true) {
            console.log(`Zzzzzzzz`)
            this.sleepy = false;
            this.bored = true;
            this.increaseAge();
        } else {
            console.log("No way! I'm full")
        }

    };

    this.play = function () {
        if (this.bored === true) {
            console.log(`Yay! Let's Play!`)
            this.bored = false;
            this.hungry = true;

        } else {
            console.log("Not right now. Later?")
        }
    };
    this.increaseAge = function () {
        this.age++
        console.log("Happy Birthday to me! I am " + age + " old!")
    };
};
var dog = new DigitalPal();
dog.outside = false;

dog.bark();
console.log("Woof! Woof!");

dog.goOutside = function () {
    if (this.outside === false) {
        console.log("Yay! I love the outdoors!")
        this.outdise === true;
        this.bark();
    } else {
        console.log("We're already outside though...");
    }
};

dog.goInside = function () {
    if (this.outside === true) {
        console.log("Do we have to? Fine...");
        this.outdise === false;

    } else {
        console.log("I'm already inside...");
    }
};

var cat = new DigitalPal();
cat.houseCondtion = 100;

cat.meow = function () {
    console.log("Meow! Meow!");
}
cat.destroyFurniture = function () {
    if (this.houseCondtion - 10 > 0) {
        console.log("MUAHAHAHAHA! TAKE THAT FURNITURE!");
        this.bored = false;
        this.sleepy = true;
    }
    else {
        console.log("I've destroyed everything!");
    }
};

cat.buyNewFurniture = function () {
    this.houseCondtion += 50;
    console.log("Are you sure about that?");

}