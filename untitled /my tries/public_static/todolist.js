var colors=['#f8bbd0','#f1c40f','#e67e22','#e74c3c','#2980b9','#1abc9c','#C0CA33','#ce93d8','#ffcdd2','#c5cae9','#b39ddb','#c8e6c9','#fff59d','#ffb74d','#607d8b'];
var active=false;
function getcolor() {
    return colors[Math.floor(Math.random()*(colors.length-1))];
}
$(function () {
    $("#add").click(function () {
        $.get('push?todo='+$('input').val(),function(data){
            // console.log(data);
            $('input').val('');
            $("#output").html('');
            for(var i in data) {
                if (data[i].done==active) {
                    $("#output").append("<div style='background-color:" + getcolor() + "' class='valuein " + i + "'><input type='checkbox' class='checkbox' id='"
                        + i + "'" + (data[i].done ? 'checked' : '') + " onclick='toggle(id)'>" + "<input id='take' class='" +
                        i + "' value='" + data[i].task + "'><i id='trash' class='fa fa-trash ' onclick='deli(this)'></i>" + "</div>");

                }
            }
            $('#take').focusout(function () {
                console.log("i was called");
                $.get('change?new='+$(this).val()+'&id='
                    +$(this).attr('class'),function (){});
            });

        });


    });

    $("#add").click();
});

function chgdis(){
    active=!active;
    $("#add").click();
}
function deli(e) {
    console.log($(e).parent().slideToggle('slow'));
    $.get('delete?id='+$(e).prev().attr('class'));
}

function toggle(id) {
    $.get('toggle?id='+id,function () {});
    $('#'+id).parent().animate({height:'0px'},'slow');
    $('#'+id).parent().hide('slow');
}
function clearList() {
    $('#output').html('');
    $.get('clear');
}
