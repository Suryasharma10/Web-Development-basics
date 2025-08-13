/*
let promise = new Promise((resolve,reject)=>{
    console.log("I'm Surya Pratap Sharma");
    resolve(1)
    // reject(4)
})

function getdata(dataid,getnextdata){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data : ",dataid);
            resolve("success"); // reject("rejected");
            if(getnextdata){
                getnextdata();
            }
        },7000)
    });
}
let promise2= getdata(1,()=>{
    getdata(2)
});

console.log("searching book Ramayana....")
const books = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            
            //resolve("got the book");
            reject("network Issue")
        },3000)
    });
}
let book = books();
book.then((res)=>{
    console.log("congratulation book has founded")
})
book.catch((err)=>{
    console.log("Soory,does not find the book")
});

//______________________promise chaning_____________________
function asynfunc1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Data1")
        },3000)
    })
}
function asynfunc2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Data2")
            reject("Data 2 not find")
        },3000)
    })
}
function asynfunc3(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            //resolve("Data2")
            reject("Data 3 not find")
        },3000)
    })
}
    console.log("fetching data 1....")
asynfunc1().then((res)=>{
    console.log(res)
    console.log("fetching data 2....")
    asynfunc2().then((res)=>{
    console.log(res)
    console.log("fetching data 3....")
    asynfunc3().then((res)=>{
        console.log(res)
    })
})
});
asynfunc1().catch((err)=>{
    console.log(err)
    console.log("fetching data 2....")
    asynfunc2().catch((err)=>{
        console.log(err)
    console.log("fetching data 3....")
    asynfunc3().catch((err)=>{
        console.log(err)
    })
})
});

//__________________________another example___________________________
function getdata3(dataid){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data : ",dataid);
            resolve("success"); // reject("rejected");
        },2000)
    });
}
getdata3(12)
.then((res)=>{
    return getdata3(1);
   }).then((res)=>{
    return getdata3(76);
}).then((res)=>{
    console.log(res)
})
*/