
function CharName(name, profession, gender, age, strenght, HitPoints) {
    this.name = name;
    this.profession = profession;
    this.gender = gender;
    this.age = age;
    this.strenght = strenght;
    this.HitPoints = HitPoints;
    this.PrintStats = function () {
        console.log(this.name, this.profession, this.gender, this.age)
    };

    var CharName = new Chars("Ellen", 32, "none", "female");
    var CharName = new Chars("Daniel", 38, "none", "male");

}
console.log();


















