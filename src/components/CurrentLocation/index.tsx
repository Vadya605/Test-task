import { Marker } from '@react-google-maps/api'

import CurrentLocationIcon from '@/assets/img/CurrentLocation.svg'

import { CurrentLocationProps } from './interface'

export default function CurrentLocation({ position }: CurrentLocationProps){
    return(
        // <></>
        <Marker icon={CurrentLocationIcon} position={position} />
    )
}