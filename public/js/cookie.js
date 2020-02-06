(function ( $ ) {

    $.cookie = function() {
        console.log('cookie', new Date().getTime())
    };

}( jQuery ));

$(function() {
    $.cookie();
});
