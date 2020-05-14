var count=100;
var myVar = setInterval(myTimer, 1000);

function consumeFood() {
  var randChoice = Math.floor(Math.random()*50);
  }

function consumeMagazines() {
  var randChoice = Math.floor(Math.random() * );
}

function consumeCane() {
  var randChoice = Math.floor(Math.random() * );
}

function myTimer() {
  if (count < 1) {
   clearInterval(MyVar)
  }
  count--;
  document.getElementById("demo").innerHTML = count;
}

function GrandpaHappinessScore() {
    document.getElementById("GrandpaHappinessScore").innerHTML = GrandpaHappiness;
}
function PlayerHappinessScore() {
    document.getElementById("PlayerHappinessScore").innerHTML = PlayerHappiness;
}
window.onload = GrandpaHappinessScore();
window.onload = PlayerHappinessScore();





}
