
var currentBalance = 0;
var taxedTotal;

var chosenPhonen;
var chosenAccessory;

const taxRate = 0.0625;

//phone prices
const iphonePrice = 800.00;
const samsungPrice = 550.00;
const microsoftPrice = 70.00;

//accessory prices
const casePrice = 35.00;
const headphonesPrice = 20.00;
const protectorPrice = 19.99;
const communicatorPrice = 150.00;

//parapraph elements
var paraForBalance = document.getElementById('current-balance');
var paraForCost = document.getElementById("cost");


//button elements
var purchaseButton = document.getElementById("purchase-button");
var balanceButton = document.getElementById('balance-button');

purchaseButton.addEventListener("click", confirmPurchase);
balanceButton.addEventListener("click", addFunds);

//select elements
var phoneSelect = document.getElementById('choose-phone');
var accessorySelect = document.getElementById('choose-accessory');

phoneSelect.addEventListener("change", phoneSelectTest);
accessorySelect.addEventListener("change", accessorySelectTest);

// option elements
var balanceInput = document.getElementById('enter-balance');

var phone1 = document.getElementById('phone1').value;
var phone2 = document.getElementById('phone2').value;
var phone3 = document.getElementById('phone3').value;

var accessory1 = document.getElementById('accessory1').value;
var accessory2 = document.getElementById('accessory2').value;
var accessory3 = document.getElementById('accessory3').value;
var accessory4 = document.getElementById('accessory4').value;

//**************FUNCTIONS*****************

function addFunds() {
  currentBalance = currentBalance + Number(document.getElementById('enter-balance').value);
  if (currentBalance >= 0) {
    paraForBalance.innerHTML = "You have $" + currentBalance.toFixed(2);
  }
  else if (currentBalance < 0) {
    paraForBalance.innerHTML = "You still have no money.";
  }
  else {
    paraForBalance.innerHTML = "Please enter a valid number...REFRESH PAGE!";
  }
}

function phoneSelectTest() {
  chosenPhone = document.getElementById('choose-phone').value;

  switch (chosenPhone) {
    case phone1:
        chosenPhone = iphonePrice;
      break;
    case phone2:
        chosenPhone = samsungPrice;
      break;
    case phone3:
        chosenPhone = microsoftPrice;
      break;
    default:
        chosenPhone = 0;
  }
}

function accessorySelectTest() {
  chosenAccessory = document.getElementById('choose-accessory').value;

  switch (chosenAccessory) {
    case accessory1:
      chosenAccessory = casePrice;
      break;
    case accessory2:
      chosenAccessory = headphonesPrice;
      break;
    case accessory3:
      chosenAccessory = protectorPrice;
      break;
    case accessory4:
      chosenAccessory = communicatorPrice;
      break;
    default:
      chosenAccessory = 0;
  }
}

function confirmPurchase() {
  var totalPrice = chosenPhone + chosenAccessory;
  taxedTotal = (totalPrice * taxRate) + totalPrice;
  paraForCost.innerHTML = "Your total price is $" + taxedTotal.toFixed(2);
  updateBalance()
}

function updateBalance() {
  currentBalance = currentBalance - taxedTotal;

  if (currentBalance < 0) {
    paraForBalance.innerHTML = "You lack the sufficient funds."
    //purchaseButton.disabled = true;
  }
  else {
    paraForBalance.innerHTML = "You have $" + currentBalance.toFixed(2) + " remaining";
  }
}
