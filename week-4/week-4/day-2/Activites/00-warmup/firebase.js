

var database = firebase.database();

console.log(database);

database.ref("song/favSong").on("value", function (snapshot) {
    console.log(snapshot.val());
});

database.ref().on("value", function (snapshot) {
    console.log(snapshot.val());
    var data = snapshot.val().bio;
    console.log(data);
    $('#name').text("Name: " + data.name);
    $('#age').text("Age: " + data.age);

});
// .ref (where should we)
database.ref("song/").set({
    "favSong": "bachata"

});
database.ref("Bio/").set({
    "Name": "Ellen",
    "Age": "25"
});

$("#btn btn-succes").on('click', function () {
    var name = ("#name").val();
    var age = ("#age").val();

    database.ref('bio/').set({
        name,
        age
    });
});



