//点击音乐盒弹出播放器功能
$('._box').find('div').click(function(){
  var index = $(this).index();
  // console.log(index);
  
  $('.bigbox').find('.box1').eq(index).fadeIn(600).siblings().fadeOut(600);
  setTimeout(function(){
    $('._box').animate({
      left:-150
    },600,function(){
      $('.tiao').show();
      $('.bigbox .bigbigbg').show(600);
     });
  },600);

//实现复选框全选
  $('.bigbox').find('input').prop('checked',true);
  $('.bigbox').find('.box1').eq(index).find('#all_check').click(function(){
    var ttt = $(this).prop('checked');
    $(this).parent().parent().find('#section_check').prop('checked',ttt);
   });
//实现复选框不全选
  $('.bigbox').find('.box1').eq(index).find('#section_check').click(function(){
    var length = $('.bigbox').find('.box1').eq(index).find('#section_check').length;
    var length1 = $('.bigbox').find('.box1').eq(index).find('#section_check:checked').length;
    if (length === length1) {
      $(this).parent().parent().find('#all_check').prop('checked',true);
    }else {
      $(this).parent().parent().find('#all_check').prop('checked',false); 
    }
  });

  //实现关闭播放器功能
  $('.bigbox .box1').find('._close').eq(index).click(function(){
      $(this).parent().fadeOut(600);
      $(this).parent().parent().find('.bigbigbg').fadeOut(600);
      $(this).parent().find('.audio1 audio')[0].pause();
  });


  //实现音乐播放功能
  var isplay = true;
  $('.bigbox').find('.box1').eq(index).find('.songlist li .caozuo .bofang').click(function(){
    if(isplay){
      $(this).parent().parent().parent().parent().parent().find('.audio1 audio')[0].load();
      $(this).parent().parent().parent().parent().parent().find('.audio1 audio')[0].play();
      isplay = false;
    }else {
      $(this).parent().parent().parent().parent().parent().find('.audio1 audio')[0].pause();
      isplay = true;
    }
    
    // console.log($(this).parent().parent().parent().parent().parent().find('.audio1 audio'));
  });


 
});
//点击条弹出音乐盒功能
$('.tiao').click(function(){
 $(this).hide();
 $('._box').animate({
   left:50
 });
});

$('.bigbox').css('top','72px');
$(window).scroll(function(){
  var scrollTop = $(window)[0].pageYOffset;
  if(scrollTop < 70) {
    $('.bigbox').css('top','72px');
    // $('.bigbox').animate({
    //   top:72
    // });
  }else {
    $('.bigbox').css('top','');
    // $('.bigbox').animate({
    //   top:30
    // });
  }
});




