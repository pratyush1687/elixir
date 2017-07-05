
    var list=[];
    var URL='https://loklak.org/api/search.json?timezoneOffset=-330&limit=1000&count=1000&q=';
    var initout=$('.intext');
    var query='amitabh bachchan';
    var button=$('#basic-addon2');
    var input=$(".form-control");
    // var cross=$("#cross");
    // var output=$("#output");
    // function bringit(id){
    //     // var cross=$("#cross");
    //     // var output=$("#output");
    //     // inneficient shit but works :P
    //     initout.append('<i class="fa fa-times-circle-o fa-2x" onclick="printinitText()" style="cursor:pointer"></i><div class="output container col-lg-9"><div class="row justify-content-center"><div class="card card3 col-lg-4" style="width: 20rem;"></div><div class="card card2 col-lg-7" style="width: 20rem;"></div></div></div></div>');
    //
    //     // trying somemthing better;
    //     // this doesnt seem to work
    // };
$(function(){
    // bringit(1);



    // function printinitText() {
    //     initout.html('');
    //     bringit(0);
    //     for (var i in list) {
    //         // console.log(list[i]);
    //         initout.append('<div style="text-align:center" class="card col-lg-3" style="width: 20rem;"><img class="card-img-top" style="width:10vh;margin-left:8.5vw;margin-top:1vh;border-radius:50%;" src='+list[i].user.profile_image_url_https+' alt="Card image cap"><div class="card-block"><h4 class="card-title">'+list[i].user.name+'</h4><p class="card-text">@'+list[i].user.screen_name+'</p><a href="#" class="btn btn-primary" style="cursor:pointer" onclick="bringit()" id='+i+'>view post</a></div></div>');
    //     }
    // };


    button.click(function(){
        query=input.val();
        if(query!=''){
        $.get({url:URL+query.split(" ").join('+'),"dataType":"jsonp",success:function(result){
            list=result.statuses;
            console.log("in ajax");
            printinitText();
        }});
        initout.html('');
        initout.append("</p>please wait while the results are loading......<p><div id='box'></div>");

        }
        else{
            initout.html('');
            initout.append("please enter some text before running query")
        }
    });
    input.keypress(function (e) {
        var key = e.which;
        if(key == 13)  // the enter key code
        {
            button.click();
            return false;
        }
    });
});
function printinitText() {
    initout.html('');
    for (var i in list) {
        console.log(list[i]);
        initout.append('<div style="text-align:center" class="card col-lg-3" style="width: 20rem;"><img class="card-img-top" style="width:10vh;margin-left:8.5vw;margin-top:1vh;border-radius:50%;" src='+list[i].user.profile_image_url_https+' alt="Card image cap"><div class="card-block"><h4 class="card-title">'+list[i].user.name+'</h4><p class="card-text">@'+list[i].user.screen_name+'</p><a href="#" class="btn btn-primary" style="cursor:pointer" onclick="bringit(id)" id='+i+'>view post</a></div></div>');
    }
};

function bringit(id){
        // inneficient shit but works :P
        // console.log(list[id].user.profile_image_url_https);
        var obj=list[id];
        initout.append('<i class="fa fa-times-circle-o fa-2x" style="cursor:pointer" onclick="printinitText()"></i><div id="output" class="output container col-lg-9"><div class="row justify-content-center"><div class="card card3 col-lg-4"><div class="image-bg"><img class="my-image" src="'+obj.user.profile_image_url_https+'" alt="profile picture"></div><h2 class="name-head">'+obj.user.name+'</h2><h4 class="name-head tag">@'+obj.user.screen_name+'</h4><a href="https://twitter.com/'+obj.user.screen_name+'" target="_blank"><button type="button" name="button"><i class="fa fa-twitter"></i> visit profile</button></a></div>'+
        '<div class="card card2 col-lg-7"><h4><small>@'+obj.user.screen_name+'</small></h4><h2>'+obj.text+'</h2><center>'+
            '<a href="'+obj.link+'" target="_blank"><button type="button" name="button">view the tweet</button></a></center></div></div></div></div>');



        // trying somemthing better;
};
