import CurrentLocationIcon from '@/assets/img/CurrentLocation.svg'
import { useTypeSelector } from '@/hooks/redux'
import { Marker } from '@react-google-maps/api'

export default function CurrentLocation() {

    const { userLocation } = useTypeSelector(state => state.Map)

    return (
        <Marker icon={CurrentLocationIcon} position={userLocation} />
    )
}