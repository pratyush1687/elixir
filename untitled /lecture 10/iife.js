var obj={};
(function(y) {
    var blur=function() {
        console.log("blur");
    };
    y.main=blur;
})(obj);
obj.main();
function hello(){
    return "hello";
}
// console.log(hello());
