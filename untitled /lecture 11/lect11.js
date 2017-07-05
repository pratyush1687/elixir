/**
 * Created by pratyush on 2/7/17.
 */
'use strict'
// var x={};
// window.onload=function(){
//     var y=9;
//     function dis() {
//         console.log(y);
//     }
//     x.disp=dis;
// };
//
// function t(){
//     var y=9;
//     function dis(){
//         console.log(y);
//     }
//     x.disp=dis;
// }
// t();
// x.disp();



function proto() {
        // var temp=0;
        for (var i = 0; i < 100; i++) {
            (function(a) {
                setTimeout(function(){console.log(a)},2000);
            })(i);
        }
}
proto();
//
// function time(k,time){
//     // var i=0;
//
//     if(k>time){
//         clearInterval(t);
//     };
//     var t=setTimeout(function(){
//         console.log(k);
//         time(k++,time);
//     },1000);
// }
// time(0,5);
