/*
//________________________FUNCTON________________________________
function myFunction(){
    console.log("I'm Surya Pratap Sharma ");
}
myFunction();//it helps to protect from redundancy(repeat)
function para(msg){ //parameter
     console.log(msg);    
}
para("hello World"); //argument // function call

function sum(x,y){
    let add = x+y;
    return add;
    console.log("after return"); // never execute after return type
}
t= sum(3,56);
console.log(t);
  
//_____________________Arrow Function_______________________________
let multiply = (a,b)=>{
    let mul = a*b;
    return mul;
}
cross = multiply(5,6);

const table =(num) =>{
    for(let i=1;i<=10;i++){
        console.log(`${num}*${i}=${num * i}`);
    }
}
table(11);
//___________________________________________________________________
function sentence(string){
   count = 0;
   for(let char of string){
    if(char === "a"||char === "e"||char === "i"||char === "o"||char === "u"||
        char === "A"||char === "E"||char === "I"||char === "O"||char === "U")
        {
         count++;
    }
   }
   console.log(`total number of vowels in a sentence is ${count}`);
}
sentence("Hello How are you");

//__________________________________________________________________________________
let Arrow_Sentence = (str) =>{
   count =0;
   for (let char of str){
    if(char === "a"||char === "e"||char === "i"||char === "o"||char === "u"||
        char === "A"||char === "E"||char === "I"||char === "O"||char === "U"){
          count++;
        }
   }
   console.log(count);
}
Arrow_Sentence("Good Morning To All Of You");

let arr =[1,2,3,4,5,6,7,8,9,10];
//simple function in forEach method
arr.forEach(function printval(val){
    console.log(val);
})

// Arrow function in forEach method // or Higher Order Function
let city =["Delhi","Mumbai","Bangaluru","Chennai","Lucknow","Shimla"];
city.forEach((val,idx,city)=>{
    console.log(val.toUpperCase(),idx);
});

numbers =[2,31,22,5,8,4,9,11];
let nu =(val)=>{
    var sqr = val*val;
    console.log(sqr);
}
numbers.forEach(nu);

let newArr = numbers.map((val)=>{//new array created
    return val*2;
})
console.log(newArr);
let NewArr = numbers.filter((val)=>{//new array created
    return val%2!==0;
})
console.log(NewArr)

const array1 =[1,2,13,4];//1 is prev and 2 is curr and curr increases
let output =array1.reduce((prev , curr)=>{
    if(res > curr){
        return prev;
    }else{
        return curr
    }
})
*/
//________________________problem statement_______________________________
/*
const marks =[87,67,98,92,55,89,90,91,75,93,87.79];
const score_above_90 =marks.filter((val)=>{
      if(val >90){
        return val;
      }
});
console.log(score_above_90);

let n= prompt('enter number');
let arr=[];
for(let i=0 ;i<n;i++){
    arr[i]=i+1;
}
console.log(arr)
const sum = arr.reduce((previous,current)=>{
    return previous + current;
});
console.log(sum);

const product = arr.reduce((previous,current)=>{
    return previous * current;
});
console.log(product);
*/