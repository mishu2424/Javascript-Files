JS Objects 
```
A JS Object is an entity having state and behavior (properties and method).
JS Objects have a special property called Prototype.It is a reference to an Object. It itself is an Object.It has some special properties and methods.
All the methods like push, pop, seal, freeze etc. come from the prototype Object.

const employee={
    calcTax(){
        console.log("tax rate is 10%);
    },
};

const employee1={
    salary:4000;
}
Now, if we want to get the methods or properties of employee, we can do so using __proto__.
employee1.__proto__=employee;
employee1.calcTax(); //we can now access employee's properties.

now, if there are multiple students, we can just inherit the methods of employee method for all students.

employee2.calcTax();
employee3.calcTax();

Now, suppose we have an object named employee with the same values like before->
const employee={
    calcTax(){
        console.log("tax rate is 10%");
    },
};
Now, if we declare another object named employee1
const employee1={
    calcTax(){
        console.log("tax rate is 20%");
    }
}
Now, using __proto__ ->
employee1.__proto__=employee;
Now, if we console log employee1.calcTax(), we will get ->
console.log("tax rate is 20%");

Hence, it means, when both Object(in our case employee1) and Prototype(in our case employee) has same methods within it, Object's method will get priority(in our case "tax rate is 20%").
```


JS Class
```
Classes are a template for creating objects. They encapsulate data with code to work on that data.
Classes are in fact "special functions", and just as you can define function expressions and function declarations, a class can be defined in two ways: a class expression or a class declaration.
// Declaration
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

// Expression; the class is anonymous but assigned to a variable
const Rectangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

// Expression; the class has its own name
const Rectangle = class Rectangle2 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

Constructor->
The constructor method is a special method for creating and initializing an object created with a class. There can only be one special method with the name "constructor" in a class. Even if we don't create any constructor ourselves, it will automatically be invoked and created while creating any new object using 'new' keyword.

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
```

Inheritance
```
Inheritance is passing down the properties and methods from parent class to the child class using extend keyword.
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
```

Method Overriding
```
When both child class and parent class have the same method, in that case if we call the method using object created from child class, the method from the child class will be executed instead of the method that is present in parent class. This is called Method Overriding.
```



Super keyword
```
Using the methods and properties of parent class directly in child class, we can use super().
When you use super() in a constructor method, you're invoking the constructor of the parent class (superclass). 
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
```