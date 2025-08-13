/*
let content = document.querySelector("#text");
content.innerText=content.innerText +" from surya"
// content.append(" from Apna College");
let divs = document.querySelectorAll(".box");
//divs[0].innerText="grapes";
//divs[1].innerText="mannn";
idx = 1;
for(di of divs){
    di.innerText =`this is div ${idx}`;
    idx++;
}

const button =document.createElement("button");
button.innerText="Click me!";
button.style.color="white";
button.style.backgroundColor="red";
document.querySelector("body").prepend(button);

//_________________________class__list__que_____________________________
let para =document.querySelector("p");
para.setAttribute("class","newClass");
para.classList.add("text");
*/
const body = document.querySelector("body");
const mode = document.querySelector("button");
mode.style.borderRadius="5px";
mode.addEventListener("click",()=>{
    console.log("clicked...")
    if(mode.innerText=="light mode"){
        mode.innerText="dark mode";
        body.style.backgroundColor="black";
        body.style.color="white"
    }
    else{
         mode.innerText="light mode";
        body.style.backgroundColor="white";
        body.style.color="black";
    }
});