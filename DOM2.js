/* 
let div = document.querySelector("div");
console.log(div);
let id = div.getAttribute("class");
console.log(id);
let ad = div.getAttribute("name");
 console.log(ad);
let aad = div.getAttribute("style");
console.log(aad);
let msg = document.querySelector("p");
console.log(msg.getAttribute("placeholder"));
msg.setAttribute("class","NewClass");//change the name of a attriute section
console.log(msg)
_______________________________________________________________________
let xyz = document.querySelector(".xyz");
console.log(xyz);
xyz.style.color="purple";
xyz.style.fontSize="30px"
xyz.style.background="yellow";
xyz.style.visibility="none";

//______________________Create Element___________________________
let add_after = document.querySelector(".box");
let add_starting = document.querySelector(".new");
let xyz = document.querySelector(".china");


let nwbtn = document.createElement("button");
nwbtn.innerText="click me !";
nwbtn.style.cursor="pointer";
add_after.after(nwbtn);

let para = document.createElement("p");
para.innerText="Welcome to MS world !";
nwbtn.style.border="2px dashed blue";
add_starting.prepend(para);

let add_before = document.createElement("div1")
add_before.innerText="new box";
add_before.style.border="2px solid gray";
add_before.style.height="100px";
add_before.style.width="100px";
add_before.style.display="flex";
add_before.style.justifyContent="center";
add_before.style.alignItems="center";
add_before.style.fontWeight="bolder";
add_before.style.backgroundColor="black";
add_before.style.color="white";
add_after.before(add_before);

let heading = document.createElement("h1");
heading.innerHTML="<i>Demo Page of JavaScript</i>";
heading.style.color="black";
document.querySelector("body").prepend(heading);

_________________________remove_elements_____________________________
nwbtn.remove()
heading.remove()
add_before.remove()
add_after.remove()
para.remove()
add_starting.remove()
xyz.remove()
*/