// use strict
var todolist=[];

window.onload = function () {
    todolist=JSON.parse(localStorage.getItem("todo"));
  var inputValue=document.getElementById("getValue");//input
  var addTodo= document.getElementById("done");
  var outputValue=document.getElementById("output");
  for(var i in todolist){
        if (todolist[i].done==true){
          var element=document.getElementById(i);
          element.style.textDecoration="line-through";
        }
      }
  addTodo.onclick=function(){
    var value=inputValue.value;
    todolist.push({
      "task":value,
      "done":false
    });
    outputValue.innerHTML="";
    for(var i in todolist){
      outputValue.innerHTML+="<li onclick='strikeThrough(this)'" +
          "id="+i+">"+todolist[i].task+'<br>'+"</li>"

      if (todolist[i].done==true){
        var element=document.getElementById(i);
        element.style.textDecoration="line-through";
      }
    }
    inputValue.value="";
    localStorage.setItem("todo",JSON.stringify(todolist));
  };
};

function strikeThrough(obj){
  console.log(obj.id);
  var element=document.getElementById(obj.id);
  todolist[parseInt(obj.id)].done=true;
  element.style.textDecoration="line-through";
  // localStorage.setItem("todo",JSON.stringify(sir codes));
  localStorage.setItem("todo",JSON.stringify(todolist));

}
