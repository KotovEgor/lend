// Модальное окно

// открыть по кнопке
$('.button').click(function() { 
	
	$('.overlay__display').fadeIn();
	$('.overlay__display').addClass('disabled');
	$('.block__blur').css({
		"-webkit-filter": "blur(5px)",
		"-moz-filter": "blur(5px)",
		"-o-filter": "blur(5px)",
		"-ms-filter": "blur(5px)",
		"filter": "blur(5px)"
	});
  
});

// закрыть на крестик
$('.popup__close').click(function() { 
	$('.overlay__display').fadeOut();
	$('.block__blur').css({
		"-webkit-filter": "none",
		"-moz-filter": "none",
		"-o-filter": "none",
		"-ms-filter": "none",
		"filter": "none"
	});
	
});

// закрыть по клику вне окна
$(document).mouseup(function (e) { 
	var popup = $('.popup__wrapper');
	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
		$('.overlay__display').fadeOut();
		$('.block__blur').css({
			"-webkit-filter": "none",
			"-moz-filter": "none",
			"-o-filter": "none",
			"-ms-filter": "none",
			"filter": "none"
		});
	}
});


/*
// открыть по таймеру 
$(window).on('load', function () { 
	setTimeout(function(){
		if($('.overlay__display').hasClass('disabled')) {
			return false;
		} else {
			
			$(".overlay__display").fadeIn();
		}
	}, 5000);
});
*/