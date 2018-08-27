
function adder(x, y) {
    x = parseFloat(x);
    y = parseFloat(y);

    console.log(x + y);

}
adder(process.argv[2], process.argv[3]);