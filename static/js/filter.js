$(document).ready(
    function () {
        $('#location-dropdown a').on('click', function () {
            let value = $(this).text();
            $("#profiles .col-md-4").filter(function () {
                $(this).toggle($(this).text().includes(value));
            });
        });
        $(function () {
            $(".dropdown a").click(function () {
                $("button:first-child").text($(this).text());
                $("button:first-child").val($(this).text());
            });
        });
    });

