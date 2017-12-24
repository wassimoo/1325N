/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Init Menu
3. Set Header
4. Init Slider
5. Init Video
6. Init Clients
7. Init Stats
8. Init Testimonials
9. Init Scrolling


******************************/

jQuery(document).ready(function($)
{
	"use strict";

	/* 

	1. Vars and Inits

	*/

	var header = $('.header');
	var hamburger = $('.hamburger_container');
	var menuActive = false;
	var fsMenu = $('.fs_menu_container');
	var fsOverlay = $('.fs_menu_overlay');
	var fsClose = $('.fs_close_container');
	var menuItemsContainer = $(".fs_menu_items")
	var menuItems = $(".menu_item");
	var ctrl = new ScrollMagic.Controller();

	initMenu();
	initMainSlider();
	initVideo();
	initClients();
	initStats();
	initTestimonials();
	initScrolling();

	setHeader();

	$(window).on('resize', function()
	{
		setHeader();
	});

	$(window).on('scroll', function()
	{
		setHeader();
	});

	/* 

	2. Init Menu

	*/

	function initMenu()
	{
		var tm0 = TweenMax.set(menuItemsContainer, {css:{"pointer-events":"none"}});
		var tm1 = TweenMax.set(menuItems, {x:500, autoAlpha:0});
		var items = $('.nav_links');

		hamburger.on('click', function()
		{
			if(!menuActive)
			{
				openMenu();
			}
		});

		fsOverlay.on('click', function()
		{
			if(menuActive)
			{
				closeMenu();
			}
		});

		fsClose.on('click', function()
		{
			if(menuActive)
			{
				closeMenu();
			}
		});

		//close menu after clicking on items
		if(items.length)
		{
			items.each(function()
	    	{
	    		var ele = $(this);
	    		ele.on('click', function(e)
	    		{
	    			closeMenu();
	    		});
	    	});
		}
	}

	function openMenu()
	{
		var tm2 = TweenMax.to(fsOverlay, 0.2, {css:{'background':"rgba(255,255,255,0.8)",'pointer-events':"auto"}});
		var tm3 = TweenMax.to(fsMenu, 0.2, {x:-700, ease: Circ.easeOut});
		var tm4 = TweenMax.set(menuItemsContainer, {css:{"pointer-events":"auto"}});
		var tm5 = TweenMax.staggerTo(menuItems, 0.4, {x:0, autoAlpha:1, ease:Back.easeOut.config(1.4), delay:0.2}, 0.06);

		menuActive = true;
	}

	function closeMenu()
	{
		var tm6 = TweenMax.staggerTo(menuItems, 0.4, {x:550, autoAlpha:0, ease: Circ.easeOut}, 0.06);
		var tm7 = TweenMax.to(fsMenu, 0.2, {x:650, delay:0.2, ease: Circ.easeOut});
		var tm8 = TweenMax.to(fsOverlay, 0.2, {css:{'background':"rgba(255,255,255,0)",'pointer-events':"none"}, delay:0.3});

		menuActive = false;
	}

	/* 

	3. Set Header

	*/

	function setHeader()
	{
		var wdth = window.innerWidth;
		var scrlTop = $(window).scrollTop();

		if(wdth < 481)
		{
			if(scrlTop > 100)
			{
				header.css({'height':"60px", "marginTop":"0px", "background":"rgba(255,255,255,0.95)"});
			}
			else
			{
				header.css({'height':"60px", "marginTop":"0px", "background":"rgba(255,255,255,0)"});
			}
		}
		else if(wdth < 768)
		{
			if(scrlTop > 100)
			{
				header.css({'height':"60px", "marginTop":"0px", "background":"rgba(255,255,255,0.95)"});
			}
			else
			{
				header.css({'height':"60px", "marginTop":"0px", "background":"rgba(255,255,255,0)"});
			}
		}
		else if(wdth < 992)
		{
			if(scrlTop > 100)
			{
				header.css({'height':"60px", "marginTop":"0px", "background":"rgba(255,255,255,0.95)"});
			}
			else
			{
				header.css({'height':"60px", "marginTop":"0px", "background":"rgba(255,255,255,0)"});
			}
		}
		else
		{
			if(scrlTop > 100)
			{
				header.css({'height':"80px", "marginTop":"0px", "background":"rgba(255,255,255,0.95)"});
			}
			else
			{
				header.css({'height':"135px", "background":"rgba(255,255,255,0)"});
			}
		}

		// if(window.innerWidth > 991 && menuActive)
		// {
		// 	closeMenu();
		// 	menuActive = false;
		// }
	}

	/* 

	4. Init Slider

	*/

	function initMainSlider()
	{
		if($('.main_image_slider').length)
		{
			var slider = $('.main_image_slider');

			slider.owlCarousel(
			{
				items:1,
				loop:true,
				mouseDrag:false,
				touchDrag:false,
				autoplay:true,
				autoplaySpeed: 1500,
				navSpeed: 1500,
				smartSpeed: 1500,
				dots:false

			});
		}

		if($('.main_content_slider').length)
		{
			var slider2 = $('.main_content_slider');

			slider2.owlCarousel(
			{
				items:1,
				loop:true,
				mouseDrag:false,
				touchDrag:false,
				autoplay:true,
				animateIn: 'fadeIn',
				animateOut: 'fadeOut',
				autoplaySpeed: 1500,
				navSpeed: 1500,
				smartSpeed: 1500,
				dots:false

			});
		}

		if($('.nav_left').length && $('.nav_right').length)
		{
			var left = $('.nav_left');
			var right = $('.nav_right');

			left.on('click', function()
			{
				slider.trigger('prev.owl.carousel');
				slider2.trigger('prev.owl.carousel');
			});

			right.on('click', function()
			{
				slider.trigger('next.owl.carousel');
				slider2.trigger('next.owl.carousel');
			});
		}	
	}

	/* 

	5. Init Video

	*/

	function initVideo()
	{
		if($('.video').length)
		{
			var vid = $('.video');

			vid.magnificPopup(
			{
				disableOn: 700,
				type: 'iframe',
				mainClass: 'mfp-fade',
				removalDelay: 160,
				preloader: false,

				fixedContentPos: false
			});
		}
	}

	/* 

	6. Init Clients

	*/

	function initClients()
	{
		if($('.clients_slider').length)
		{
			var slider3 = $('.clients_slider');

			slider3.owlCarousel(
			{
				loop:true,
				dots:false,
				responsive:
				{
					0:{items:1},
					480:{items:1},
					768:{items:2},
					991:{items:3},
					1280:{items:4},
					1440:{items:5}
				}
			});
		}
	}

	/* 

	7. Init Stats

	*/

	function initStats()
	{
		if($('.stats_counter').length)
		{
			var statsItems = $('.stats_counter');

	    	statsItems.each(function(i)
	    	{
	    		var ele = $(this);
	    		var endValue = ele.data('end-value');
	    		var eleValue = ele.text();

	    		var statsScene = new ScrollMagic.Scene({
		    		triggerElement: this,
		    		triggerHook: 'onEnter',
		    		reverse:false
		    	})
		    	.on('start', function()
		    	{
		    		var counter = {value:eleValue};
		    		var counterTween = TweenMax.to(counter, 4,
		    		{
		    			value: endValue,
		    			roundProps:"value", 
						ease: Circ.easeOut, 
						onUpdate:function()
						{
							document.getElementsByClassName('stats_counter')[i].innerHTML = counter.value;
						}
		    		});
		    	})
			    .addTo(ctrl);
	    	});
		}	
	}

	/* 

	8. Init Testimonials

	*/

	function initTestimonials()
	{
		if($('.test_slider').length)
		{
			var slider4 = $('.test_slider');

			slider4.owlCarousel(
			{
				items:1,
				loop:true,
				dots:false,
				autoplay:true,
				navSpeed: 1000,
				smartSpeed: 1000,
				autoplaySpeed: 1000
			});

			if($('.test_nav_left').length && $('.test_nav_right').length)
			{
				var left = $('.test_nav_left');
				var right = $('.test_nav_right');

				left.on('click', function()
				{
					slider4.trigger('prev.owl.carousel');
				});

				right.on('click', function()
				{
					slider4.trigger('next.owl.carousel');
				});
			}
		}
	}

	/* 

	9. Init Scrolling

	*/

	function initScrolling()
	{
		if($('.nav_links').length)
		{
			var links = $('.nav_links');
	    	links.each(function()
	    	{
	    		var ele = $(this);
	    		var target = ele.data('scroll-to');
	    		ele.on('click', function(e)
	    		{
	    			e.preventDefault();
	    			$(window).scrollTo(target, 1500, {offset: -80, easing: 'easeInOutQuart'});
	    		});
	    	});
		}	
	}
});

