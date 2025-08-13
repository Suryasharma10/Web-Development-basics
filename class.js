/*
const student ={
    fullName : 'surya pratap sharma',
    marks : 89,
    age : 21,
    printMarks : () => {
       console.log("marks = ",this.marks);
    },
}
//____________________creating own prototype______________________
const propety = {
    arr : [23,42,14,54,33,24,54,22],
    average : (sum,n)=>{
        let avg = sum/n;
        return avg;
    },
    tax: '10 percent',
};
const employee ={
    name : 'karan',
    age: 32,
    salery : 40000,
};
employee.__proto__ = propety;
console.log(employee.average(324,54));
console.log(employee.arr[3]);

//________________________________class___________________________________
class School{
    prayer(){
        console.log("prayer start at 7:45 am");
    }
    reccess(){
        console.log("lunch time is 12:10 pm");
    }
    leave(){
        console.log("class will end at 2:30 pm");
    }
    setTeacher(teacher){
         this.teacherName = teacher; // this.teacher is a property, teacher is name of property.
    };
};
let student_1 = new School();
student_1.setTeacher("neha");//creating seperate object property
let student_2 = new School();
*/
//________________________constructor____________________________
class happy{
    constructor(brand,type){
        console.log("finding happiness");
        this.subject = brand;
        this.type = type;
    }
    star(){
        let num1 = 23;
        let num2 = 33;
        console.log(num1+num2);
    }
}
let joy = new happy("alone","peace"); // constructor envoked by new
joy.star()
let sod = new happy();