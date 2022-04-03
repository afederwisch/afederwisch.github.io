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