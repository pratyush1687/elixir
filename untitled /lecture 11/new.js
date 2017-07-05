$(function(){
    var list=[];
    var box=$('.box');
    var btn=$('#button');
    btn.click(function () {
        // box.fadeOut(1000);
        box.animate({left:'250px',display:'none'});
        // box.hide(1000);
        // box.fadeOut(1000);
    });
    var query='amitabh+bachchan';
        // play with this after ui
        // $.ajax({url:'https://loklak.org/api/search.json?timezoneOffset=-330&q='+query,success:function(result){
        // for (var i = 0; i < result.statuses.length; i++) {
        //     list.push(result.statuses[i]);
        // }

        // printText(list);
        }});
})
