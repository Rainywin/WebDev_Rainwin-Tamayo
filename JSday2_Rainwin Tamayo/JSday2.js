/* w = width h=height l = lenght */
var l = 0;
var w = 0;
var h = 0;

w = 10;
h = 15;
l = 23;

var product = l * w * h;
console.log("Product:", product);

if (product % 2 == 0) {
    console.log("Product is an even number");
} else {
    console.log("Product is an odd number");
}

if (product % 3 == 0) {
    console.log("Divisible by 3.");
} else {
    console.log("Not a divisible by 3.");
}
