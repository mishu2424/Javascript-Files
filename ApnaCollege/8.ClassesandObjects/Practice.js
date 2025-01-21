// Practice:
// You are creating a website for your college. Create a class User with 2 properties, name and email. 
// It also has a method called viewData() that allows user to view website data.
// Create a new class called Admin which inherits from User. Add a new method called editData to Admin that allows it to edit website data. 
let data='Secret Info.'
class User{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    viewData(){
        console.log(data)
    }
}

class Admin extends User{
    constructor(name,email){
        // super(name,email);
        super();
        this.name=name;
        this.email=email;
    }
    editData(){
        data='New data';
    }
    adminData(){
        console.log(`Admin's name: ${this.name} and Admin's email: ${this.email}`)
    }
}

const mishu=new User("Mishu","apurbomishu34@gmail.com");
console.log(mishu.viewData());
const barsha = new Admin("barsha",'b24@gmail.com');
barsha.adminData();
barsha.editData();
console.log(mishu.viewData());