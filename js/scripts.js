// Nav open/close
function openNav () {
    let x = document.getElementById("nav");
    if (x.className === "nav") {
        x.className += " responsive";
    }
    else {
        x.className = "nav";
    }
}

// Countdown timer
let weddingDate = new Date("Oct 28, 2022 18:00:00").getTime();
let x = setInterval(function() {
    let now = new Date().getTime();
    let distance = weddingDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("timer").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "We Are Married!";
      }
    }, 1000);