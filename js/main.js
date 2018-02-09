/* Делаем собственный слайдер на jQuery */

$(function() {	
	var slideNow = 1;
  var keyRight = 39;
  var keyLeft = 37;
 var slideCount = $('.sliderwrapper').children().length;
 var slideTime = 1000;
 var navBtn = $('.slide-nav');

 navBtn.click(function () {
 	navBtn=$(this).index();
 	$('.active').removeClass('active');
 	$(this).toggleClass('active');
 	if (navBtn +1 !=slideNow) {
 		var translateWidth = -$('.viewport').width()*(navBtn);
  		$('.sliderwrapper').css ({
  	 	 'transform': 'translate('+translateWidth+'px,0)',
  	 	 '-o-transform':'translate('+translateWidth+'px,0)',
  	 	 '-webkit-transform':'translate('+translateWidth+'px,0)'
  	 });
  	 slideNow=navBtn+1;
 	}
 });

// setInterval(nextSlide,slideTime);
$('.btn-next').on('click', function () {
	nextSlide();
	$('.active').removeClass('active');
 $('.slide-nav[data-btns='+slideNow+']').addClass('active');
 });

$(this).keydown(function() {
    if (event.which == keyRight) {  
      nextSlide();
  $('.active').removeClass('active');
 $('.slide-nav[data-btns='+slideNow+']').addClass('active');
    };
});

$(this).keydown(function() {
    if (event.which == keyLeft) {  
      prevSlide();
  $('.active').removeClass('active');
 $('.slide-nav[data-btns='+slideNow+']').addClass('active');
    };
});


$('.btn-prev').on('click', function() {
	prevSlide();
	$('.active').removeClass('active');
 $('.slide-nav[data-btns='+slideNow+']').addClass('active');
});

function nextSlide() { 
  if (slideNow == slideCount || slideNow <=0 || slideNow > slideCount) {
  	 $('.sliderwrapper').css ({
  	 	 'transform': 'translate(0,0)',
  	 	 '-o-transform':'translate(0,0)',
  	 	 '-webkit-transform':'translate(0,0)'
  	 });
  	 slideNow=1;
  	} else {
  		var translateWidth = -$('.viewport').width()*(slideNow);
  		$('.sliderwrapper').css ({
  	 	 'transform': 'translate('+translateWidth+'px,0)',
  	 	 '-o-transform':'translate('+translateWidth+'px,0)',
  	 	 '-webkit-transform':'translate('+translateWidth+'px,0)'
  	 });
  	 slideNow++;
  	}
  }

  function prevSlide() { 
  if (slideNow == 1 || slideNow <=0 || slideNow > slideCount) {
  	 var translateWidth = -$('.viewport').width()*(slideCount-1);
  	 $('.sliderwrapper').css ({
  	 	 'transform': 'translate('+translateWidth+'px,0)',
  	 	 '-o-transform':'translate('+translateWidth+'px,0)',
  	 	 '-webkit-transform':'translate('+translateWidth+'px,0)'
  	 });
  	 slideNow=slideCount;
  	} else {
  		var translateWidth = -$('.viewport').width()*(slideNow - 2);
  		$('.sliderwrapper').css ({
  	 	 'transform': 'translate('+translateWidth+'px,0)',
  	 	 '-o-transform':'translate('+translateWidth+'px,0)',
  	 	 '-webkit-transform':'translate('+translateWidth+'px,0)'
  	 });
  	 slideNow--;
  	}
  }
	});