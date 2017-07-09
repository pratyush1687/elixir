const express=require('express');

const app=express();
app.get('/',function(res,res){
    res.send('hello world!');
})

app.listen(3001,function(){
    console.log('example app listening on port');
})
