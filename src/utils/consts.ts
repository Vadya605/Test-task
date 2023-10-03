import Nature from '../assets/img/icons-markers/nature.svg'
import Culture from '../assets/img/icons-markers/culture.svg'
import History from '../assets/img/icons-markers/history.svg'
import Religion from '../assets/img/icons-markers/religion1.svg'
import Architecture from '../assets/img/icons-markers/architecture1.svg'
import Industrial from '../assets/img/icons-markers/industry.svg'
import Other from '../assets/img/icons-markers/other.svg'
import Entertainment from '../assets/img/icons-markers/ferris-wheel.svg'
import Sport from '../assets/img/icons-markers/sports-soccer.svg'
import Adult from '../assets/img/icons-markers/18+.svg'
import Car from '../assets/img/icons-markers/car-rear.svg'
import GasStation from '../assets/img/icons-markers/gas station.svg'
import Bike from '../assets/img/icons-markers/bicycle.svg'
import Shop from '../assets/img/icons-markers/shopping-basket.svg'
import Food from '../assets/img/icons-markers/food.svg'
import Coffee from '../assets/img/icons-markers/coffee.svg'
import Bank from '../assets/img/icons-markers/bank.svg'
import Sleep from '../assets/img/icons-markers/bed.svg'


export const places = [
    {
        id: 1,
        name: 'Природа', 
        icon: Nature, 
        types: ['natural_feature']
    },
    { 
        id: 2, 
        name: 'Культура', 
        icon: Culture, 
        types: ['museum'] 
    },
    { 
        id: 3, 
        name: 'История',
        icon: History, 
        types: ['point_of_interest'] 
    },
    { 
        id: 4, 
        name: 'Религия', 
        icon: Religion, 
        types: ['place_of_worship'] 
    },
    { 
        id: 5, 
        name: 'Архитектура', 
        icon: Architecture, 
        types: ['architectural_feature'] 
    },
    { 
        id: 6, 
        name: 'Индустриальные объекты', 
        icon: Industrial, 
        types: ['industrial_feature'] 
    },
    { 
        id: 7, 
        name: 'Разное', 
        icon: Other,
        types: [''
]    },
    { 
        id: 8, 
        name: 'Развлечения', 
        icon: Entertainment ,
        types: ['amusement_park']
    },
    { 
        id: 9, 
        name: 'Спорт', 
        icon: Sport,
        types: ['stadium', 'gym', 'health'] 
    },
    { 
        id: 10, 
        name: 'Для взрослых', 
        icon: Adult ,
        types: ['']
    },
    { 
        id: 11, 
        name: 'Авто', 
        icon: Car,
        types: ['car_dealer']
    },
    { 
        id: 12, 
        name: 'Заправки', 
        icon: GasStation,
        types: ['gas_station']
    },
    { 
        id: 13, 
        name: 'Велосипеды', 
        icon: Bike,
        types: ['bicycle_store']
    },
    { 
        id: 14, 
        name: 'Магазины', 
        icon: Shop,
        types: ['store']
    },
    { 
        id: 15, 
        name: 'Еда', 
        icon: Food,
        types: ['restaurant']
    },
    { 
        id: 16, 
        name: 'Кофе / чай', 
        icon: Coffee,
        types: ['cafe'], 
    },
    { 
        id: 17, 
        name: 'Банки', 
        icon: Bank,
        types: ['bank']
    },
    { 
        id: 18, 
        name: 'Место для сна', 
        icon: Sleep,
        types: ['lodging']
    },
]

const mapTheme = [
    {
        "featureType": "all",
        "elementType": "labels.text",
        "stylers": [
            {
                "color": "#878787"
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
                "color": "#f9f5ed"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f5f5f5"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#c9c9c9"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#aee0f4"
            }
        ]
    }
]

export const mapOptions = {
    panControl: true,
    zoomControl: true,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    rotateControl: false,
    clickableControl: false,
    keyboardShortcuts: false,
    scrollwheel: true,
    disableClickZoom: false,
    fullScreenControl: false,
    styles: mapTheme
}

export const defaultCenter = {
    lat: 51.5085300,
    lng: -0.1257400
}