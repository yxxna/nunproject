$(function(){
    $('.logo-image').click(function(){
        location.href = "/";
    });

    $('.btn-retry-RG').click(function(){
        location.href = "/ingame-redgreen";
    })
    $('.btn-retry-BY').click(function(){
        location.href = "/ingame-blueyellow";
    })
    $('.btn-retry-V').click(function(){
        location.href = "/ingame-visual";
    })


    $('.btn-stop').click(function(){
        location.href = "/main";
    })
    // $('.btn-stop-BY').click(function(){
    //     location.href = "main";
    // })
    // $('.btn-stop-V').click(function(){
    //     location.href = "main";
    // })


    $('.btn-next-RG').click(function(){
        location.href = "/info-redgreen";
    })
    $('.btn-next-BY').click(function(){
        location.href = "/info-blueyellow";
    })
    $('.btn-next-V').click(function(){
        location.href = "/info-visual";
    })

    $('.next-color-blind').click(function(){
        location.href = "/info-blueyellow";
    })
});

 //--------힌트버튼 누르면 10s 간 필터 해제 후 돌아오기-----//

//힌트버튼 누르면 10초간 필터 해제


const bgFilter = document.querySelector('canvas');
const bgFilterRG = document.querySelector('.red-green');
const bgFilterBY = document.querySelector('.blue-yellow');
const bgFilterV = document.querySelector('.blinder');


//keyH 힌트버튼 작동
hintBtn = window.addEventListener('keydown',function(e){
    switch(e.keyCode){
      case 72:
        hint();
        break;
  }
    });  

    //필터 때문에 js따로 생성필요
  function hint(){
    $('canvas').css('filter','none');//필터 해제
    $('.hint-timer-color').addClass('hint-start');
  

    setTimeout(function(){
        $('canvas').css('filter','url(#tritanopia)');
        $('.hint-timer-color').removeClass('hint-start');
    },3000);//10s후에 다시 필터적용
  }

   