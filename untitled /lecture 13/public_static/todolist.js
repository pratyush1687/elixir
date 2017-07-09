$(function () {
    $("#btn").click(function () {
        $.get('push?todo='+$('input').val(),function(data){
            // console.log(data);
            $('input').val('');
            $("#output").html('');
            for(var i in data){
                console.log(data[i]);
            }
        });
        // console.log('response is not recieved');

    });
    $("#btn").click();
});
