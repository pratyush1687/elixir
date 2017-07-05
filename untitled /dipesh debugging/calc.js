"use strict";
window.onload = function() {
    var num9 = document.getElementById("num9");
    var num8 = document.getElementById("num8");
    var num7 = document.getElementById("num7");
    var num6 = document.getElementById("num6");
    var num5 = document.getElementById("num5");
    var num4 = document.getElementById("num4");
    var num3 = document.getElementById("num3");
    var num2 = document.getElementById("num2");
    var num1 = document.getElementById("num1");
    var num0 = document.getElementById("num0");
    var plus = document.getElementById("plus");
    var minus = document.getElementById("minus");
    var divide = document.getElementById("divide");
    var myMulti = document.getElementById("myMulti");
    var clear = document.getElementById("clear");
    var equals = document.getElementById("equals");
    var screen = document.getElementById("screen");
    var input1;
    var input2;
    var operator;
    num9.onclick = function() {
        if (input1 == undefined) {
            input1 = 9
        } else {
            input2 = 9
        }
    }
    ;
    num8.onclick = function() {
        if (input1 == undefined) {
            input1 = 8
        } else {
            input2 = 8
        }
    }
    ;
    num7.onclick = function() {
        if (input1 == undefined) {
            input1 = 7
        } else {
            input2 = 7
        }
    }
    ;
    num6.onclick = function() {
        if (input1 == undefined) {
            input1 = 6
        } else {
            input2 = 6
        }
    }
    ;
    num5.onclick = function() {
        if (input1 == undefined) {
            input1 = 5
        } else {
            input2 = 5
        }
    }
    ;
    num4.onclick = function() {
        if (input1 == undefined) {
            input1 = 4
        } else {
            input2 = 4
        }
    }
    ;
    num3.onclick = function() {
        if (input1 == undefined) {
            input1 = 3
        } else {
            input2 = 3
        }
    }
    ;
    num2.onclick = function() {
        if (input1 == undefined) {
            input1 = 2
        } else {
            input2 = 2
        }
    }
    ;
    num1.onclick = function() {
        if (input1 == undefined) {
            input1 = 1
        } else {
            input2 = 1
        }
    }
    ;
    num0.onclick = function() {
        if (input1 == undefined) {
            input1 = 0
        } else {
            input2 = 0
        }
    }
    ;
    plus.onclick = function() {
        operator = "+"
    }
    ;
    minus.onclick = function() {
        operator = "-"
    }
    ;
    myMulti.onclick = function() {
        operator = "*"
    }
    ;
    divide.onclick = function() {
        operator = "/"
    }
    ;
    function calc(i1, i2, op) {
        var answer;
        if (op == "+") {
            answer = i1 + i2
        } else if (op == "-") {
            answer = i1 - i2
        } else if (op == "*") {
            answer = i1 * i2
        } else if (op == "/") {
            answer = i1 / i2
        }
        console.log(answer)
    }
    calc(input1, input2, operator)
}
;
