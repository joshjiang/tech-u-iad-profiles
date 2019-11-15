$(document).ready(
    function () {
        $('#location-dropdown a').on('click', function () {
            let value = $(this).text();
            $("#profiles .col-md-4").filter(function () {
                $(this).toggle($(this).text().includes(value));
            });
        });
        $(function () {
            $('#role-dropdown a').on('click', function () {
                let value = $(this).text();
                $("#profiles .col-md-4").filter(function () {
                    $(this).toggle($(this).text().includes(value));
                });
            });
        });
        $(function () {
            $("#location-dropdown a").click(function () {
                $("#location-dropdown > button").text($(this).text());
                $("#location-dropdown > button").val($(this).text());
            });
        });
        $(function () {
            $("#role-dropdown a").click(function () {
                $("#role-dropdown > button").text($(this).text());
                $("#role-dropdown > button").val($(this).text());
            });
        });
    });

