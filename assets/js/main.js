(function($){"use strict";$(window).on('load',function(){$.material.init();$('.dropdown-toggle').dropdown()
$('.search-icon').on('click',function(){$('.navbar-form').fadeIn(300);$('.navbar-form input').focus();});$('.navbar-form input').blur(function(){$('.navbar-form').fadeOut(300);});$('.carousel').carousel()
$('#preloader').fadeOut();$('.video-popup').magnificPopup({disableOn:700,type:'iframe',mainClass:'mfp-fade',removalDelay:160,preloader:false,fixedContentPos:false,});var wow=new WOW({mobile:false});wow.init();var owl=$(".testimonials-carousel");owl.owlCarousel({navigation:false,pagination:true,slideSpeed:1000,stopOnHover:true,autoPlay:true,items:1,itemsDesktopSmall:[1024,1],itemsTablet:[600,1],itemsMobile:[479,1]});var owl=$("#client-logo");owl.owlCarousel({navigation:false,pagination:false,slideSpeed:1000,stopOnHover:true,autoPlay:true,items:4,itemsDesktopSmall:[1024,3],itemsTablet:[600,1],itemsMobile:[479,1]});var owl=$("#flickr-carousel");owl.owlCarousel({slideSpeed:300,paginationSpeed:400,items:1,autoPlay:3000,stopOnHover:true,});var owl=$("#matrl-image-carousel");owl.owlCarousel({slideSpeed:300,paginationSpeed:400,items:4,autoPlay:3000,stopOnHover:true,});var owl=$("#team-carousel");owl.owlCarousel({slideSpeed:300,paginationSpeed:400,items:4,autoPlay:3000,stopOnHover:true,});$('.work-counter-section').on('inview',function(event,visible,visiblePartX,visiblePartY){if(visible){$(this).find('.timer').each(function(){var $this=$(this);$({Counter:0}).animate({Counter:$this.text()},{duration:3000,easing:'swing',step:function(){$this.text(Math.ceil(this.Counter));}});});$(this).off('inview');}});$('#matrl-portfolio').mixItUp();$('#myTab a').on('click',function(e){e.preventDefault()
$(this).tab('show')})
$('.wpb-mobile-menu').slicknav({prependTo:'.navbar-header',parentTag:'span',allowParentLinks:true,duplicate:false,label:'',closedSymbol:'<i class="mdi mdi-chevron-right"></i>',openedSymbol:'<i class="mdi mdi-chevron-down"></i>',});var offset=200;var duration=500;$(window).scroll(function(){if($(this).scrollTop()>offset){$('.back-to-top').fadeIn(400);}else{$('.back-to-top').fadeOut(400);}});$('.back-to-top').on('click',function(event){event.preventDefault();$('html, body').animate({scrollTop:0},600);return false;});});}(jQuery));