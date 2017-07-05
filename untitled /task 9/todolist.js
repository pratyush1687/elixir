/**
 * Created by pratyush on 29/6/17.
 */
var todoList=(localStorage.getItem('todo'));
    console.log(todoList);
    if (todoList=='undefined'||!todoList){
        console.log("in if");
        todoList=[];
        localStorage.setItem('todo',JSON.stringify(todoList));
    }
    else {
        todoList=JSON.parse(todoList);
    }
var colors=['#f8bbd0','#ce93d8','#ffcdd2','#c5cae9','#b39ddb','#c8e6c9','#fff59d','#ffb74d','#607d8b']
window.onload=function () {
    var activebool=false;
    var input = document.getElementById("todo");//input bar
    var addButton = document.getElementById("add");//button
    var output= document.getElementById("output");//output div
    var clear=document.getElementById("clear");//clear button
    var active=document.getElementById("active");//active
    active.onclick=function(){
        activebool=!activebool;
        refresh();
        if (activebool){
            active.innerText='click to view incomplete tasks';
        }
        else{
            active.innerText='click to view complete tasks';
        }
    };
    refresh();

    clear.onclick=function(){
        localStorage.clear();
        output.innerHTML='';
        todoList=[];
        localStorage.setItem("todo",JSON.stringify(todoList));
        input.value='';
    };
    addButton.onclick=function(){
        var task=input.value;
        var item={
            "task" : task,
            "done" : false,
            "description":'my name is pratyush'
        };
        todoList=todoList.reverse();
        todoList.push(item);
        todoList=todoList.reverse();
        localStorage.setItem("todo",JSON.stringify(todoList));
        activebool=false;
        refresh();
        input.value='';
        console.log(window.scroll(0,1000));
    };
    function getcolor() {
            return colors[Math.floor(Math.random()*9)];
    };
    function refresh() {
        todoList=JSON.parse(localStorage.getItem('todo'));
        var toadd = '';
        output.innerHTML='';
        for(var i=0;i<todoList.length;i++){
            if (todoList[i].done==activebool) {
                output.innerHTML += "<div class='valuein " + i + "' style='background-color:"+getcolor()+";'><input type='checkbox' class='checkbox' id='"
                + i + "'" + (todoList[i].done ? 'checked' : '') + " onchange='gayab(this)'>" + "<span class='" +
                i + "'>" + todoList[i].task + "</span>"+"<i id='trash' class='fa fa-trash ' onclick='gayab2(document.getElementById("+i+"))'></i>"+"</div>"
            }
        }
    }
    input.addEventListener("keypress",function(){
        if(event.keyCode == 13) {
            addButton.click();
        }
    });
};
function gayab(el) {
    todoList[el.id].done=el.checked;
    localStorage.setItem('todo',JSON.stringify(todoList));
    var t=document.getElementsByClassName('valuein '+el.id);
    // console.log(t);
    document.getElementsByClassName(el.id)[0].style.textDecoration='line-through';
    t[0].style.animationName='deletemation';
    t[0].style.animationDuration='0.5s';
    setTimeout(function(){t[0].style.display='none'; },500);
}


function gayab2(el) {
    todoList[el.id].done=el.checked;
    todoList.splice(el.id,1);
    localStorage.setItem('todo',JSON.stringify(todoList));
    var t=document.getElementsByClassName('valuein '+el.id);
    t[0].style.display = 'none' ;
}
