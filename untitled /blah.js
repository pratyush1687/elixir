function bring(){
    $(".div2").show();
}

$(function(){
    function t(){
        for (var i = 0; i <5; i++) {
            $('.div1').append('<button type="button" onclick="bring()" name="button">bring</button>');
        }
    }
    t();
})
