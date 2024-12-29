//Find the cheapest phone from an array of objects.
const mobiles=[
    {name:'Samsung',price:3000},
    {name:'Iphone',price:2000},
    {name:'Google Pixel',price:1000},
    {name:'OnePlus',price:3300},
];

const cheapest=mobiles.reduce((prev,curr)=>{
    return prev.price < curr.price ? prev : curr;  
});
console.log('Cheapest phone: ',cheapest.name);
//another way to do this
const cheapesPhone=(mobiles)=>{
    let cheapest=mobiles[0];
    for(let item of mobiles){
        if(item['price'] < cheapest.price){
            cheapest=item;
        }
    }
    console.log('Cheapest phone: ',cheapest.name);
}
cheapesPhone(mobiles);

//Total value of mobiles
const sum=(mobiles)=>{
    let total=0;
    for(let val of mobiles){
        total+=val.price;
    }
    console.log('Total: ',total)
}
sum(mobiles)

//another way
const sum2=mobiles.reduce((prev,curr)=>{
    return prev+curr.price;
},0)
console.log('Sum: ',sum2)


//total cost
const phones=[
    {name:'Samsung',price:3000,quantity:5},
    {name:'Iphone',price:2000,quantity:3},
    {name:'Google Pixel',price:1000,quantity:4},
    {name:'OnePlus',price:3300,quantity:1},
];
const totalCost=phones.reduce((prev,curr)=>{
    return prev+curr.price*curr.quantity;
},0)
console.log('Total Cost: ',totalCost)