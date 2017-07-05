/**
 * Created by pratyush on 19/6/17.
 */
// var v = document.getElementById("try");
var out = document.getElementById("in-screen2");
var ans = document.getElementById("out-screen");
function input(id){
    var p=document.getElementById(id).innerHTML;
    if(out.innerHTML==ans.innerHTML){
        out.innerHTML="";
        ans.innerHTML="";
    }
    out.innerHTML+=p;
}

function clr(){
    out.innerHTML="";
    ans.innerHTML='';
}
var no1;
var no2;
var op;
function operation(id){
    op=document.getElementById(id).innerHTML;
    no1=out.innerHTML;
    ans.innerHTML="";
    ans.innerHTML+= no1 + " " + op;
    out.innerHTML = "";
}

function calc(){
    no2=out.innerHTML;
    if(op=="+"){
        out.innerHTML = parseInt(no2)+parseInt(no1);
    }
    else if(op=="-"){
        out.innerHTML = parseInt(no1)-parseInt(no2);
    }
    else if(op=="*"){
        out.innerHTML = parseInt(no2)*parseInt(no1);
    }
    else if(op=="/"){
        out.innerHTML = parseInt(no1)/parseInt(no2);
    }
    ans.innerHTML=out.innerHTML;
}
