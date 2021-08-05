let box = 0;
let square = document.getElementsByClassName("square");
let zone = document.getElementById("zone");
let Angle = document.getElementsByClassName("Angle");
let color = ["red","blue","green","yellow","violet","orange"];
let direction = ["X(0","X(180","Y(90","Y(-90","X(90","X(-90"];
function set(){
    for(let i=0;i<6;++i){
        square[i].style.backgroundColor = color[i];
        square[i].style.transformOrigin = "20px 20px 20px";
    }
}
set();
function Add(){
    box++;;
    for(let i=0;i<6;++i){
        zone.innerHTML += `<div class="square"></div>`;
        square[(box*6)+i].style.backgroundColor = color[i];
        square[(box*6)+i].style.transformOrigin = (-(box*40)+20)+"px 20px 20px";
        if(i==2 || i==3){
            square[(box*6)+i].style.opacity = "0";
        }
    }
}
let x_suffix = ["X(","X(","Z(","Z(-","X(","X("];
let y_suffix = ["Y(","Y(-","Y(","Y(","Z(-","Z("];
let z_suffix = ["Z(","Z(-","X(-","X(","Y(","Y(-"];
function orient(){
    let x = Angle[0].value;
    let y = Angle[1].value;
    let z = Angle[2].value;
    for(let i=0;i<(box+1);++i){
        for(let j=0;j<6;++j){
            square[(i*6)+j].style.transform = "translateX("+(40*i)+"px) rotate"+direction[j]+"deg) rotate"+x_suffix[j]+x+"deg) rotate"+y_suffix[j]+y+"deg) rotate"+z_suffix[j]+z+"deg)";
        }
    }
}
setInterval(orient, 1);








