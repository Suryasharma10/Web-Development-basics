//______________________Arrays________________________________
/*
let Actors =["Amir Khan","Tony Stark","Amitabh Bacchan","Ajay Devgan","spiderman"];
console.log(`${Actors},\ntype of ${typeof(Actors)}`);
let count = [12,32,44,3,67,99,75];
console.log(typeof(count),",",count[2],",",Actors[2]);  
Actors[2]="spiderman";//Arrays are mutable,but strings aren't;
natural_number =[173,18,-159,-20];
for(let j=0;j<natural_number.length;j++)
    {
    console.log(natural_number[j]);
    }
cities =["Mumbai","Unnao","Ahemdabad","Bengaluru","Pune","Lucknow"];
for (let city of cities){
    console.log(city.toUpperCase());
}
sum = 0;
for(let idx in natural_number){
    sum=sum+natural_number[idx];
}
var avg = sum/natural_number.length;
console.log(`The average of natural numbers are = ${avg}`);
//_________________________________________________________________________________
let count = [12,32,44,3,67,99,75];
item_price =[250,645,300,900,50];
item_price.push(35,23);//add at the end
item_price.shift();//delete at the start
item_price.unshift(22);//add at the start
item_price.pop()//delete at the end
console.log(item_price);
console.log("The Final price after applying offer is :")
console.log("old:new ")
for(let idx in item_price){
    offer =item_price[idx]/10;
    new_price = item_price[idx]-offer;
    console.log(`${item_price[idx]},${new_price}`);
}
 console.log(item_price.concat(count));
 t= count.slice(1,4);//return a piece of array
 console.log(t)
 num =[84,63,54,32,101,89,11];
 //splice(startidx,delcount,newElements[1....])
 num.splice(4,1,102,108,7);// change in original array 
 num.splice(1,1);
num.splice(3)// starting with the index and delete all element after it
 
//________________problem statement____________________
let Companies =["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
Companies.shift();//Companies.splice(0,1);
Companies.splice(1,1,"Ola");
Companies.push("Amazon");
console.log(Companies);
*/