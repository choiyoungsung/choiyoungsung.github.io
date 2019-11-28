$(function(){
    $('#modal #close').click (function(){
        $('#modal').fadeOut();
    });
    $('#modal2 #close').click (function(){
        $('#modal2').fadeOut();
    });
    $('#modal3 #close').click (function(){
        $('#modal3').fadeOut();
    });
    $('#smallbox1').click (function(){
        $('#modal').fadeIn();
    });
    $('#smallbox2').click (function(){
        $('#modal2').fadeIn();
    });
    $('#smallbox3').click (function(){
        $('#modal3').fadeIn();
    });
});