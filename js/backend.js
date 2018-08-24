$(document).ready(function(){

	'use strict';

	$('.icon').click(function(){
		$('.nav-list').slideToggle()
	});

	//rendre navbar backgroundColor black apres scroll 100px
	$(window).scroll(function(){
		var sc = $(this).scrollTop();
		if(sc > 100){
			$('header').addClass('sticky');
		}else{
			$('header').removeClass('sticky');
		}
	});

	//relier a de navbar avec scrollTop des sections
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

	
	$(window).scroll(function(){
		//suchronize scroll with classActive of link of navbar
		$('.sections2').each(function(){
			if(($(window).scrollTop() + 90) > $(this).offset().top){
				var sectionsId = $(this).attr('id');
				$('nav .nav-list .list a').removeClass('active');
				$('nav .nav-list .list a[data-scroll="' + sectionsId + '"]').addClass('active');
			}
		});

		//sychronize scroll with button scroll-to-top
		if($(window).scrollTop() >= 1000){
			$('.scroll-to-top').fadeIn(400);
		}else{
			$('.scroll-to-top').fadeOut(400);
		}
	});

	// Event click of button scroll-to-top
	$('.scroll-to-top').click(function(event){
		event.preventDefault();
		$('html, body').animate({
			scrollTop: 0
		}, 1000);
	});

	//popup btn-commencer
	$('.btn-commencer').click(function(){
		$('.popup1').fadeIn(1000);
	});

	$('.close-popup').click(function(){
		$('.popup1').fadeOut(1000);
	});

	$(document).keydown(function(e){
		if(e.keyCode == 27){
			$('.popup').fadeOut();
		}
	});

	//button with span effects
	$('.button').hover(function(){
		$(this).find('span').eq(0).animate({
			width: '100%'
		},200)
	},function(){
		$(this).find('span').eq(0).animate({
			width: 0
		},200)
	});
});