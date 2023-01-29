var random_1 = Math.floor(Math.random() * 6) + 1;
var random_2 = Math.floor(Math.random() * 6) + 1;
var dice_name = "dice" + random_1 + ".png";
var dice_place = "images/" + dice_name;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", dice_place);
// var random_2 = Math.floor(Math.random() * 6) + 1;

var dice_name2 = "dice" + random_2 + ".png";
var dice_place2 = "images/" + dice_name2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", dice_place2);

if (random_2 > random_1) {
    document.querySelector("h1").innerHTML = "PLAYER 2🏆🏆🏆 WINS THE GAME";
} else if (random_1 == random_2) {
    document.querySelector("h1").innerHTML = "MATCH TIE";
} else {
    document.querySelector("h1").innerHTML = "PLAYER 1 🏆🏆🏆 WINS THE GAME";

}
function myFunction() {
    document.querySelector("h1").innerHTML = "Refresh Me";
}
function myFunction2() {
    location.reload();
}