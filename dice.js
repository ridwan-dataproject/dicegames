var randomNumber1 = Math.floor(Math.random()*6) + 1;//dice 1-6

var randomImage = "dice" + randomNumber1 + ".png";//random img of dice 1-6

var randomImageSource = "images/" + randomImage; // because dice pict within the images folder

var image1 = document.querySelectorAll("img")[0]; // select all elements within img tag (1st)

image1.setAttribute("src", randomImageSource); // from image1, set attribute to randomImageSource





var randomNumber2 = Math.floor(Math.random()*6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);// select all elements within img tag (2nd)


if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "⛳Player 1 wins!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 wins!⛳";
} else {
  document.querySelector("h1").innerHTML = "🧤Draw!🧤";
}
