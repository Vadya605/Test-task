import { theme } from "@/theme"

const MAP_THEME = [
    {
        "featureType": "all",
        "elementType": "labels.text",
        "stylers": [
            {
                "color": theme.palette.mapLabel.main
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
                "color": theme.palette.mapLandscape.main
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "color": theme.palette.mapHighway.main
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": theme.palette.mapHighwayStroke.main
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": theme.palette.mapWater.main
            }
        ]
    }
]

export const CIRCLE_OPTIONS = {
    fillColor: theme.palette.circleFill.main,
    strokeColor: theme.palette.primary.main,
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
    styles: MAP_THEME
}

export const DEFAULT_CENTER = {
    lat: 51.5085300,
    lng: -0.1257400
}