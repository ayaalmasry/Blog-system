$(document).ready(function(){
    $('.filter-item').click(function(){
        const value=$(this).attr('data-filter');
        if(value=='all'){
            $('.post').show('1000');
        }else{
            $('.post').not("."+value).hide('1000');
            $('.post').filter("."+value).show('1000');
           
        }
    });
    $(".filter-item").click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    });
    $(window).on('scroll load',function(){

        if($(window).scrollTop() > 20){
            $('#header').css({
                'background':'#eee',
                
                'box-shadow':'0 .1rem .3rem #000'
            });
        }else{
            $('#header').css({
                'background':'#333',
                'box-shadow':'none'
            });
        }

    });
});



let Btn=document.querySelector('.btn');
let cur=3;
Btn.onclick=()=>{
    let box=[...document.querySelectorAll('.post-container .post')];
    for(i=cur;i<cur+3;i++){
        box[i].style.display='inline-block';
    }cur+=3;
    if(cur >= box.length){
        Btn.style.display='none';
    }
    
}