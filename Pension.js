var w = window.innerWidth;
var h = window.innerHeight;
var deposit;
var total = 0;
function setup() {
  createCanvas(w,h);
}
function add() {
  deposit = document.getElementById("money").value;
  total = deposit + parseInt(total);
  // why is the zero adding???
}
function NigerianPrince420() {
  document.getElementById("bankaccount").innerHTML = "Your Total Balance is $" + total;
  console.log(total);
}