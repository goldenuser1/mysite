$(document).ready(function(){
    $(".has-submenu").hover(
        function() {
            $(this).find(".submenu").stop(true, true).slideDown(200);
        },
        function() {
            $(this).find(".submenu").stop(true, true).slideUp(200);
        }
    );
});
