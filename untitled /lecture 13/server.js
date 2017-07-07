var express = require('express');

var app = express();

app.use(express.static('public_static'));

// app.get('/',function (req,res) {
//     res.send("pratyush");
// });
var todolist=[];
app.get('/getData',function (req,res) {
    res.send('request handled');
});
app.get('/push',function (req,res) {
    todolist.push((req.query.todo));
    // console.log(todolist);
    // console.log(req.query);
    res.send(todolist);

});
app.get('/showcase',function(req,res){
    res.send(todolist);
});

//     res.send("print");
// });


app.listen(4000||process.env.port,function (response,err) {
    if (err){ throw err;}
    console.log("server is running on port 4000")
});

