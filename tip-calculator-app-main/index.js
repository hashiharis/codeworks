import { TipCalculate, Validate } from "./script.js";

const bill = document.getElementById("bill-textBox");
const userTip = document.querySelectorAll(".tip-btn");
const customTip = document.getElementById("custom-tip");
const noOfPeople = document.getElementById("people-textBox");
const resetBtn=document.getElementById("submit-btn");

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

noOfPeople.onkeyup = (event) => {
  let nPeople = event.target.value;
  // console.log(nPeople);
  user.peopleValidate(nPeople);
};


const user = new Validate(bill, userTip, customTip, noOfPeople);
console.log(user);

const amount = new TipCalculate(bill, userTip, customTip, noOfPeople);
amount.calculateTip();
amount.displayShare();

document.addEventListener('DOMContentLoaded',(event)=>{
    resetBtn.onclick=() => {
        const resetFields = document.querySelectorAll(".reset");
        for (const field of resetFields) {
            field.value = "";
        }
        amount.displayShare();

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


        // console.log(user);
        // console.log(amount);

    }
});
