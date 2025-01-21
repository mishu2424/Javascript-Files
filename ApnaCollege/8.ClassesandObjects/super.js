class person{
    constructor(name){
        this.name=name;
    }
    eat(){
        console.log(`${this.name} is eating`);
    }
    sleep(){
        console.log(`${this.name} is sleeping`);
    }
}

class Engineer extends person{
    constructor(name,salary){
        super(name);
        this.salary=salary;
    }
    work(){
        super.eat();
        super.sleep();
        console.log("Works as a web developer");
    }
}


const mishu=new Engineer("Apurbo Dey Mishu",50000);
console.log(mishu)
console.log(mishu.work())