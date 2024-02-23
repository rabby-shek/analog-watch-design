var watchMin = document.getElementById("watchMin");

function updateWatchRotation() {
    var now = new Date();

    var seconds = now.getSeconds();
    var hours = now.getHours();

    // Calculate the rotation angle based on seconds
    var rotation = seconds * 6; // Each second corresponds to a 6-degree rotation
    watchMin.style.transform = "rotate(" + rotation + "deg)";

    // Bold the current hour
    for (var i = 1; i <= 12; i++) {
        var hourElement = document.getElementById("hour" + i);
        if (hourElement) {
            hourElement.style.fontWeight = (i === hours % 12) ? "bold" : "normal";
        }
    }
}
setInterval(updateWatchRotation, 1000);
updateWatchRotation();