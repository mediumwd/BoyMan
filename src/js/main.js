$( document ).ready(function() {
    $('.tab').hide();
    //hiding tabs
    
    $('.title-nav a').click(function(ev){
        //to remove missclicks
        if ($(ev.target).data('id') == undefined) {
            $('.title-nav a').removeClass("active");
            $(ev.target.parentElement).addClass("active");
            var i = $(ev.target.parentElement).data("id");
            $('.tab').hide();
            $('.tab'+i).show();
        }
    });
    //default open tab to show
    $('#default-open-tab').show();
    
    //hash function updated
    $(window).on('hashchange', function() {
        var old;
        $('.case').mouseenter(function(){
            old = $( this ).css("background-color");
            $(this).css("background-color", window.location.hash);
        });  
        $('.case').mouseleave(function(){
            $(this).css("background-color", old);
        });    
    });
});
