//Grandpa happiness//
var GrandpaHappiness = 11;
function GrandpaHappinessScore() {
    document.getElementById("GrandpaHappinessScore").innerHTML = GrandpaHappiness;
}
function GrandpaHappinessChecker() {
    if (GrandpaHappiness < 1) {
        window.alert("Game Over");
        noloop();
    }
}
//Player balance//
var PlayerBalance = 0;
var BigCost = 3;
var MediumCost = 2;
var SmallCost = 1;
function PlayerMoneyOnload() {
    document.getElementById("PlayerBalance").innerHTML = PlayerBalance;
}
//Grandpas Requests//
var PossibleRequests = ["Cane","Magazine","Foods"];
var PossibleSizes = ["Big","Medium","Small"];
var PossibleRequestSizes;
var PossibleRequestCategory;
function GrandpasRequests() {
    PossibleRequestCategory = (Math.floor(Math.random()*PossibleRequests.length));
    PossibleRequestSizes = (Math.floor(Math.random()*PossibleSizes.length));
    var GrandpasRequest = "Please get me " + PossibleSizes[PossibleRequestSizes] +" " + PossibleRequests[PossibleRequestCategory];
    var List = document.createElement('li');
    var GrandpasRequestV2 = document.createTextNode(GrandpasRequest);
    List.appendChild(GrandpasRequestV2);
    var RequestsList = document.getElementById("RequestsBox");
    RequestsList.appendChild(List);
}
var GrandpaRequestChecker = false;
//Grandpa Submission ;)//  
/*
function SubmissionOne() {
    var InventoryItem = document.getElementsByTagName('li')[0];
    var List = document.createElement('li');
    var Matching = "Please get me " + PossibleSizes[PossibleRequestSizes] +" " + PossibleRequests[PossibleRequestCategory];
    var MatchingV2 = document.createTextNode(Matching);
    List.appendChild(MatchingV2);
    if (List == InventoryItem) {
        window.alert("good");
    }
    else {
        window.alert("bad");
    }
}
*/
//Player Job//
var Jobs = [
    {
    AssignmentName: "Fill in the blank",
    Assignment: "Humpty dumpty sat on the ____",
    Answer: "wall",
    Pay: 5
    },
    {
    AssignmentName: "Solve the Problem",
    Assignment: "1 + 1?",
    Answer: "2",
    Pay: 5
    },
    {
    AssignmentName: "Follow directions",
    Assignment: "Type the word children",
    Answer: "children",
    Pay: 5
    }
];
var PossibleAssignment;
function GiveAssignment() {
   PossibleAssignment = (Math.floor(Math.random()*Jobs.length));
   document.getElementById("QuestionCategory").innerHTML = (Jobs[PossibleAssignment].AssignmentName);
   document.getElementById("TheQuestion").innerHTML = (Jobs[PossibleAssignment].Assignment);
}
var DailyAssignmentCheck = false;
function AnswerSubmit() {
    var UserAnswer = document.getElementById("Answer").value;
    if ((UserAnswer == Jobs[PossibleAssignment].Answer) && (DailyAssignmentCheck == false)){
        document.getElementById("TheQuestion").innerHTML = "Good Job, you get 5 coins";
        PlayerBalance += Jobs[PossibleAssignment].Pay;
        document.getElementById("PlayerBalance").innerHTML = PlayerBalance;
        DailyAssignmentCheck = true;
        document.getElementById("Answer").value = "";
    }
    else if ((UserAnswer == Jobs[PossibleAssignment].Answer) && (DailyAssignmentCheck == true)){
        document.getElementById("TheQuestion").innerHTML = "You have already worked today";
        document.getElementById("Answer").value = "";
    }
    else if ((UserAnswer !== Jobs[PossibleAssignment].Answer) && (DailyAssignmentCheck == true)){
        document.getElementById("TheQuestion").innerHTML = "You have already worked today";
        document.getElementById("Answer").value = "";
    }
    else {
        document.getElementById("TheQuestion").innerHTML = "Wrong answer, you get nothing";
        DailyAssignmentCheck = true;
        document.getElementById("Answer").value = "";
    }
}
//Buying things and putting them into inventory//
var InventoryCap = 4;
//Shop Cycling//
var CaneNumber;
var MagazineNumber;
var FoodsNumber;
function DailyShopReset() {
    CaneNumber = (Math.floor(Math.random()*PossibleSizes.length));
    MagazineNumber = (Math.floor(Math.random()*PossibleSizes.length));
    FoodsNumber = (Math.floor(Math.random()*PossibleSizes.length));
    if (CaneNumber == 2) {
        document.getElementById("BigCane").style.display = "block";
        document.getElementById("MediumCane").style.display = "none";
        document.getElementById("SmallCane").style.display = "none";
    }
    if (CaneNumber == 1) {
        document.getElementById("BigCane").style.display = "none";
        document.getElementById("MediumCane").style.display = "block";
        document.getElementById("SmallCane").style.display = "none";
    }
    if (CaneNumber == 0) {
        document.getElementById("BigCane").style.display = "none";
        document.getElementById("MediumCane").style.display = "none";
        document.getElementById("SmallCane").style.display = "block";
    }
    if (MagazineNumber == 2) {
        document.getElementById("BigMagazine").style.display = "block";
        document.getElementById("MediumMagazine").style.display = "none";
        document.getElementById("SmallMagazine").style.display = "none";
    }
    if (MagazineNumber == 1) {
        document.getElementById("BigMagazine").style.display = "none";
        document.getElementById("MediumMagazine").style.display = "block";
        document.getElementById("SmallMagazine").style.display = "none";
    }
    if (MagazineNumber == 0) {
        document.getElementById("BigMagazine").style.display = "none";
        document.getElementById("MediumMagazine").style.display = "none";
        document.getElementById("SmallMagazine").style.display = "block";
    }
    if (FoodsNumber == 2) {
        document.getElementById("BigFoods").style.display = "block";
        document.getElementById("MediumFoods").style.display = "none";
        document.getElementById("SmallFoods").style.display = "none";
    }
    if (FoodsNumber == 1) {
        document.getElementById("BigFoods").style.display = "none";
        document.getElementById("MediumFoods").style.display = "block";
        document.getElementById("SmallFoods").style.display = "none";
    }
    if (FoodsNumber == 0) {
        document.getElementById("BigFoods").style.display = "none";
        document.getElementById("MediumFoods").style.display = "none";
        document.getElementById("SmallFoods").style.display = "block";
    }
}
//Store ReRoll//
function ReRollStore() {
    if (PlayerBalance > 0) {
    DailyShopReset();
    PlayerBalance -= 1;
    document.getElementById("PlayerBalance").innerHTML = PlayerBalance;
    }
}
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
    PlayerBalance -= BigCost;
    document.getElementById("PlayerBalance").innerHTML = PlayerBalance;
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
    PlayerBalance -= MediumCost;
    document.getElementById("PlayerBalance").innerHTML = PlayerBalance;
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
    PlayerBalance -= SmallCost;
    document.getElementById("PlayerBalance").innerHTML = PlayerBalance;
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
    PlayerBalance -= BigCost;
    document.getElementById("PlayerBalance").innerHTML = PlayerBalance;
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
    PlayerBalance -= MediumCost;
    document.getElementById("PlayerBalance").innerHTML = PlayerBalance;
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
    PlayerBalance -= SmallCost;
    document.getElementById("PlayerBalance").innerHTML = PlayerBalance;
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
    var Food = "Big Foods";
    var FoodV2 = document.createTextNode(Food);
    List.appendChild(FoodV2);
    var Inventory = document.getElementById("InventoryItems");
    Inventory.appendChild(List);
    PlayerBalance -= BigCost;
    document.getElementById("PlayerBalance").innerHTML = PlayerBalance;
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
    var Food = "Medium Foods";
    var FoodV2 = document.createTextNode(Food);
    List.appendChild(FoodV2);
    var Inventory = document.getElementById("InventoryItems");
    Inventory.appendChild(List);
    PlayerBalance -= MediumCost;
    document.getElementById("PlayerBalance").innerHTML = PlayerBalance;
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
    var Food = "Small Foods";
    var FoodV2 = document.createTextNode(Food);
    List.appendChild(FoodV2);
    var Inventory = document.getElementById("InventoryItems");
    Inventory.appendChild(List);
    PlayerBalance -= SmallCost;
    document.getElementById("PlayerBalance").innerHTML = PlayerBalance;
    }
}
// Day and next turn cycle //
var Day = 0;
    function NextDay() {
        Day++;
        document.getElementById("DayNumber").innerHTML = "Day " + Day;
        if (GrandpaRequestChecker == false) {
            GrandpaHappiness -= 1;
        }
        else {
            GrandpaRequestChecker == false
        }
        DailyAssignmentCheck = false;
        document.getElementById("GrandpaHappinessScore").innerHTML = GrandpaHappiness;
        GrandpaHappinessChecker();
        GrandpasRequests();
        GiveAssignment();
        DailyShopReset();
    }
//All Window Onloads//
window.onload = GrandpaHappinessScore();
window.onload = PlayerMoneyOnload();
window.onload = NextDay();
window.onload = DailyShopReset();
