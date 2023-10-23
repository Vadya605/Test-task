import { Marker } from '@react-google-maps/api'

import CurrentLocationIcon from '@/assets/img/CurrentLocation.svg'

import { useTypeSelector } from '@/hooks/redux'

export default function CurrentLocation() {

    const { userLocation } = useTypeSelector(state => state.Map)

    return (
        <Marker icon={CurrentLocationIcon} position={userLocation} />
    )
}