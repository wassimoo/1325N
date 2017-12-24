/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits


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
	var map;

	initMenu();
	initGoogleMap();

	setHeader();

	$(window).on('resize', function()
	{
		setHeader();
	});

	$(window).on('scroll', function()
	{
		setHeader();
	});

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

	2. Set Header

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

	function initGoogleMap()
    {
    	var myLatlng = new google.maps.LatLng(52.354714323965155, 4.898623049999969);
    	var mapOptions = 
    	{
    		center: myLatlng,
	       	zoom: 13,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			draggable: true,
			scrollwheel: false,
			zoomControl: true,
			zoomControlOptions:
			{
				position: google.maps.ControlPosition.RIGHT_CENTER
			},
			mapTypeControl: false,
			scaleControl: false,
			streetViewControl: false,
			rotateControl: false,
			fullscreenControl: true,
			styles:
			[
			  {
			    "elementType": "geometry",
			    "stylers": [
			      {
			        "color": "#f5f5f5"
			      }
			    ]
			  },
			  {
			    "elementType": "labels.icon",
			    "stylers": [
			      {
			        "visibility": "off"
			      }
			    ]
			  },
			  {
			    "elementType": "labels.text.fill",
			    "stylers": [
			      {
			        "color": "#616161"
			      }
			    ]
			  },
			  {
			    "elementType": "labels.text.stroke",
			    "stylers": [
			      {
			        "color": "#f5f5f5"
			      }
			    ]
			  },
			  {
			    "featureType": "administrative.land_parcel",
			    "elementType": "labels",
			    "stylers": [
			      {
			        "visibility": "off"
			      }
			    ]
			  },
			  {
			    "featureType": "administrative.land_parcel",
			    "elementType": "labels.text.fill",
			    "stylers": [
			      {
			        "color": "#bdbdbd"
			      }
			    ]
			  },
			  {
			    "featureType": "poi",
			    "elementType": "geometry",
			    "stylers": [
			      {
			        "color": "#eeeeee"
			      }
			    ]
			  },
			  {
			    "featureType": "poi",
			    "elementType": "labels.text",
			    "stylers": [
			      {
			        "visibility": "off"
			      }
			    ]
			  },
			  {
			    "featureType": "poi",
			    "elementType": "labels.text.fill",
			    "stylers": [
			      {
			        "color": "#757575"
			      }
			    ]
			  },
			  {
			    "featureType": "poi.park",
			    "elementType": "geometry",
			    "stylers": [
			      {
			        "color": "#e5e5e5"
			      }
			    ]
			  },
			  {
			    "featureType": "poi.park",
			    "elementType": "labels.text.fill",
			    "stylers": [
			      {
			        "color": "#9e9e9e"
			      }
			    ]
			  },
			  {
			    "featureType": "road",
			    "elementType": "geometry",
			    "stylers": [
			      {
			        "color": "#ffffff"
			      }
			    ]
			  },
			  {
			    "featureType": "road",
			    "elementType": "geometry.fill",
			    "stylers": [
			      {
			        "color": "#ff6347"
			      }
			    ]
			  },
			  {
			    "featureType": "road.arterial",
			    "elementType": "labels",
			    "stylers": [
			      {
			        "visibility": "off"
			      }
			    ]
			  },
			  {
			    "featureType": "road.arterial",
			    "elementType": "labels.text.fill",
			    "stylers": [
			      {
			        "color": "#757575"
			      }
			    ]
			  },
			  {
			    "featureType": "road.highway",
			    "elementType": "geometry",
			    "stylers": [
			      {
			        "color": "#dadada"
			      }
			    ]
			  },
			  {
			    "featureType": "road.highway",
			    "elementType": "geometry.fill",
			    "stylers": [
			      {
			        "color": "#ff6347"
			      }
			    ]
			  },
			  {
			    "featureType": "road.highway",
			    "elementType": "labels",
			    "stylers": [
			      {
			        "visibility": "off"
			      }
			    ]
			  },
			  {
			    "featureType": "road.highway",
			    "elementType": "labels.text.fill",
			    "stylers": [
			      {
			        "color": "#616161"
			      }
			    ]
			  },
			  {
			    "featureType": "road.local",
			    "stylers": [
			      {
			        "visibility": "off"
			      }
			    ]
			  },
			  {
			    "featureType": "road.local",
			    "elementType": "labels",
			    "stylers": [
			      {
			        "visibility": "off"
			      }
			    ]
			  },
			  {
			    "featureType": "road.local",
			    "elementType": "labels.text.fill",
			    "stylers": [
			      {
			        "color": "#9e9e9e"
			      }
			    ]
			  },
			  {
			    "featureType": "transit.line",
			    "elementType": "geometry",
			    "stylers": [
			      {
			        "color": "#e5e5e5"
			      }
			    ]
			  },
			  {
			    "featureType": "transit.station",
			    "elementType": "geometry",
			    "stylers": [
			      {
			        "color": "#eeeeee"
			      }
			    ]
			  },
			  {
			    "featureType": "water",
			    "elementType": "geometry",
			    "stylers": [
			      {
			        "color": "#c9c9c9"
			      }
			    ]
			  },
			  {
			    "featureType": "water",
			    "elementType": "labels.text.fill",
			    "stylers": [
			      {
			        "color": "#9e9e9e"
			      }
			    ]
			  }
			]
    	}

    	// Initialize a map with options
    	map = new google.maps.Map(document.getElementById('map'), mapOptions);
    	var q;

		var marker = new google.maps.Marker({
			position: myLatlng,
			map:map,
			title:'NEXT'
		});

		setMap();
			
		google.maps.event.addListener(map, 'zoom_changed', function()
		{
			setMap();
		});

    	google.maps.event.addDomListener(window, 'resize', function()
    	{
    		setTimeout(function()
			{
				setMap();
			}, 1000);
    	});

    	function setMap()
    	{
    		map.setCenter(myLatlng);
    	}
    }
});