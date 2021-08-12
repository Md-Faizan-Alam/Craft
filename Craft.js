let square = document.getElementsByClassName("square");
let zone = document.getElementById("zone");
let Angle = document.getElementsByClassName("Angle");
let container = document.getElementById("container");
let O = [0,0,0];
let color = ["red", "blue", "yellow", "lime", "violet", "orange"];
let y_suffix = ["Y(","Y(","Z(-","Z(-","Y(-","Y(-"];
let z_suffix = ["Z(","Z(","Y(","Y(","X(","X("];
let x_suffix = ["X(","X(","X(","X(","Z(","Z("];
let rotateString = ["","rotateX(90deg)","rotateY(-90deg)"];
let box = -1;
let transformString = [];
function add(a,b,c){
    box++;
    O[0] += a;
    O[1] += b;
    O[2] += c;
    for(let i=0;i<6;i++){
        let s1 = Math.sign(i-1.5);
        let s2 = Math.sign(i-3.5);
        zone.innerHTML += `<div class="square"></div>`;
        square[(box*6)+i].style.backgroundColor = color[i];
        square[(box*6)+i].style.transformOrigin = 20+(s2*O[1+s2])+"px "+(20-O[1+(0.5*s1)-(0.5*s2)])+"px "+((((-1)**i)*20)+s1*O[1-(0.5*s1)-(0.5*s2)])+"px";
        transformString.push("translateX("+((-s2)*O[1+s2])+"px) translateY("+O[1+(0.5*s1)-(0.5*s2)]+"px) translateZ("+(20+O[1-(0.5*s1)-(0.5*s2)])+"px) "+rotateString[1+(0.5*s1)+(0.5*s2)]);
    }
}
add(0,0,0);
function orient(){
    let x = Angle[0].value;
    let y = Angle[1].value;
    let z = Angle[2].value;
    for(let i=0;i<(box+1);i++){
        for(let j=0;j<6;j++){
            square[(i*6)+j].style.transform = transformString[(i*6)+j]+" rotate"+x_suffix[j]+x+"deg) rotate"+y_suffix[j]+y+"deg) rotate"+z_suffix[j]+z+"deg)";
        }
    }
}
setInterval(orient,25);
