

function displayNextImage() {
    x = (x === images.length - 1) ? 0 : x + 1;
    document.getElementById("img").src = images[x];
}

function startTimer() {
    setInterval(displayNextImage, 5000);
}

var images = [], x = -1;
images[0] = "images/images/banner_atar.jpg";
images[1] = "images/images/250X110668568400.jpg";
images[2] = "images/images/paz_250x110103131473.jpg";