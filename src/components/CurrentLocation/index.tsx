import { CustomMarker } from './styled'
import CurrentLocationIcon from '../../assets/img/CurrentLocation.svg'

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