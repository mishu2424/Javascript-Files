//discount
//if the buying quantity of the product is 100 then no discount will be applied on that.
//if the buying quantity of the product is over 100 and below 200, then will pay the normal fee for first 100 products and will get 10% 
//discount on rest of it
//if someone the buying quantity is over 200, then will pay the normal fee for first 100 and will get 20% discount on the next 100 and 40% for rest.

const discount=(quantity)=>{
    let normalPrice=10,totalCost=0;
    //if someone buys over 100.
    let usualPrice=normalPrice*100;
    if(quantity<=100){
        totalCost=normalPrice*quantity;
    }
    else if(quantity<=200){
        totalCost=(quantity-100)*(normalPrice*0.90)+usualPrice;
    }
    else{
        let moreDiscount=100*(normalPrice*0.80);
        totalCost=(quantity-200)*(normalPrice*0.60)+usualPrice+moreDiscount;
    }
    return totalCost;
}
console.log(discount(50))
console.log(discount(100))
console.log(discount(110))
console.log(discount(150))
console.log(discount(250))