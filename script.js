function navbar() {
  var x = document.getElementById("mynavbar");
  if (x.className === "mynavbar") {
    x.className += " responsive";
  } else {
    x.className = "mynavbar";
  }
}
