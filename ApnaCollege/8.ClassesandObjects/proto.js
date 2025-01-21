const employee={
    calcTax(){
        console.log("Tax rate is 10%");
    }
}

const employee1={
    salary:4000,
}

employee1.__proto__=employee;
console.log(employee1.calcTax());