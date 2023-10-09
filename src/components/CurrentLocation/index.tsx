import CurrentLocationIcon from '@/assets/img/CurrentLocation.svg'

import { CustomMarker } from './styled'

interface CurrentLocationProps {
    position: {
        lat: number,
        lng: number
    }
}

export default function CurrentLocation({ position }: CurrentLocationProps){
    return(
        // <></>
        <CustomMarker icon={CurrentLocationIcon} position={position} />
    )
}