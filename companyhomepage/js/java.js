$(document).ready(function(){
    imgLoad();
    function imgLoad()
    {
        var liObj = $('.container ul');
        var strTag="";
        for( var i=0; i<=6; i++ )
        {
            strTag += '<li class="sec-sildeimg">';
            strTag += '<img src="secimg/sec-slideImg'+i+'.png">';
            strTag += '</li>';
        }
        liObj.html(strTag);

        var currentIndex = 0;
        var currentIndex2 = 1;
        var currentIndex3 = -1;
        var imgNum = 7;

        $('.sec-left').on('click',function(){
            if( currentIndex > currentIndex3 )
            {
                currentIndex--;
                currentIndex3--;
            }
            listImgMove();
        });
        $('.sec-right').on('click',function(){
            if( currentIndex < currentIndex2 )
            {
                currentIndex++;
                currentIndex2++;
                imgNum++;
                
                if( imgNum == 8 )
                {
                    i=0;
                    imgNum=0;
                    for( var i=0; i<=6; i++ )
                    {
                        strTag += '<li class="sec-sildeimg">';
                        strTag += '<img src="secimg/sec-slideImg'+i+'.png">';
                        strTag += '</li>';
                    }
                    liObj.html(strTag);
                }
            }
            listImgMove();
        });

        function listImgMove()
        {
            var liWidth = $('.container .sec-sildeimg').width();
            var lt = liWidth * currentIndex * (-1);
            $('.container>ul').stop().animate({left:lt});
        }
    }
    $('.sec-list2').on('click',function(){
        open('sup-page/sup-page.html');
    })
});