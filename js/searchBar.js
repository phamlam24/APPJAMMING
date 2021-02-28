$(document).ready(function () {
    $("#searchForm").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $(".features").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});