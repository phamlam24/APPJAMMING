$(".fa-heart").click(function() {
    if($(this).hasClass("far")){
        $(this).removeClass("far");
        $(this).addClass("fas");
        let peopleLiked = String(parseInt($(this).siblings(".peopleLiked").text()) + 1);
        $(this).siblings(".peopleLiked").html(peopleLiked);
    }
    else{
        $(this).removeClass("fas");
        $(this).addClass("far");
        let peopleLiked = String(parseInt($(this).siblings(".peopleLiked").text()) - 1);
        $(this).siblings(".peopleLiked").html(peopleLiked);
    }
})