/*
console.log("timer activate at 2 sec");
function timer(){
    console.log("\u{1f467}");
}
setTimeout(timer,2000)//2s = 2000ms
console.log("your emoji is loading...")

//_______________________callback________________________________
function sum(a,b){
    setTimeout(()=>{
        console.log(a+b);
    },2000);
}
function calculator(a,b,sumcallback){
    sumcallback(a,b)
}
calculator(43,54,sum);

//_______________calllback nested____________________________
function getdata(dataid,getnextdata){
    setTimeout(()=>{
        console.log("Data : ",dataid)
        if(getnextdata){
            getnextdata();
        }
    },2000);
};
console.log("getting data 1...")
getdata(1,()=>{
    console.log("getting data 2...")
    getdata(3,()=>{
        console.log("getting data 3...")
        getdata(11,()=>{
            console.log("getting data 4...")
            getdata(31)
        })
    })
});
*/