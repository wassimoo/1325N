 var map;
      function initialize() {
        $(document).find(".m-map").each(function(){
                var this_id   = $(this).attr("id");
                
                var lattitude = $(this).attr("data-lati");
                var longitude = $(this).attr("data-long");
                var mapElement = document.getElementById(this_id);  
                var mapOptions = {
                    // How zoomed in you want the map to start at (always required)
                    zoom: 8,

                    // The latitude and longitude to center the map (always required)
                    center: new google.maps.LatLng(lattitude, longitude), // 
                    disableDefaultUI: true,
                    
                    // How you would like to style the map. 
                    // This is where you would paste any style found on Snazzy Maps.
                    styles: [
							    {
							        "featureType": "administrative",
							        "elementType": "geometry",
							        "stylers": [
							            {
							                "color": "#a7a7a7"
							            }
							        ]
							    },
							    {
							        "featureType": "administrative",
							        "elementType": "labels.text.fill",
							        "stylers": [
							            {
							                "visibility": "on"
							            },
							            {
							                "color": "#002a50"
							            }
							        ]
							    },
							    {
							        "featureType": "administrative.locality",
							        "elementType": "labels.text.fill",
							        "stylers": [
							            {
							                "color": "#002a50"
							            }
							        ]
							    },
							    {
							        "featureType": "administrative.neighborhood",
							        "elementType": "labels.text.fill",
							        "stylers": [
							            {
							                "color": "#0086ff"
							            }
							        ]
							    },
							    {
							        "featureType": "landscape",
							        "elementType": "geometry.fill",
							        "stylers": [
							            {
							                "visibility": "on"
							            },
							            {
							                "color": "#efefef"
							            }
							        ]
							    },
							    {
							        "featureType": "landscape.man_made",
							        "elementType": "geometry.stroke",
							        "stylers": [
							            {
							                "color": "#ffffff"
							            },
							            {
							                "visibility": "on"
							            }
							        ]
							    },
							    {
							        "featureType": "poi",
							        "elementType": "geometry.fill",
							        "stylers": [
							            {
							                "visibility": "on"
							            },
							            {
							                "color": "#d9d9d9"
							            }
							        ]
							    },
							    {
							        "featureType": "poi",
							        "elementType": "labels",
							        "stylers": [
							            {
							                "visibility": "off"
							            }
							        ]
							    },
							    {
							        "featureType": "poi",
							        "elementType": "labels.icon",
							        "stylers": [
							            {
							                "visibility": "off"
							            }
							        ]
							    },
							    {
							        "featureType": "road",
							        "elementType": "labels.text.fill",
							        "stylers": [
							            {
							                "color": "#363636"
							            }
							        ]
							    },
							    {
							        "featureType": "road",
							        "elementType": "labels.icon",
							        "stylers": [
							            {
							                "visibility": "off"
							            }
							        ]
							    },
							    {
							        "featureType": "road.highway",
							        "elementType": "geometry.fill",
							        "stylers": [
							            {
							                "color": "#ffffff"
							            }
							        ]
							    },
							    {
							        "featureType": "road.highway",
							        "elementType": "geometry.stroke",
							        "stylers": [
							            {
							                "visibility": "on"
							            },
							            {
							                "color": "#acacac"
							            }
							        ]
							    },
							    {
							        "featureType": "road.arterial",
							        "elementType": "geometry.fill",
							        "stylers": [
							            {
							                "color": "#ffffff"
							            }
							        ]
							    },
							    {
							        "featureType": "road.arterial",
							        "elementType": "geometry.stroke",
							        "stylers": [
							            {
							                "color": "#707070"
							            },
							            {
							                "visibility": "on"
							            }
							        ]
							    },
							    {
							        "featureType": "road.local",
							        "elementType": "geometry.fill",
							        "stylers": [
							            {
							                "visibility": "on"
							            },
							            {
							                "color": "#ffffff"
							            },
							            {
							                "weight": 1.8
							            }
							        ]
							    },
							    {
							        "featureType": "road.local",
							        "elementType": "geometry.stroke",
							        "stylers": [
							            {
							                "color": "#707070"
							            },
							            {
							                "visibility": "off"
							            }
							        ]
							    },
							    {
							        "featureType": "transit",
							        "elementType": "all",
							        "stylers": [
							            {
							                "color": "#f60404"
							            },
							            {
							                "visibility": "off"
							            }
							        ]
							    },
							    {
							        "featureType": "water",
							        "elementType": "geometry.fill",
							        "stylers": [
							            {
							                "color": "#002a50"
							            }
							        ]
							    }
							]
                };
                mapOptions.center = new google.maps.LatLng(lattitude, longitude)
                var map = new google.maps.Map(mapElement, mapOptions);
        }) 
}