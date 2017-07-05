/**
 * Created by pratyush on 19/6/17.
 */

    var bar=document.getElementById("input");
    var button=document.getElementById("getValue");
    // var value=document.getElementById("value");
    var  li=document.getElementById("print");
    // x="main";
    button.onclick=function () {
        // x="hello";
        var v = parseInt(bar.value);
        var d1=Date.now();
        for (var a = 1; a <v; a++) {
            if (a % 3 == 0 && a % 5 != 0) {
                li.innerHTML += "<li>" + "fis" + "</li>";
            }
            else if (a % 3 != 0 && a % 5 == 0) {
                li.innerHTML += "<li>" + "bar" + "</li>";
            }
            else if (a % 3 == 0 && a % 5 == 0) {
                li.innerHTML += "<li>" + "fisbar" + "</li>";
            }
            else {
                li.innerHTML += "<li>" + a + "</li>";
            }
        }
        var d2=Date.now();
        console.log(d2-d1);
    };
    // console.log(x);