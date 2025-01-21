//Searching Products
const products=[
    {id:1,name:'Iphone 15',price:1000},
    {id:2,name:'Iphone 15 pro max',price:1500},
    {id:3,name:'iphone 16 pro',price:1200},
    {id:4,name:'Iphone 16 pro max',price:1800},
    {id:5,name:'Samsung 24 Ultra',price:2000},
    {id:6,name:'Samsung 24 Ultra pro max',price:2300}
]

const matched=(products, name)=>{
    const matchedProducts=[];
    for(const product of products){
        if(product['name'].toLowerCase().includes(name.toLowerCase())){
            matchedProducts.push(product);
        }
    }
    return matchedProducts;
}
console.log(matched(products, 'Iphone 16 pro max'));