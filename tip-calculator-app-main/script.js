export class Bill {
  constructor(userBill, userTip, customTip, noOfPeople) {
    this.userBill = userBill;
    this.userTip = userTip;
    this.customTip = customTip;
    this.noOfPeople = noOfPeople;
  }
}

Bill.prototype.constructor = Bill;

export class Validate extends Bill {
  constructor(userBill, userTip, customTip, noOfPeople) {
    super(userBill, userTip, customTip, noOfPeople);
    this.tipCalculator = new TipCalculate(
      userBill,
      userTip,
      customTip,
      noOfPeople
    );
  }

  // displayValues() {
  //   console.log(this.userBill, this.userTip, this.customTip, this.noOfPeople);
  // }

  billValidate(bill) {
    const billFeedback = document.getElementById("billFeedback");
    let billValue = Number(bill);
    // console.log(typeof billValue);
    this.numValidate(billValue, billFeedback);
    this.tipCalculator.userBill = billValue;
    this.tipCalculator.calculateTip(
      billValue,
      this.tipCalculator.userTip,
      this.tipCalculator.customTip,
      this.tipCalculator.noOfPeople
    );
  }

  tipValidate(tip) {
    tip = this.numToPerc(tip);
    // console.log(tip);
    this.tipCalculator.userTip = tip;
    this.tipCalculator.calculateTip(
      this.tipCalculator.userBill,
      tip,
      this.tipCalculator.customTip,
      this.tipCalculator.noOfPeople
    );
  }
  cTipValidate(val, code) {
    let customTipValue = this.numToPerc(val);
    // console.log(customTipValue);
    // console.log(code);
    let pattern = new RegExp(/([\d])+/);
    if (pattern.test(customTipValue)) {
      // console.log("yes");
      this.customTip.classList.remove("error");
    } else if (code === "Backspace") {
      // console.log("no");
      // console.log(customTipValue);
      this.customTip.classList.remove("error");
    } else {
      this.customTip.classList.add("error");
    }
    this.tipCalculator.customTip = customTipValue;
    this.tipCalculator.calculateTip(
      this.tipCalculator.userBill,
      this.tipCalculator.userTip,
      customTipValue,
      this.tipCalculator.noOfPeople
    );
  }

  peopleValidate(no) {
    const peopleFeedback = document.getElementById("peopleFeedback");
    let peopleNum = Number(no);
    this.numValidate(peopleNum, peopleFeedback);
    this.tipCalculator.noOfPeople = peopleNum;
    this.tipCalculator.calculateTip(
      this.tipCalculator.userBill,
      this.tipCalculator.userTip,
      this.tipCalculator.customTip,
      peopleNum
    );
  }

  numValidate(billVal, message) {
    if (Math.sign(billVal) === -billVal) {
      message.innerText = "Please enter a valid input";
      message.style.color = "red";
    } else {
      message.innerText = "";
    }
  }
  numToPerc(num) {
    let num_string = num.toString();
    let num_split = num_string.split("%");
    let num_only = num_split[0];
    num_only = parseFloat(num_only);
    let perc = num_only / 100;
    return perc;
    // console.log(perc);
  }
}

export class TipCalculate extends Bill {
  constructor(userBill, userTip, customTip, noOfPeople) {
    super(userBill, userTip, customTip, noOfPeople);
  }

  calculateTip(bill, uTip, cTip, nPeople) {
    // console.log(`billValue:${bill} `);
    // console.log(`tip:, ${uTip}`);
    // console.log(typeof uTip);
    // console.log(`customTipValue:, ${cTip}`);
    // console.log(`peopleNum:", ${nPeople}`);
    let tipRate;
    if (typeof uTip !== "object") {
      tipRate = uTip;
    } else {
      tipRate = cTip;
    }
    // let tipRate = cTip ? cTip : uTip;
    console.log(`Tip Rate: ${tipRate}`);
    let tipAmtPerPerson = (bill * tipRate) / nPeople;
    tipAmtPerPerson = Math.round(tipAmtPerPerson * 100) / 100;
    console.log(`Tip amount per person: ${tipAmtPerPerson}`);
    this.calculateTotal(tipAmtPerPerson, bill, nPeople);
  }

  calculateTotal(tipPerPerson, billUser, noPeople) {
    // console.log(`TipPerPerson:${tipPerPerson}`);
    // console.log(`User Bill:${billUser}`);
    // console.log(`NoofPeople:${noPeople}`);
    let totalAmtPerPerson = billUser / noPeople + tipPerPerson;
    totalAmtPerPerson = Math.round(totalAmtPerPerson * 100) / 100;

    console.log(`Total Amount Per Person:${totalAmtPerPerson}`);
    this.displayShare(tipPerPerson, totalAmtPerPerson);
  }

  displayShare = (tipAmtPerPerson = 0.0, totalAmtPerPerson = 0.0) => {

    if(isNaN(tipAmtPerPerson)&&isNaN(totalAmtPerPerson)){
      tipAmtPerPerson = 0.0;
      totalAmtPerPerson = 0.0;
    }
    let tipAmount = document.getElementById("tip-amount");
    let tipTotal = document.getElementById("tip-total");
    tipAmount.innerHTML = "$" + tipAmtPerPerson;
    tipTotal.innerHTML = "$" + totalAmtPerPerson;
  };
}
