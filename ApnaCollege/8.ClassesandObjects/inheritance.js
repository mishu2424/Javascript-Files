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
    work(){
        console.log("Works as a web developer");
    }
}

class Doctor extends person{
    work(){
        console.log("Works as a doctor");
    }
}

const mishu=new Engineer("Apurbo Dey Mishu");
console.log(mishu)
mishu.eat();
mishu.sleep();

const barsha=new Doctor("Barsha Deb");
console.log(barsha)
barsha.eat();
barsha.sleep();