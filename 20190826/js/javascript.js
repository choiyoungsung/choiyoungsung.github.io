$(document).ready(function(){
    $('.menu').on({
        'mouseover':function(){
            $(this).children('.gnb_sub').stop().slideDown();
        },
        'mouseleave':function(){
            $(this).children('.gnb_sub').stop().slideUp();

        }
    })
    var current = 0;
    $('.slide>img').eq(0).css({'margin-left':'0px'});
    setInterval(fnImgMove,3000);
    function fnImgMove(){
        $('.slide>img').eq(current-1).css({'margin-left':'-1000px'});
        $('.slide>img').eq(current).css({'margin-left':'0px'});
        current++;
        if( current > 2){
            current=0;
        }
    }
});