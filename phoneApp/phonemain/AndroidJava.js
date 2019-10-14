$(document).ready(function(){
    $('.sectionimg>.allimg').on('click',function(){
        var target = $(this);
        var idx = target.index();
        console.log( idx );
        var mainimg = document.getElementById('changeimg');
        var foodtext = document.getElementById('changetxt');
        mainimg.innerHTML = '<img src="wepicon/food'+ (idx+1) +'.jpg" width="164" height="106">';
        foodtext.innerHTML = '<img src="wepicon/foodtext'+ (idx+1) +'.png" width="120px" height="auto">';
        console.log( mainimg.innerHTML );
        
    });
    $('.option').on('click',function(){
        console.log('1');
        var sub = document.getElementById('subpage');
        sub.style.display = 'block';
    });
    $('#close').on('click',function(){
        console.log('1');
        var sub = document.getElementById('subpage');
        sub.style.display = 'none';
    });
})