$(document).ready(function () {
    $("button").on("click", function (event) {
        event.preventDefault();

        var studentName = $("input").val();

        // append the input to the screen
        // create tr
        var tr = $("<tr>");
        // create td
        var tr = $("<td>");
        // set the contents of the td
        td.text(studentName);
        // apppend the td to the tr
        tr.append(td);
        // append the screen
        $("table").append(tr);
        $("input").val('');



    });