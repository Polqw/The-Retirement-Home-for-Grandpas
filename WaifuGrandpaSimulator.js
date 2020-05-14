//Grandpa happiness//
var GrandpaHappiness = 100;
function GrandpaHappinessScore() {
    document.getElementById("GrandpaHappinessScore").innerHTML = GrandpaHappiness;
}
window.onload = GrandpaHappinessScore();
//Player balance//
var PlayerBalance = 100;
var BigCost = 3;
var MediumCost = 2;
var SmallCost = 1;
function PlayerMoneyOnload() {
    document.getElementById("PlayerBalance").innerHTML = PlayerBalance;
}
window.onload = PlayerMoneyOnload();
//Buying things and putting them into inventory//
var InventoryCap = 4;
//Buying Canes//
function BigCaneBuy() {
    var InventoryAmount = document.getElementById('InventoryItems').getElementsByTagName('li').length;
    if (InventoryAmount > InventoryCap) {
        window.alert("Inventory Full")
    }
    else if (PlayerBalance < BigCost ){
        window.alert("Cant Afford");
    }
    else {
    var List = document.createElement('li');
    var Cane = "Big Cane";
    var CaneV2 = document.createTextNode(Cane);
    List.appendChild(CaneV2);
    var Inventory = document.getElementById("InventoryItems");
    Inventory.appendChild(List);
    }
}
function MediumCaneBuy() {
    var InventoryAmount = document.getElementById('InventoryItems').getElementsByTagName('li').length;
    if (InventoryAmount > InventoryCap) {
        window.alert("Inventory Full")
    }
    else if (PlayerBalance < MediumCost ){
        window.alert("Cant Afford");
    }
    else {
    var List = document.createElement('li');
    var Cane = "Medium Cane";
    var CaneV2 = document.createTextNode(Cane);
    List.appendChild(CaneV2);
    var Inventory = document.getElementById("InventoryItems");
    Inventory.appendChild(List);
    }
}
function SmallCaneBuy() {
    var InventoryAmount = document.getElementById('InventoryItems').getElementsByTagName('li').length;
    if (InventoryAmount > InventoryCap) {
        window.alert("Inventory Full")
    }
    else if (PlayerBalance < SmallCost ){
        window.alert("Cant Afford");
    }
    else {
    var List = document.createElement('li');
    var Cane = "Small Cane";
    var CaneV2 = document.createTextNode(Cane);
    List.appendChild(CaneV2);
    var Inventory = document.getElementById("InventoryItems");
    Inventory.appendChild(List);
    }
}
//BuyingMagazines//
function BigMagazineBuy() {
    var InventoryAmount = document.getElementById('InventoryItems').getElementsByTagName('li').length;
    if (InventoryAmount > InventoryCap) {
        window.alert("Inventory Full")
    }
    else if (PlayerBalance < BigCost ){
        window.alert("Cant Afford");
    }
    else {
    var List = document.createElement('li');
    var Magazine = "Big Magazine";
    var MagazineV2 = document.createTextNode(Magazine);
    List.appendChild(MagazineV2);
    var Inventory = document.getElementById("InventoryItems");
    Inventory.appendChild(List);
    }
}
function MediumMagazineBuy() {
    var InventoryAmount = document.getElementById('InventoryItems').getElementsByTagName('li').length;
    if (InventoryAmount > InventoryCap) {
        window.alert("Inventory Full")
    }
    else if (PlayerBalance < MediumCost ){
        window.alert("Cant Afford");
    }
    else {
    var List = document.createElement('li');
    var Magazine = "Medium Magazine";
    var MagazineV2 = document.createTextNode(Magazine);
    List.appendChild(MagazineV2);
    var Inventory = document.getElementById("InventoryItems");
    Inventory.appendChild(List);
    }
}
function SmallMagazineBuy() {
    var InventoryAmount = document.getElementById('InventoryItems').getElementsByTagName('li').length;
    if (InventoryAmount > InventoryCap) {
        window.alert("Inventory Full")
    }
    else if (PlayerBalance < SmallCost ){
        window.alert("Cant Afford");
    }
    else {
    var List = document.createElement('li');
    var Magazine = "Small Magazine";
    var MagazineV2 = document.createTextNode(Magazine);
    List.appendChild(MagazineV2);
    var Inventory = document.getElementById("InventoryItems");
    Inventory.appendChild(List);
    }
}
function BigFoodBuy() {
    var InventoryAmount = document.getElementById('InventoryItems').getElementsByTagName('li').length;
    if (InventoryAmount > InventoryCap) {
        window.alert("Inventory Full")
    }
    else if (PlayerBalance < BigCost ){
        window.alert("Cant Afford");
    }
    else {
    var List = document.createElement('li');
    var Food = "Big Food";
    var FoodV2 = document.createTextNode(Food);
    List.appendChild(FoodV2);
    var Inventory = document.getElementById("InventoryItems");
    Inventory.appendChild(List);
    }
}
function MediumFoodBuy() {
    var InventoryAmount = document.getElementById('InventoryItems').getElementsByTagName('li').length;
    if (InventoryAmount > InventoryCap) {
        window.alert("Inventory Full")
    }
    else if (PlayerBalance < MediumCost ){
        window.alert("Cant Afford");
    }
    else {
    var List = document.createElement('li');
    var Food = "Medium Food";
    var FoodV2 = document.createTextNode(Food);
    List.appendChild(FoodV2);
    var Inventory = document.getElementById("InventoryItems");
    Inventory.appendChild(List);
    }
}
function SmallFoodBuy() {
    var InventoryAmount = document.getElementById('InventoryItems').getElementsByTagName('li').length;
    if (InventoryAmount > InventoryCap) {
        window.alert("Inventory Full")
    }
    else if (PlayerBalance < SmallCost ){
        window.alert("Cant Afford");
    }
    else {
    var List = document.createElement('li');
    var Food = "Small Food";
    var FoodV2 = document.createTextNode(Food);
    List.appendChild(FoodV2);
    var Inventory = document.getElementById("InventoryItems");
    Inventory.appendChild(List);
    }
}
/* unfinised work
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
*/
