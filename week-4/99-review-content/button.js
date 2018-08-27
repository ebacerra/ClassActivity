

var button = $("<button>").addClass("btn btn-success").text('Click Me');


//add the button back to the DOM
$("#lou-buttons").append(button);

// delegating the button - dinamically
$(document).on("click", ".btn-success", function () {
    //remove a class
    $(this).removeClass("btn-suceess");
    //add a new class
    $(this).addClass("btn-warning");

});

