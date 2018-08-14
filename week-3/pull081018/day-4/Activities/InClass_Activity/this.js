console.log(this);


function foo() {
    console.log(this === window);

}
foo();

var poodle = {
    bark: function () {
        console.log(this === window);

    }
}
poodle.bark();