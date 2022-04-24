let outer_box = document.querySelector(".container");
let circle = 400;
for(let i=0; i<circle; i++){
    let CIRCLE = document.createElement("div");
    CIRCLE.classList.add("circles");

    CIRCLE.addEventListener("mouseover", ()=> before(CIRCLE));
       
    CIRCLE.addEventListener("mouseout", ()=> after(CIRCLE));
    outer_box.appendChild(CIRCLE);
}

function before(element){
const  ele = `#${Math.ceil(Math.random()* 16777215).toString(16)}`;
   element.style.background = ele;
   element.style.boxshadow = ele;
}

function after(elem){
 setTimeout(() =>{
    let el = `#222626`;
    elem.style.background = el;
    elem.style.boxshadow = el;
 }, 300);

}