// 实现头部输入框光标移入文字消失功能
$('.right_top .music_input').click(function(){
    $(this).val('');
});

//实现移入登录出现盒子功能
$('.right_top .eewaibox').mouseenter(function(){
  $('.right_top .ewaibox').css('display','block');
});
$('.right_top .eewaibox').mouseleave(function(){
  $('.right_top .ewaibox').css('display','');
});

//实现广告栏下载框背景色变化功能
$('.download_box a').mouseenter(function(){
  $(this).css('opacity',0);
});
$('.download_box a').mouseleave(function(){
  $(this).css('opacity',1);
});


//实现广告栏切换效果
var index = 0;
$('.jiantou .jt_right').click(function(){
  $('.banner .ul1 li').eq(index).parent().parent().parent().removeClass('banner'+index);
  index++;
  if(index === $('.banner .ul1 li').length) {
    index = 0;
  }
  $('.banner .ul1 li').eq(index).show().siblings().hide();
  $('.banner .ul1 li').eq(index).parent().parent().parent().addClass('banner'+index);
  $('.dotted li').eq(index).css('background-color','#b90b0b').siblings().css('background-color','');
});


$('.jiantou .jt_left').click(function(){
  $('.banner .ul1 li').eq(index).parent().parent().parent().removeClass('banner'+index);
  index--;
  if(index === -1) {
    index = $('.banner .ul1 li').length-1;
  }
  $('.banner .ul1 li').eq(index).show().siblings().hide();
  $('.banner .ul1 li').eq(index).parent().parent().parent().addClass('banner'+index);
  $('.dotted li').eq(index).css('background-color','#b90b0b').siblings().css('background-color','');
});

$('.dotted li').eq(0).css('background-color','#b90b0b').siblings().css('background-color','');
var intervalId;
function autoPlay(){
  intervalId = setInterval(function(){
    $('.banner .ul1 li').eq(index).parent().parent().parent().removeClass('banner'+index);
    index++;
    if(index === $('.banner .ul1 li').length) {
      index = 0;
    }
    $('.banner .ul1 li').eq(index).fadeIn().siblings().fadeOut();
    $('.banner .ul1 li').eq(index).parent().parent().parent().addClass('banner'+index);
    $('.dotted li').eq(index).css('background-color','#b90b0b').siblings().css('background-color','');
    // console.log( $('.dotted li'));
  },2000);
}
autoPlay();
$('.banner').mouseover(function(){
  clearInterval(intervalId);
});
$('.banner').mouseout(function(){
  autoPlay();
});

$('.dotted li').click(function(){
  var index1 = $(this).index();
  $('.banner .ul1 li').eq(index1).show().siblings().hide();
  $(this).css('background-color','#b90b0b').siblings().css('background-color','');
  index = index1;
});


//实现专辑轮播效果
var index2 = 0;
var flag = true;
$('.arrow .arrow_right').click(function(){
  if(flag){
    flag = false;
    index2++;
    // var index = $('.slidebox .sbox').index();
    // console.log(index2);
    $('.slidebox').animate({
      left: index2*-690
    },1000,function(){
      if(index2 === 2) {
        $('.slidebox').css('left',0);
        index2 = 0;
      }
      flag= true;
    });
  }
});

$('.arrow .arrow_left').click(function(){
  if(flag){
    flag = false;
    index2--;
    // var index = $('.slidebox .sbox').index();
    // console.log(index2);
    if(index2 === -1) {
       index2 = 1;
       $('.slidebox').css('left',2*-690);
    }
    $('.slidebox').animate({
      left: index2*-690
    },1000,function(){
      flag= true;
    });
  }
});



//实现随便听听动画效果
var isOK = true;
$('.random_con .background').click(function(){
  var index3 = $(this).parent().index();
    // console.log(index3);
  if(isOK) {
    $(this).next().next().next().fadeOut();
    $(this).next().next().animate({
      width: 175
    },1000); 
    // $(this).next().css('background-color','rgba(160, 24, 24, 0.7)');
   
    
    $(this).next().find('img').animate({
      left:126
    },1000,function(){
     $(this)[0].style.animation = " rotate 4s linear infinite";
     
     
     $(this).parent().parent().parent().parent().next().find('audio').get(index3).load();
     $(this).parent().parent().parent().parent().next().find('audio').get(index3).play();
    //  console.log( $(this).parent().parent().parent().parent().next().find('audio'));
    });
  }
  isOK = false;
  

  // console.log($(this).siblings());
 
});
$('.random_con .background_img').find('img').click(function(){
  var index3 = $(this).parent().parent().index();
  $(this).parent().next().animate({
    width: 32
  },1000); 
  $(this)[0].style.animation = '';
   $(this).animate({
     left:0
   },1000,function(){
     $(this).parent().next().next().fadeIn();
   });
   $(this).parent().parent().parent().parent().next().find('audio').get(index3).pause();
    // console.log( $(this).parent().parent().parent().parent().next().find('audio').get(index3));
    // console.log(index3);
   isOK = true;
});
// console.log($('.random_con .background').next()[0])

$(window).scroll(function(){
  var vv = $(window)[0].pageYOffset + $(window)[0].innerHeight;
  var hh = $('.random_listen .random_con').offset().top;
  // console.log(vv);
  if(vv > hh) {
    $('.random_con li').first().fadeIn(500,function(){
       $(this).next().fadeIn(500,arguments.callee)
    });
  }
})



