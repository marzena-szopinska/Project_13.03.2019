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
    // generate a random number between 1 and the length of the picture array
    var randNumber = Math.floor(Math.random() * picturesArray.length);
    // return generated number
    return randNumber;
}

