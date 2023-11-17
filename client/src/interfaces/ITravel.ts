export interface ITravel {
    start: {
        lat: number
        lng: number
    }
    distanceTraveled: string
    end: google.maps.LatLng
    map: google.maps.Map
    setTavelDistanceTraveled: (time: string) => void
    setTravelTime: (kilometrs: string) => void
    setTravelProgress: (progress: number) => void
}

export interface MakeRouteProps {
    setTravelDistance: (kilometrs: string) => void
    setTravelTime: (time: string) => void
    start: {
        lat: number
        lng: number
    }
    end: google.maps.LatLng
    map: google.maps.Map
}
