
var database = firebase.datbase();

database.ref().on("child_added", function (snapshot) {
    var data = snapshot.val();
    var monthsDiff = moment().diff(moments(data.start), "months")

    console.log(data);

    $("table").append(
        `<tr>
            <td>${data.name}</td>
            <td>${data.role}</td>
            <td>${data.start}</td>
            <td>${monthsDiff}</td>
            <td>${data.rate}</td>
            <td>${monthsDiff * data.rate}<td>
        </tr>`
    );
});


$("button").on("click", function () {

    var employeeName = $('#employeeName').val();
    var role = $('#role').val();
    var start = $('#start').val();
    var rate = $('#rate').val();

    //clear these fields
    $("#employeeName").val("");
    $("#role").val("");
    $("#start").val("");
    $("#rate").val("");

    database.ref().push({


    });

});
