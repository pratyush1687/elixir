/**
 * Created by pratyush on 19/6/17.
 */
var button=document.getElementById("getValue");
// hello();
// function hello(){
//      console.log("hello World!");
// };

//hoisting- read fn in first pass the func there fore gets locates above in script
var foo="bar";

function foo1(){
    var fizz="buzz";
    foo="bro";
}
foo1();
console.log(foo);