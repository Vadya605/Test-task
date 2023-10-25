import { getTheme } from "@/utils/getTheme"

const lightTheme = getTheme('light')
const darkTheme = getTheme('dark')

export const MAP_STYLE_LIGHT = [
    {
        "featureType": "poi",
        "elementType": "labels",
        "stylers": [
            { "visibility": "off" }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text",
        "stylers": [
            {
                "color": lightTheme.palette.mapLabel?.main
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": lightTheme.palette.mapLandscape?.main
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "color": lightTheme.palette.mapHighway?.main
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": lightTheme.palette.mapHighwayStroke?.main
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": lightTheme.palette.mapWater?.main
            }
        ]
    }
]

export const MAP_STYLE_DARK = [
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "saturation": 36
            },
            {
                "color": darkTheme.palette.common.black
            },
            {
                "lightness": 40
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": darkTheme.palette.common.black
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": darkTheme.palette.common.black
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": darkTheme.palette.common.black
            },
            {
                "lightness": 17
            },
            {
                "weight": 1.2
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": darkTheme.palette.common.black
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": darkTheme.palette.common.black
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": darkTheme.palette.common.black
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": darkTheme.palette.common.black
            },
            {
                "lightness": 29
            },
            {
                "weight": 0.2
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": darkTheme.palette.common.black
            },
            {
                "lightness": 18
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": darkTheme.palette.common.black
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": darkTheme.palette.common.black
            },
            {
                "lightness": 19
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": darkTheme.palette.common.black
            },
            {
                "lightness": 17
            }
        ]
    }
]

export const CIRCLE_OPTIONS = {
    fillColor: lightTheme.palette.circleFill?.main,
    strokeColor: lightTheme.palette.primary?.main,
    strokeWeight: 1 
}

export const MAP_OPTIONS = {
    panControl: true,
    zoomControl: false,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    rotateControl: false,
    clickableControl: false,
    keyboardShortcuts: false,
    scrollwheel: true,
    disableClickZoom: false,
    fullScreenControl: false,
    disableDefaultUI: true,
    clickableIcons: false,
}

export const DEFAULT_CENTER = {
    lat: 51.5085300,
    lng: -0.1257400
}