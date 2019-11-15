window.onload = function() {
    var x = document.getElementById("saturday-banner");
    var y = new Date();
    if (y.getDay() == 5) {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}