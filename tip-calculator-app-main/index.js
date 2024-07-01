export class Bill{
    constructor(userBill,userTip,noOfPeople){
        this.userBill=userBill
        this.userTip=userTip
        this.noOfPeople=noOfPeople
    }
   
}

Bill.prototype.constructor=Bill;

export class Validate extends Bill{
    constructor(userBill,userTip,noOfPeople){
        super(userBill,userTip,noOfPeople);   
    }

    billAndPeopleValidate(){
        let validationBill=document.getElementById("billErrorMessage");
        let validationTip=document.getElementById("peopleErrorMessage");
       if(isNaN(this.userBill)||isNaN(this.noOfPeople)){
          validationBill.innerText="The bill field must not be empty"
          validationBill.style.color="red";
          validationTip.innerText="The no of people field must not be empty"
          validationTip.style.color="red";
       }


    }

    tipValidate(){
        let tipValidate=document.getElementById("tipValidate")
    }
    

}

export class TipCalculate extends Bill{
    constructor(userBill,userTip,noOfPeople){
        super(userBill,userTip,noOfPeople);
    }
}