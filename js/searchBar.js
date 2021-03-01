$(document).ready(function () {
    $("#searchForm").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $(".features").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
    $("#join-push-up").click(()=>{
        window.location.href="challengePushup.html"
    })
    $("#join-run").click(()=>{
        window.location.href="challengeRunning.html"
    })
    $("#join-jump-rope").click(()=>{
        window.location.href="challengeJumprope.html"
    })
    $("#join-crunch").click(()=>{
        window.location.href="challengeCrunch.html"
    })
});