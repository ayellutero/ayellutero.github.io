$( document ).ready(function() {
    $('.sections-list').on('click', 'a', function () {
        $(this).addClass('active').siblings().removeClass('active')
    });
});