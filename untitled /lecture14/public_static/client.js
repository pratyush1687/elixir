/**
 * Created by pratyush on 9/7/17.
 */
// console.log($);
var output= $("#output");
$(function () {
   $('#btn').click(function () {
       $.get({url:'todos/get',success:function (data) {
           // output.html('');
           console.log(data);
           output.append(JSON.stringify(data));
       }});
   });
   $('#update').click(function () {
       $.post('/post',{id:3},function (data) {
           console.log('hogya');
           output.append(JSON.stringify(data));
       });
   });
});