// Prototype Class for the user inputs
export class Bill {
  constructor(userBill, userTip, customTip, noOfPeople) {
    this.userBill = userBill;
    this.userTip = userTip;
    this.customTip = customTip;
    this.noOfPeople = noOfPeople;
  }
}

Bill.prototype.constructor = Bill;

// Child class responsible for field validation
export class Validate extends Bill {
  constructor(userBill, userTip, customTip, noOfPeople) {
    // Inheriting from Parent class(Bill)
    super(userBill, userTip, customTip, noOfPeople);
    // To fetch the values in the Validate class, which are the user inputs, creating a new instance of Tip calculator class(responsible for tip calculation )
    this.tipCalculator = new TipCalculate(
      userBill,
      userTip,
      customTip,
      noOfPeople
    );
  }

// To validate bill input
  billValidate(bill){
    const billFeedback = document.getElementById("billFeedback");
    let billValue = Number(bill);
    this.numValidate(billValue, billFeedback);
    // Fetching user bill and passing it for tip calculation
    this.tipCalculator.userBill = billValue;
    this.tipCalculator.calculateTip(
      billValue,
      this.tipCalculator.userTip,
      this.tipCalculator.customTip,
      this.tipCalculator.noOfPeople
    );
  }

  // To validate tip
  tipValidate(tip) {
    // Invoking function to convert user tip into percentage values
    tip = this.numToPerc(tip);
     // Fetching user tip options and passing it for tip calculation
    this.tipCalculator.userTip = tip;
    this.tipCalculator.calculateTip(
      this.tipCalculator.userBill,
      tip,
      this.tipCalculator.customTip,
      this.tipCalculator.noOfPeople
    );
  }
  //To validate custom tip field
  cTipValidate(val, code) {
    let customTipValue = this.numToPerc(val);
    // Validating the custom field for only numbers and adding necessary error validation styles
    let pattern = new RegExp(/([\d])+/);
    if (pattern.test(customTipValue)) {
      this.customTip.classList.remove("error");
    } else if (code === "Backspace") {
      this.customTip.classList.remove("error");
    } else {
      this.customTip.classList.add("error");
    }
    // Fetching user custom tip option and passing it for tip calculation
    this.tipCalculator.customTip = customTipValue;
    this.tipCalculator.calculateTip(
      this.tipCalculator.userBill,
      this.tipCalculator.userTip,
      customTipValue,
      this.tipCalculator.noOfPeople
    );
  }

  // To validate number of people input
  peopleValidate(no) {
    const peopleFeedback = document.getElementById("peopleFeedback");
    let peopleNum = Number(no);
    this.numValidate(peopleNum, peopleFeedback);
    // Fetching number of people value and passing it for tip calculation
    this.tipCalculator.noOfPeople = peopleNum;
    this.tipCalculator.calculateTip(
      this.tipCalculator.userBill,
      this.tipCalculator.userTip,
      this.tipCalculator.customTip,
      peopleNum
    );
  }

  // To validate the number and display validation message
  numValidate(billVal, message) {
    if (Math.sign(billVal) === -billVal) {
      message.innerText = "Please enter a valid input";
      message.style.color = "red";
    } else {
      message.innerText = "";
    }
  }

  // To convert user input to percentage
  numToPerc(num) {
    let num_string = num.toString();
    let num_split = num_string.split("%");
    let num_only = num_split[0];
    num_only = parseFloat(num_only);
    let perc = num_only / 100;
    return perc;
  }
}

// Class to calculate Tip
export class TipCalculate extends Bill {
  constructor(userBill, userTip, customTip, noOfPeople) {
    // Inheriting from Parent class
    super(userBill, userTip, customTip, noOfPeople);
  }

// Calculating Tip Share per person
  calculateTip(bill, uTip, cTip, nPeople) {
    let tipRate;
    // Checking for custom tip or default tip options and assigning to tipRate
    if (typeof uTip !== "object") {
      tipRate = uTip;
    } else {
      tipRate = cTip;
    }
    // console.log(`Tip Rate: ${tipRate}`);
    // Calculation
    let tipAmtPerPerson = (bill * tipRate) / nPeople;
    tipAmtPerPerson = Math.round(tipAmtPerPerson * 100) / 100;
    // console.log(`Tip amount per person: ${tipAmtPerPerson}`);
    // Invoking Total Tip calculation method
    this.calculateTotal(tipAmtPerPerson, bill, nPeople);
  }

  // Total Tip based on number of person
  calculateTotal(tipPerPerson, billUser, noPeople) {
    // Calculation
    let totalAmtPerPerson = billUser / noPeople + tipPerPerson;
    totalAmtPerPerson = Math.round(totalAmtPerPerson * 100) / 100;

    // console.log(`Total Amount Per Person:${totalAmtPerPerson}`);
    // To display the tip amounts
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
