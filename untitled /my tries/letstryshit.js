/**
 * Created by pratyush on 7/7/17.
 */
var filesystem=require('fs');
var todolist;


function meWrite(list,fun) {
    filesystem.writeFile('text.json',JSON.stringify(list),function (err) {
        if (err){throw err;}
        // console.log("it is done");
        myRead();
        // console.log(todolist);
    });
}
// var l=[];
// meWrite(l);

// console.log("file is not written");

function myRead() {
    filesystem.readFile('text.json', function (err, data) {
        if (err) {
            throw err;
        }
        // console.log("in read");
        // console.log(JSON.parse(data.toString()));

        //ye accha nhi lag rha ek baar poochna hai sir se
        todolist = (typeof JSON.parse(data.toString())=== typeof [1,2,3]?JSON.parse(data.toString()):[]);

    });
}




var express = require('express');

var app = express();

app.use(express.static('public_static'));

// app.get('/',function (req,res) {
//     res.send("pratyush");
// });
myRead();
// console.log(todolist);

app.get('/push',function (req,res) {
    if (req.query.todo!=''){
        todolist.push({
                "task": req.query.todo,
                "done": false
            }
        );
    };
    // console.log(todolist);
    meWrite(todolist);
    // console.log(req.query);
    res.send(todolist);

});
app.get('/change',function (req,res) {
    console.log(req.query.new+req.query.id);
    todolist[req.query.id].task=req.query.new;
    meWrite(todolist);
    res.send();
});
app.get('/toggle',function(req,res){
    todolist[req.query.id].done= ! todolist[req.query.id].done;
    meWrite(todolist);
    res.send();
});

app.get('/delete',function (req, res) {
    todolist.splice(req.query.id,1);
    meWrite(todolist);
});

app.get('/clear',function (req,res){
    todolist=[];
    meWrite(todolist);
});

app.get('/color',function (req,res) {
    res.send(colors[Math.floor(Math.random()*9)]);
});


app.listen(4000||process.env.port,function (response,err) {
    if (err){ throw err;}
    console.log("server is running on port 4000")
});

