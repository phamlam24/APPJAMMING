$(".fa-heart").click(function() {
    if($(this).hasClass("far")){
        $(this).removeClass("far");
        $(this).addClass("fas");
    }
    else{
        $(this).removeClass("fas");
        $(this).addClass("far");
    }
})