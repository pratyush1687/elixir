$(function () {
    $("#btn").click(function () {
        $.get('push?todo='+$('input').val(),function(data){
            console.log(data);
            $('input').val('');
            $("#output").html('');
            for(var i in data){
                $("#output").append(data[i]==''?'':data[i]+'<br>');
            }
        });
        console.log('response is not recieved');

    });
    $("#btn").click();
});
