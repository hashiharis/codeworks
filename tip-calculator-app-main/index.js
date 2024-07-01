import { TipCalculate, Validate } from "./script.js";

const bill = document.getElementById("bill-textBox");
const userTip = document.querySelectorAll(".tip-btn");
const customTip = document.getElementById("custom-tip");
const noOfPeople = document.getElementById("people-textBox");
const resetBtn=document.getElementById("submit-btn");

// Validating userbill onblur event
bill.onblur = (event) => {
  let userBill = event.target.value;
//   billValidate is the event listener or handler
  user.billValidate(userBill);
};

// Validating default usertip options on button click event
userTip.forEach((button) => {
  button.addEventListener("click", (event) => {
    let tip = event.target.innerText;
    // tip validate is the event listener
    user.tipValidate(tip);
  });
});

// Validating custom tip onkeyup event  
customTip.onkeyup = (event) => {
  let cTip = event.target.value;
  const { key } = event;
//   Invoking the event listener
  user.cTipValidate(cTip, key);
};

// Validating no of people field onkeyup event
noOfPeople.onkeyup = (event) => {
  let nPeople = event.target.value;
//   Invoking the event listener
  user.peopleValidate(nPeople);
};


// Instantiating user object using new operator
const user = new Validate(bill, userTip, customTip, noOfPeople);
// console.log(user);

// Instantiating amount object using new operator
const amount = new TipCalculate(bill, userTip, customTip, noOfPeople);
// Invoking the calculate tip and display tip functions
amount.calculateTip();
amount.displayShare();

// Resetting all values on click of the reset button
document.addEventListener('DOMContentLoaded',(event)=>{
    resetBtn.onclick=() => {
        const resetFields = document.querySelectorAll(".reset");
        for (const field of resetFields) {
            field.value = "";
        }
        amount.displayShare();
// Clearing off the values in class properties
        if(typeof user!=='undefined' && user.Validate){
            user.bill=0;
            user.userTip=0;
            user.customTip=0;
            user.noOfPeople=0;
        }

        if(typeof amount!=='undefined' && amount.TipCalculate){
            user.bill=0;
            user.userTip=0;
            user.customTip=0;
            user.noOfPeople=0;
        }

    }
});
