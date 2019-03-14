var picturesArray = ["images/one.jpeg", "images/two.jpeg", "images/three.jpg", "images/four.jpeg", "images/five.jpeg",
                    "images/six.jpeg", "images/seven.jpeg", "images/eight.jpeg", "images/nine.jpeg"];

var main = document.querySelector('main');

main.addEventListener('click', (event) => {
    if(event.target.className === "image") {
        event.target.src = picturesArray[getRandomPicture()];
    }

});

main.addEventListener('mouseover', (event) => {
    if(event.target.className === "image") {
        event.target.style.cursor = "pointer";
    }
});

function getRandomPicture() {
    // generate a random number
    var randNumber = Math.floor(Math.random() * picturesArray.length);
    // return generated number
    return randNumber;
}


// MEDIA QUERIES MATCH CHECK
var media = window.matchMedia("(min-width: 1024px)");
var navBarToShow = document.querySelector(".show");
var navBarToHide = document.querySelector(".hide");

function checkMedia(media) {
    if (media.matches) {
        navBarToHide.style.display = "none";
        navBarToShow.style.display = "block";
    } else {
        navBarToHide.style.display = "block";
        navBarToShow.style.display = "none";
    }
}
// Call listener function at run time
checkMedia(media);
// Attach listener function on state changes
media.addListener(checkMedia)

