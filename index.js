import { colors, rotateString, x_suffix, y_suffix, z_suffix } from "./constants.js";
import { angle, arrow, square, zone } from "./DOM.js";

const origin = [0, 0, 0];
const wholeNumbers = (n) => [...Array(n).keys()];
const transformString = [];

let box = -1;

function addSquare(color, x, y, z){
    const element = document.createElement('div');
    element.setAttribute('class','square');
    element.style.backgroundColor = color;
    element.style.transformOrigin = `${x}px ${y}px ${z}px`;
    zone.appendChild(element)
}

function add(...increments){
    box++;

    wholeNumbers(3).forEach((i)=> origin[i]+=increments[i]);

    colors.forEach((color,i)=>{
        const s1 = i-1.5 >=0 ? 1 : -1;
        const s2 = i-3.5 >=0 ? 1 : -1;
        const x = 20+(s2*origin[1+s2]);
        const y = 20-origin[1+(0.5*s1)-(0.5*s2)];
        const z = (i%2===0 ? 20 : -20)+s1*origin[1-(0.5*s1)-(0.5*s2)];
        addSquare(color, x, y, z);
        transformString.push(`translateX(${(-s2)*origin[1+s2]}px) translateY(${origin[1+(0.5*s1)-(0.5*s2)]}px) translateZ(${(20+origin[1-(0.5*s1)-(0.5*s2)])}px) ${rotateString[1+(0.5*s1)+(0.5*s2)]}`);
    })
}
add(0,0,0);

[[0,0,-40],[0,-40,0],[0,0,40],[-40,0,0],[0,40,0],[40,0,0]].forEach((coordinates,index)=>{
    arrow[index].addEventListener('click',()=>{
        add(...coordinates)
    })
})
function orient(){
    const [x,y,z] = wholeNumbers(3).map((i)=>angle[i].value);

    wholeNumbers(box+1).map((i)=>i*6).forEach((i)=>{
        wholeNumbers(6).forEach((j)=>{
            square[i+j].style.transform = `${transformString[i+j]} rotate${x_suffix[j]+x}deg) rotate${y_suffix[j]+y}deg) rotate${z_suffix[j]+z}deg)`;
        })
    })
}
setInterval(orient,25);
