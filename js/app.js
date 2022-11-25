function getTextElementValue(nameId) {
  const player = document.getElementById(nameId);
  const playerName = player.innerText;
  const list = document.querySelectorAll("li");

  if (list[0].innerText == "") {
    list[0].innerText = playerName;
  } else if (list[1].innerText == "") {
    list[1].innerText = playerName;
  } else if (list[2].innerText == "") {
    list[2].innerText = playerName;
  } else if (list[3].innerText == "") {
    list[3].innerText = playerName;
  } else if (list[4].innerText == "") {
    list[4].innerText = playerName;
  } else {
    alert("You can't choose more than 5");
  }
}

document.getElementById("button-1").addEventListener("click", function () {
  getTextElementValue("player-1");
});
document.getElementById("button-2").addEventListener("click", function () {
  getTextElementValue("player-2");
});
document.getElementById("button-3").addEventListener("click", function () {
  getTextElementValue("player-3");
});
document.getElementById("button-4").addEventListener("click", function () {
  getTextElementValue("player-4");
});
document.getElementById("button-5").addEventListener("click", function () {
  getTextElementValue("player-5");
});
document.getElementById("button-6").addEventListener("click", function () {
  getTextElementValue("player-6");
});
document.getElementById("button-7").addEventListener("click", function () {
  getTextElementValue("player-7");
});
document.getElementById("button-8").addEventListener("click", function () {
  getTextElementValue("player-8");
});
document.getElementById("button-9").addEventListener("click", function () {
  getTextElementValue("player-9");
});
