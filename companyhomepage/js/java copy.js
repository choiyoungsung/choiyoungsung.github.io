$(document).ready(function(){
    var currnt = 0;
    imgLoad();    
    function imgLoad()
    {
        var liObj = $('.container ul');
        var strTag="";
        for( var i=0; i<=5; i++ )
        {
            var idx = currnt+i;  //4
            if( idx > 6 ) {
                idx = idx-7;
            }
            console.log( "idx=>"+idx );
            strTag += '<li class="sec-sildeimg">';            
            strTag += '<img src="secimg/sec-slideImg'+idx+'.png">';
            strTag += '</li>';
        }
        liObj.html(strTag); 
    }    
    $('.sec-left').on('click',function(){
        currnt--;
        if( currnt < 0 ) { currnt=6; }
        imgLoad();
    });

    $('.sec-right').on('click',function(){
        currnt++;

        if( currnt >= 6 ) { currnt=0; }
        imgLoad();
    });

    $('.sec-list2').on('click',function(){
        open('sup-page/sup-page.html');
    });
    

    $('.leftbotton>div').on('click',function(){
        var divIdx = $(this).index();
        imgIdx = divIdx;
        var target = $(this);
        console.log(divIdx);
        mainimg(target,divIdx);
    });

    function mainimg(target,divIdx){
        
        $('.leftbotton>div').removeClass('greenbtn');
        $(target).addClass('greenbtn');
        
        switch( divIdx)
        {
            case 0 :
                $('.mainimg>img').attr({src:'headerimg/mainimg1.jpg',style:'background-size: cover;',width:'1900'});
                break;
            case 1 :
                $('.mainimg>img').attr({src:'headerimg/mainimg2.jpg',style:'background-size: cover;',width:'1900'});
                break;
            case 2 :
                $('.mainimg>img').attr({src:'headerimg/mainimg3.jpg',style:'background-size: cover;',width:'1900'});
                break;
            case 3 :
                $('.mainimg>img').attr({src:'headerimg/mainimg4.jpg',style:'background-size: cover;',width:'1900'});
                break;
        }
    }

    var imgIdx = 0;
    setInterval(loadImg,5000);
    function loadImg(){
        imgIdx++;
        if( imgIdx >= 4 )
        {
            imgIdx=0;
        }
        var target = $('.leftbotton>div').eq(imgIdx);
        mainimg(target,imgIdx);
    }
    
});