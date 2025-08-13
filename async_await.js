/*
async function hello(){
    console.log("hello");
}
n=prompt("enter number")
function api(){
    return new Promise((resolve,reject)=>{
            setTimeout(()=>{
            console.log(`wheather data is ${(10.5*i)/2}deg`)
            resolve(200)
            },2000)
    })
}
async function wheather(){
        await api();//1st call
}
wheather();

function getdata(dataid,name){
    return new Promise((resolve,reject)=>{
         setTimeout(()=>{
            console.log(`1> Identity number = ${dataid},\n2> name = ${name}`)
         resolve("success");
         },3000)
    })
}

async function datashow(){
    console.log("getting data 1...")
    await getdata(11,"rahul");//1st call
    console.log("getting data 2...")
    await getdata(42,"shreya");//2nd call
    console.log("getting data 3...")
    await getdata(89,"sumit");//3rd call
    console.log("getting data 4...")
    await getdata(73,"neha");//4th call
}
datashow(); // we have to call this function to evoke 

//______________________without calling____________________________
(async function(){
    console.log("getting data 1...")
    await getdata(101,"harshit")
    console.log("getting data 2...")
    await getdata(42,"shreya");//2nd call
    console.log("getting data 3...")
    await getdata(89,"sumit");//3rd call
    console.log("getting data 4...")
    await getdata(73,"neha");//4th call
})();
*/