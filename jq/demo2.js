$(function () {
$(".site-nav-bd-l li").hover(function () {
        // over
        $(this).find('ul').css('display', 'block');
    }, function () {
        // out
       $(this).find('ul').css('display', 'none');
        
    }
);
});