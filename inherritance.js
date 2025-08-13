/*
class parent {
   constructor(name){
    this.species = "homo sapiens";
    this.name = name;
   }
    add(){
        let num1 = 34;
        let num2 = 91;
        console.log(num1+num2);
    }
    sub(){
        let num1 = 4;
        let num2 = 9;
        console.log(num1-num2);
    }
    eat(){
        console.log("eat");
    }
    work(){
        console.log("take care ");
    }
}

class child extends parent{
    constructor(name){
        super(name); // to invoke parent class constructor
        // this.name = name;
    }
    mod(){
        let num1 = 71;
        let num2 = 54;
        console.log(num1%num2);
    }
    work(){
        super.eat();
        console.log("study");
    }
}
let obj = new child("ramchandra"); // obj.sub()
// let p1 = new parent();
// console.log(obj.species)
// obj.work();//mathod overriding 
//_______________________________que_______________
Data = "secreate data"
class user{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    viewData(){
        console.log("data : ",Data);
    }
}
class admin extends user{
    constructor(name,email){
        super(name,email)
    }
    editdata(){
        Data = "new data";
    }
}
let student1 = new user("surya","abc@email.com");
let teacher = new user("Dean","dean@email.com");
let admin1 = new admin("admin","admin@email.com");
*/
/*
//_________________________error handling______________________________
let a = 60;
let b = 24;
console.log("a = ",a);
console.log("b = ",b);
console.log("a+b = ",a+b);
console.log("a-b = ",a-b);
try{
console.log("a+b = ",a+c); // error in a code
}catch(err){
    console.log(err);
}
console.log("a-b = ",a-b);
console.log("a*b = ",a*b);
try{
    console.log("a+b = ",a+s);
}catch(error){
    console.log(error); 
}

*/