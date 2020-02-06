(function ( $ ) {

    $.dashboard = function() {
        $('.az-sidebar .with-sub').off('click').on('click', function(e){
            e.preventDefault();
            $(this).parent().toggleClass('show');
            $(this).parent().siblings().removeClass('show');
        });

        $('#azSidebarToggle').off('click').on('click', function(e){
            e.preventDefault();

            if(window.matchMedia('(min-width: 992px)').matches) {
                $('body').toggleClass('az-sidebar-hide');
            } else {
                $('body').toggleClass('az-sidebar-show');
            }
        });
    };

}( jQuery ));

$(function() {
    $.dashboard();

    $(document).on('click touchstart', function(e){
        e.stopPropagation();

        // closing of sidebar menu when clicking outside of it
        if(!$(e.target).closest('.az-header-menu-icon').length) {
            var sidebarTarg = $(e.target).closest('.az-sidebar').length;
            if(!sidebarTarg) {
                $('body').removeClass('az-sidebar-show');
            }
        }
    });
});
