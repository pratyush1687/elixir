$(function () {
    // console.log("hello");
    var child1=$('.child1');
    var child2=$('.child2');
    console.log(child1.parent());
    // gives immediate parent element
    console.log(child2.parentsUntil());
    // gives parent to some defined element
    console.log(child2.siblings());
    //gives siblings of any element
})
// console.log("nohello");
