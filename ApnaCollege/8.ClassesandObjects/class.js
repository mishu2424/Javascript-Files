class Car{
    constructor(brand,price=0){
        this.brand=brand;
        this.price=price;
    }
    start(){
        console.log("Start");
    }
    stop(){
        console.log("Stop");
    }
}
const kia=new Car("Kia",30000);
console.log(kia)
kia.start();

const hyundai=new Car("Hyundai");
console.log(hyundai);
