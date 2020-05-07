var counter=setInterval(timer, 1000); //1000 will  run it every 1 second
var count=100;


var food = {
  dessert: [
    "cheesecake",
    "churro",
    "ice cream"
    ];
  meal: [
    "hamburger",
    "hot dog",
    "spaghetti"
    ];
  snack: [
    "doritos",
    "cheetos",
    "cookies"
    ];
}

var magazines = {
  finance: [
    "stock market",
    "bank account",
    "how to save at 69"
    ];
  entertainment: [
    "sports",
    "movies",
    "celebrities"
    ];
}:

var cane = {
  wooden: [
    "oak",
    "spruce",
    "koa"
    ];
  plastic: [
    "foldable",
    "umbrella",
    ];
};


var inventory = [];

function store() {
	location.href(store.html)
}
function consumeFood() {
  var randType = Math.floor(Math.random(food.length));
  var randChoice = Math.floor(Math.random(food[randType].length));
  prompt("I would like some " + food[randType[randChoice]])
  if () {
  
  }
}

function consumeMagazines() {
  var randType = Math.floor(Math.random(magazines.length));
  var randChoice = Math.floor(Math.random(magazines[randType].length));
	prompt("I would like some " + magazines[randType[randChoice]])
  if () {
  
  }
}

function consumeCane() {
  var randType = Math.floor(Math.random(cane.length));
  var randChoice = Math.floor(Math.random(cane[randType].length));
	prompt("I would like some " + cane[randType[randChoice]])
  if () {
  
  }
}

function happyCounter()
{
  count=count-1;
  if (count <= 0)
  {
     clearInterval(counter);
     //counter ended, do something here
     return;
  }

  //Do code for showing the number of seconds here
}


}
