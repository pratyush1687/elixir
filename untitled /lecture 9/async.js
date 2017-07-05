// 'use strict'
// function getData(d,cb){
//     var x=d+1;
//     cb(d);
//     // getData(30,function(){
//     //     y=y+1;
//     //     getData("i am done"+(x+y),function(y){
//     //         console.log(y);
//     //     })
//     // })
// }
// getData(5,function(x){
//     console.log(x**2);
//     return x*x;
// })

//
// function a() {
//     // return "hello";
//     // var x=12;
//     console.log("before timer");
//     setTimeout  (b,3000);
//     console.log("after timer");
// }

//
// function b(url) {
//     // console.log(y);
//     // console.log(x);
//     console.log("i am b");
//     ajax(url,function(data){
//         console.log(data);
//     })
//     console.log("b over");
// }
// function ajax(url,callback) {
//     var k=getResponse(url);
//     if (k!=undefined) {
//         callback(k);
//     }
// }
// b("hello");
//
// function getResponse(url) {
//     // for (var i = 0; i < 1000000000; i++) { };
//     setInterval(function () {
//         console.log("Hello world");
//         return "hello world";},2000);
// }


function a(data) {

    console.log("main");
    setTimeout("b("+data+",function(){console.log("+data+");})",4000);
    c(data);

}

function b(data ,callback){
    data+=1
    callback();
}

function c(data){
    console.log(data+"in c");
}
// setTimeout(console.log("pratyush"),2000);

a(6);
