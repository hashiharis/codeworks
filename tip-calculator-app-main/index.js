import { TipCalculate, Validate } from "./script.js";

const bill = document.getElementById("bill-textBox");
const userTip = document.querySelectorAll(".tip-btn");
const customTip = document.getElementById("custom-tip");
const noOfPeople = document.getElementById("people-textBox");

bill.onblur = (event) => {
  let userBill = event.target.value;
  // console.log(userBill);
  user.billValidate(userBill);
};

userTip.forEach((button) => {
  button.addEventListener("click", (event) => {
    let tip = event.target.innerText;
    // console.log(tip);
    user.tipValidate(tip);
  });
});

customTip.onkeyup = (event) => {
  let cTip = event.target.value;
  const { key } = event;
  user.cTipValidate(cTip, key);
};

noOfPeople.onblur = (event) => {
  let nPeople = event.target.value;
  // console.log(nPeople);
  user.peopleValidate(nPeople);
};

const user = new Validate(bill, userTip, customTip, noOfPeople);
console.log(user);

const amount = new TipCalculate(bill, userTip, customTip, noOfPeople);
amount.calculateTip();
amount.displayShare();
