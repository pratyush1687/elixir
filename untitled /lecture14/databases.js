/**
 * Created by pratyush on 9/7/17.
 */
var sql=require('./sql.js');
var express = require('express');
var bodyParser = require('body-parser');
var app=express();

app.use('/',express.static('public_static'));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());
var todolist =[{'task':1},{'task':2},{'task':3}];
var r0;

app.get('/todos/get',function (req, res) {
    sql.get(function(data){
        // console.log(data);
        todolist=data;
        res.send(todolist);
    });
});

app.post('/post',function (req,res) {
    sql.update(req.body.id,function(data) {
        console.log(req.body.id);
        res.send(data);
    });
});

app.listen(5000,function () {
    console.log('server is listening');
});