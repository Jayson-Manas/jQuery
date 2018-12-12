'use strict'
// $ defines jQuery
$(document).ready(function(){
    $("h2").click(function(){
        $("p").toggle();
    });
});
// disappearing circles

$(document).ready(function(){
    $("div").click(function(){
        $(this).hide();
    });
});

$(document).ready(function(){
    $("button").click(function(){
        $("img").animate({left: '1050px'});
    });
});