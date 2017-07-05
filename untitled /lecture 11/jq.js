
$(document).ready(function(){
    // console.log("document is ready");
    var gtext=$('#getText');
    var btn=$("#submit");
    var output=$("#output")
    var text=''
    btn.click(function () {
        console.log(this);
        var prevValue=gtext.val();
        output.append('<li>'+gtext.val()+'</li>');
        console.log(output.text());
        // doesnt maintain previous value erases all
        // and then replace with argument text(.text(with args))
        // .text(w/o args) gets the value of current text of an element
        // replaces the inner html of any element(.html)
    })
});

//
// function t(val) {
//     if(val==undefined){
//         console.log("no arg given");
//     }
//     else {
//         console.log(val);
//
//     }
// }
// t();
