$(document).ready(function(){

	'use strict';

	$('.icon').click(function(){
		$('.nav-list').slideToggle()
	});

	$(window).scroll(function(){
		var sc = $(this).scrollTop();
		if(sc > 100){
			$('header').addClass('sticky');
		}else{
			$('header').removeClass('sticky');
		}
	});

	$('nav .nav-list .list a').click(function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: $('#' + $(this).data('scroll')).offset().top -70
		},1000);
	});

	//ajout de la class active au liste li du navbar
	$('nav .nav-list .list a').click(function(){
		$(this).addClass('active').parent().siblings().find('a').removeClass('active');
	});
});