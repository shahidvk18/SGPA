let form =document.forms['SGPA'];
let tc=form.tc;
let math=form.math;
let de=form.de;
let dsa=form.dsa;
let oops=form.oops;
let se=form.se;
let dsaL=form.dsaL;
let oopsL=form.oopsL;
let seL=form.seL;
let deL=form.deL;
let it=form.it;
let deca=form.deca;

let sg=document.getElementById("sg");

let TC;
let Math;
let DE;
let DSA;
let OOPS;
let SE;
let DSAL;
let OOPSL;
let SEL;
let DEL;
let IT;
let DECA;
let SGPA;

let total=0;

tc.onchange=function(){
    TC= +this.value;
}
math.onchange=function(){
    Math= +this.value;
}
de.onchange=function(){
   DE = +this.value;
}
dsa.onchange=function(){
    DSA= +this.value;
}
oops.onchange=function(){
    OOPS= +this.value;
}
se.onchange=function(){
    SE= +this.value;
}
dsaL.onchange=function(){
    DSAL= +this.value;
}
oopsL.onchange=function(){
    OOPSL= +this.value;
}
seL.onchange=function(){
    SEL= +this.value;
}
deL.onchange=function(){
    DEL= +this.value;
}
it.onchange=function(){
    IT= +this.value;
}
deca.onchange=function(){
    DECA= +this.value;
}

form.onsubmit=function(e){
    e.preventDefault(); 
    SGPA =( (TC*2) + (Math*3) + (SE*3) +(DSA*3) + (OOPS*3) + (DE*3) + (IT*1) + (DECA*.5) + (SEL*1.5) + (DEL*1.5) + (OOPSL * 1.5) + (SEL *1.5) ) /24.5;

    SGPA.toFixed(2);
    sg.textContent=`Your SGPA ${ SGPA.toFixed(2)}`;

}

